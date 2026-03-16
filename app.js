

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


const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = () => {
  lightbox.style.display = "none";
};