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
  if (!el) return;
  const text = 'Deep Learning | Computer Vision | Gen AI | NLP';
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++);
      setTimeout(type, 70);
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

// כותרת דינמית לפי טאב פעיל בפרויקטים
(function projectsHeading() {
  const heading = document.getElementById('projects-heading');
  if (!heading) return;
  const labels = { 'research': 'Research', 'applied': 'Applied Research Projects' };
  document.getElementById('projectsTab')?.addEventListener('shown.bs.tab', e => {
    const id = e.target.getAttribute('data-bs-target')?.replace('#', '');
    if (id && labels[id]) heading.textContent = labels[id];
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
