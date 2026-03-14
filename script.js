// Bootstrap form validation + UX
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus({ preventScroll: true });
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Typing effect בכותרת ה-Hero
(function typingEffect() {
  const el = document.getElementById('typing-text');
  const cursor = el?.nextElementSibling;
  if (!el) return;
  const text = 'Deep Learning | Computer Vision | Gen AI | NLP';
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++);
      setTimeout(type, 45);
    } else if (cursor) {
      cursor.style.display = 'none';
    }
  }
  window.addEventListener('load', type);
})();

// Scroll Reveal — סקשנים וכרטיסים נכנסים בגלילה
(function scrollReveal() {
  const targets = document.querySelectorAll(
    'section > .container, .card, .hero .col-lg-7, .hero .col-lg-5'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();

// Typing effect על פסקת About כשנכנסים לסקשן
(function aboutTyping() {
  const el = document.getElementById('about-typing-text');
  if (!el) return;
  const parts = [
    `I'm a Computer Science student at the Holon Institute of Technology (HIT), holding a `,
    { bold: 'GPA of 95' },
    `, with a strong focus on Deep Learning, particularly in Computer Vision, NLP, and Generative AI.\n\nI'm passionate about building end-to-end systems — from synthetic data generation and NLP classification pipelines to training precise medical segmentation models.\n\nMy projects involve practical applications of these technologies, such as leveraging Generative models for data augmentation (solving data scarcity) and developing robust architectures for real-world constraints.`
  ];

  // בנה מחרוזת פשוטה לצורך ה-typing, ואחרי כן החלף bold
  const fullText = parts.map(p => typeof p === 'string' ? p : p.bold).join('');
  const boldWord = parts[1].bold;

  let started = false;
  function startTyping() {
    if (started) return;
    started = true;
    let i = 0;
    function type() {
      if (i <= fullText.length) {
        const current = fullText.slice(0, i++);
        const html = current.replace(boldWord, `<strong class="text-dark">${boldWord}</strong>`);
        el.innerHTML = html.replace(/\n/g, '<br>') + (i <= fullText.length ? '<span class="typing-cursor">|</span>' : '');
        setTimeout(type, 12);
      }
    }
    type();
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { startTyping(); observer.disconnect(); }
  }, { threshold: 0.3 });
  observer.observe(el);
})();

// סגירת offcanvas לפני ניווט לעוגן
(function offcanvasNav() {
  const offcanvasEl = document.getElementById('navOffcanvas');
  if (!offcanvasEl) return;
  offcanvasEl.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, { once: true });
        bsOffcanvas.hide();
      } else {
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

// הדגשת קישור פעיל בניווט בעת גלילה
(function activeNavOnScroll(){
  const links = document.querySelectorAll('.navbar .nav-link[href^="#"]');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!sections.length) return;

  const onScroll = () => {
    const pos = window.scrollY + 120;
    let current = sections[0].id;
    for (const sec of sections) if (pos >= sec.offsetTop) current = sec.id;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
})();
