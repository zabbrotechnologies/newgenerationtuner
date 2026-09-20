/* shared.js — Navigation, mobile overlay, scroll reveal, B/A slider */
(function () {
  'use strict';

  // ── Nav scroll state ────────────────────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── Mobile nav ──────────────────────────────────────────────────
  const burger  = document.getElementById('burger');
  const overlay = document.getElementById('mobile-overlay');
  if (burger && overlay) {
    burger.addEventListener('click', () => {
      const open = overlay.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay.querySelectorAll('.mob-close').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll reveal ───────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => obs.observe(el));
  }

  // ── Before/After slider ─────────────────────────────────────────
  const slider = document.getElementById('ba-slider');
  const after  = document.getElementById('ba-after');
  const line   = document.getElementById('ba-line');
  if (slider && after && line) {
    let drag = false;
    function setPos(x) {
      const r = slider.getBoundingClientRect();
      let p = ((x - r.left) / r.width) * 100;
      p = Math.max(2, Math.min(98, p));
      after.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
      line.style.left = p + '%';
    }
    slider.addEventListener('mousedown', e => { drag = true; setPos(e.clientX); });
    window.addEventListener('mousemove', e => { if (drag) setPos(e.clientX); });
    window.addEventListener('mouseup',   () => { drag = false; });
    slider.addEventListener('touchstart', e => { drag = true; setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove',  e => { if (drag) setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend',   () => { drag = false; });
  }

  // ── Testimonial carousel (reviews page) ─────────────────────────
  const items = document.querySelectorAll('.rev-item');
  const prev  = document.getElementById('rev-prev');
  const next  = document.getElementById('rev-next');
  if (items.length && prev && next) {
    let idx = 0;
    function show(i) {
      items.forEach(el => el.classList.remove('active'));
      items[i].classList.add('active');
    }
    next.addEventListener('click', () => { idx = (idx + 1) % items.length; show(idx); });
    prev.addEventListener('click', () => { idx = (idx - 1 + items.length) % items.length; show(idx); });
  }

  // ── Contact form ────────────────────────────────────────────────
  const form = document.getElementById('contact-form');
  const msg  = document.getElementById('form-success');
  if (form && msg) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      msg.style.display = 'block';
      form.reset();
      setTimeout(() => { msg.style.display = 'none'; }, 7000);
    });
  }

  // ── Respect reduced motion ───────────────────────────────────────
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

})();
