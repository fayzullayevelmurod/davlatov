
let swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
    },
  },
});

const header = document.querySelector('.header');
const burger = document.querySelector('.header_burger');

if (burger && header) {
  burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header--open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!header.classList.contains('header--open')) return;

    if (!header.contains(event.target)) {
      header.classList.remove('header--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}
