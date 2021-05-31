window.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".menu-wrapper"),
    burgerMenu = document.querySelector(".burger-menu"),
    closeMobileMenu = document.querySelector(".close-menu");

  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });
  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});
