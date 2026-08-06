const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.top-nav a');
const sections = document.querySelectorAll('main section[id]');
const year = document.getElementById('current-year');

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const setActiveLink = () => {
  let currentId = '';

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${currentId}`
    );
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

/* =========================
   RESEARCH FILTERS
   ========================= */

const themeButtons = document.querySelectorAll('.filter-button');
const typeButtons = document.querySelectorAll('.type-filter-button');
const workItems = document.querySelectorAll('.work-item');
const emptyMessage = document.querySelector('.filter-empty-message');

let activeTheme = 'all';
let activeType = 'all';

const updateWorkItems = () => {
  let visibleCount = 0;

  workItems.forEach((workItem) => {
    const categories = (workItem.dataset.categories || '')
      .split(' ')
      .filter(Boolean);

    const types = (workItem.dataset.type || '')
      .split(' ')
      .filter(Boolean);

    const matchesTheme =
      activeTheme === 'all' ||
      categories.includes(activeTheme);

    const matchesType =
      activeType === 'all' ||
      types.includes(activeType);

    const shouldShow = matchesTheme && matchesType;

    workItem.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  if (emptyMessage) {
    emptyMessage.hidden = visibleCount !== 0;
  }
};

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeTheme = button.dataset.filter || 'all';

    themeButtons.forEach((item) => {
      const isActive = item === button;

      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    updateWorkItems();
  });
});

typeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeType = button.dataset.typeFilter || 'all';

    typeButtons.forEach((item) => {
      const isActive = item === button;

      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    updateWorkItems();
  });
});

updateWorkItems();
