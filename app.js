

let NavLinks = document.querySelector(".nav-links");
let NavLogo = document.querySelector(".nav-logo");

NavLogo.addEventListener("click", () => {
  NavLinks.classList.toggle("show");
});


 var swiper = new Swiper(".mySwiper", {
      direction: "horizontal",
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  }
    });