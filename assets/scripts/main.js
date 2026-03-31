(function () {
  function initHeaderMenu() {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header_burger");
    const body = document.querySelector(".body_wrap");
    const nav = document.querySelector(".header_link");

    if (!header || !burger || !nav) return;

    if (burger.dataset.initialized) return;
    burger.dataset.initialized = "true";

    const toggleMenu = (forceState = null) => {
      const isOpen =
        forceState !== null
          ? forceState
          : header.classList.toggle("header--open");

      header.classList.toggle("header--open", isOpen);
      nav.classList.toggle("active", isOpen);
      burger.setAttribute("aria-expanded", isOpen);

      if (body) {
        body.classList.toggle("body_wrap-active", isOpen);
        body.style.overflow = isOpen ? "hidden" : "";
      }
    };

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener("click", (event) => {
      if (!header.classList.contains("header--open")) return;

      if (!header.contains(event.target)) {
        toggleMenu(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleMenu(false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeaderMenu);
  } else {
    initHeaderMenu();
  }
})();
