const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.top-nav a');
const sections = document.querySelectorAll('main section[id]');
const year = document.getElementById('current-year');

if (year) year.textContent = new Date().getFullYear();

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
    if (section.getBoundingClientRect().top <= 120) currentId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
const filterButtons = document.querySelectorAll('.filter-button');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle('active', item === button);
    });

    workItems.forEach((workItem) => {
      const categories = workItem.dataset.categories
        .split(' ')
        .filter(Boolean);

      const shouldShow =
        selectedFilter === 'all' ||
        categories.includes(selectedFilter);

      workItem.hidden = !shouldShow;
    });
  });
});
