(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Language switch: remember the choice so the root page stops auto-redirecting.
  $$('[data-lang]').forEach(a => a.addEventListener('click', () => {
    try { localStorage.setItem('lang', a.dataset.lang); } catch (e) {}
  }));

  // Placeholder links (href="#") shouldn't jump to the top until they're filled in.
  $$('[data-todo-link]').forEach(a => a.addEventListener('click', e => { if (a.getAttribute('href') === '#') e.preventDefault(); }));

  // The ticker badge pauses every moving thing (WCAG 2.2.2).
  let paused = false;
  const badge = $('.ticker-badge');
  if (badge) badge.addEventListener('click', () => {
    paused = !paused;
    badge.setAttribute('aria-pressed', paused);
    document.documentElement.classList.toggle('paused', paused);
  });

  // ---- load sequence: wait for fonts so the big type doesn't reflow mid-animation
  let started = false;
  const start = () => { if (!started) { started = true; document.body.classList.add('loaded'); } };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(start));
  setTimeout(start, 1500);

  // ---- reveal on scroll (+ stickers popping on, + count-up numbers)
  const countUp = root => {
    if (reduce) return;
    $$('[data-count]', root).forEach(el => {
      const end = +el.dataset.count, t0 = performance.now(), dur = 1100;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  const reveals = $$('.reveal, .stat-sticker');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      countUp(e.target);
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  // ---- ticker: duplicate items once for a seamless loop (static list when motion is reduced)
  const track = $('.ticker-track');
  if (track && !reduce) [...track.children].forEach(li => {
    const c = li.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    track.append(c);
  });

  // ---- scroll-linked pieces. Geometry is measured from elements that are never transformed
  // and cached in measure(), so the scroll handler only writes.
  const movers = [
    ...$$('[data-parallax]').map(el => ({ el, k: +el.dataset.parallax, axis: 'y' })),
    ...$$('[data-drift]').map(el => ({ el, k: +el.dataset.drift, axis: 'x' })),
  ].map(m => ({ ...m, ref: m.el.closest('section'), top: 0, h: 0 }));

  // PT badge ring fills as the training section scrolls past.
  const rings = $$('[data-ring]').map(svg => ({ seal: svg.parentElement, ref: svg.closest('section'), top: 0, h: 0 }));

  // The long table: empty chairs fill one by one as it scrolls into view.
  const tableBlock = $('[data-table]');
  const seats = tableBlock ? $$('.seat', tableBlock).sort((a, b) => a.dataset.order - b.dataset.order) : [];
  const seatCount = $('#seatCount');
  const table = tableBlock && { ref: tableBlock, top: 0, h: 0 };

  const head = $('#siteHead'), hero = $('#top'), pulse = $('#pulse');
  let heroH = 0;
  const measure = () => {
    for (const g of [...movers, ...rings, ...(table ? [table] : [])]) {
      const r = g.ref.getBoundingClientRect();
      g.top = r.top + scrollY;
      g.h = r.height;
    }
    heroH = hero.offsetHeight;
  };

  const updateParallax = () => {
    if (reduce) return;
    const vh = innerHeight, scale = innerWidth < 700 ? 0.5 : 1;
    for (const m of movers) {
      const top = m.top - scrollY;
      if (top + m.h < -vh * 0.5 || top > vh * 1.5) continue;
      const off = (top + m.h / 2 - vh / 2) * m.k * scale;
      m.el.style.transform = m.axis === 'y'
        ? `translate3d(0, ${(-off).toFixed(1)}px, 0)`
        : `translate3d(${off.toFixed(1)}px, 0, 0)`;
    }
  };

  const updateRings = () => {
    const vh = innerHeight;
    for (const g of rings) {
      const p = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - (g.top - scrollY)) / (g.h * 0.75)));
      g.seal.style.setProperty('--ring', (1 - p).toFixed(3));
    }
  };

  let filled = -1;
  const updateTable = () => {
    if (!table) return;
    const vh = innerHeight, top = table.top - scrollY;
    // empty when the table enters at the bottom, full by the time it reaches the upper third
    const p = reduce ? 1 : Math.min(1, Math.max(0, (vh - top) / (vh * 0.65)));
    const n = Math.round(p * seats.length);
    if (n === filled) return;
    filled = n;
    seats.forEach((s, i) => s.classList.toggle('on', i < n));
    if (seatCount) seatCount.textContent = n;
  };

  const updateChrome = () => {
    head.classList.toggle('scrolled', scrollY > 24);
    if (pulse) pulse.classList.toggle('show', scrollY > heroH * 0.5);
  };

  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; updateChrome(); updateParallax(); updateRings(); updateTable(); });
  };
  const onResize = () => { measure(); onScroll(); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onResize);
  addEventListener('load', onResize);
  if (document.fonts) document.fonts.ready.then(onResize);
  onResize();

  // ---- "heart rate": resting 62 BPM, climbs with scroll speed, recovers slowly.
  // The footer shows a workout-style summary (avg / peak).
  const bpmEl = $('#pulseBpm'), avgEl = $('#avgBpm'), maxEl = $('#maxBpm');
  if (bpmEl && pulse) {
    const REST = 62;
    let bpm = REST, lastY = scrollY, shown = REST, beatAt = REST, sum = 0, n = 0, peak = REST;
    setInterval(() => {
      if (document.hidden) return;
      const dy = Math.abs(scrollY - lastY);
      lastY = scrollY;
      // more than two screens in 150ms is a jump (scroll restore, anchor link), not effort
      const target = REST + (dy > innerHeight * 2 ? 0 : Math.min(118, dy / 5));
      bpm += (target - bpm) * (target > bpm ? 0.3 : 0.05);
      const r = Math.round(bpm);
      if (r !== shown) { shown = r; bpmEl.textContent = r; }
      if (Math.abs(r - beatAt) >= 4) { beatAt = r; pulse.style.setProperty('--bpm', r); }
      sum += bpm; n++; peak = Math.max(peak, r);
      const avg = Math.round(sum / n);
      if (avgEl && avgEl.textContent != avg) avgEl.textContent = avg;
      if (maxEl && maxEl.textContent != peak) maxEl.textContent = peak;
    }, 150);
  }

  // ---- podcast cover waveform (animates only while visible)
  const canvas = $('#coverWave');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, on = false, raf = 0;
    const size = () => {
      const dpr = Math.min(2, devicePixelRatio || 1);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = t => {
      const gap = 3, bw = 3, count = Math.floor(w / (bw + gap));
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = getComputedStyle(canvas).color;
      for (let i = 0; i < count; i++) {
        const a = Math.abs(Math.sin(i * 0.31 + t * 1.7) * 0.5 + Math.sin(i * 0.12 - t * 0.8) * 0.35 + Math.sin(i * 0.9 + t * 2.6) * 0.15);
        const bh = Math.max(2, a * h * 0.95);
        ctx.fillRect(i * (bw + gap), (h - bh) / 2, bw, bh);
      }
    };
    const loop = now => { if (!paused) draw(now / 1000); if (on) raf = requestAnimationFrame(loop); };
    size();
    draw(0);
    addEventListener('resize', () => { size(); draw(performance.now() / 1000); });
    if (!reduce && 'IntersectionObserver' in window) {
      new IntersectionObserver(es => {
        on = es[es.length - 1].isIntersecting;
        cancelAnimationFrame(raf);
        if (on) raf = requestAnimationFrame(loop);
      }).observe(canvas);
    }
  }
})();
