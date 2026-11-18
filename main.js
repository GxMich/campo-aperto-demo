document.documentElement.classList.add('js');

// Header: ombra allo scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menu mobile
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  document.documentElement.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
};
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
// Tocco fuori dal menu (sullo sfondo scurito) → chiude
document.addEventListener('click', (e) => { if (nav.classList.contains('open') && !header.contains(e.target)) setMenu(false); });
// Se si passa a desktop col menu aperto, sblocca lo scroll
matchMedia('(min-width: 961px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

// Voce di menu attiva in base alla sezione visibile
const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
const sections = document.querySelectorAll('main section[id]');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => navObserver.observe(s));

// Comparsa degli elementi allo scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Filtro corsi
const tabs = document.querySelectorAll('.tabs [role="tab"]');
const courses = document.querySelectorAll('#course-grid .course');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
    courses.forEach((card) => {
      const show = filter === 'all' || card.dataset.cat === filter || card.dataset.cat === 'all';
      card.classList.toggle('is-hidden', !show);
      card.classList.remove('is-entering');
      if (show) { void card.offsetWidth; card.classList.add('is-entering'); }
    });
  });
});

// Modulo contatti: compone il messaggio e lo mostra. Demo: non invia niente e non salva dati.
const form = document.getElementById('contact-form');
const error = document.getElementById('form-error');
const result = document.getElementById('form-result');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name').trim();
  const nameInput = form.elements.name;
  if (!name) {
    error.hidden = false;
    nameInput.setAttribute('aria-invalid', 'true');
    nameInput.focus();
    return;
  }
  error.hidden = true;
  nameInput.removeAttribute('aria-invalid');

  const dog = data.get('dog').trim();
  const age = data.get('age').trim();
  const msg = data.get('message').trim();
  let text = `Ciao Irene, sono ${name}.`;
  if (dog && age) text += ` Il mio cane si chiama ${dog} e ha ${age}.`;
  else if (dog) text += ` Il mio cane si chiama ${dog}.`;
  else if (age) text += ` Il mio cane ha ${age}.`;
  text += ` Vorrei informazioni su: ${data.get('topic')}.`;
  if (msg) text += `

${msg}`;

  result.textContent = `Messaggio pronto (non inviato, il centro è di fantasia). In un sito reale si aprirebbe WhatsApp con questo testo:

${text}`;
  result.hidden = false;
});

// Nasconde il pulsante flottante quando il modulo contatti è visibile
const waFloat = document.querySelector('.wa-float');
new IntersectionObserver(([entry]) => waFloat.classList.toggle('hide', entry.isIntersecting), { threshold: 0.2 })
  .observe(document.getElementById('contatti'));

