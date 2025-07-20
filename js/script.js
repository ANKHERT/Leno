
"use strict"


let menu = document.querySelector("#menu-btn");
let navbarLinks = document.querySelector(".header .navbar .links");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarLinks.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbarLinks.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector(".header .navbar").classList.add("active");
  } else {
    document.querySelector(".header .navbar").classList.remove("active");
  }
};

  


window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});

const backTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 800
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

//accordion
document.querySelectorAll(".accordion").forEach((accordions) => {
  accordions.onclick = () => {
    accordions.classList.toggle("active");
  };
});

// counter

const counters = document.querySelectorAll("[data-counter]");


const speed = 10;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increase = target / speed;

    if (count < target)  {
      counter.innerText = count + increase;

      setTimeout(updateCount, 502)
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});


// var swiper = new Swiper(".info-slider", {
//   grabCursor: true,
//   centeredSlides: true,
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 3,
//     },
//     768: {
//       slidesPerView: 5,
//     },
//     1180: {
//       slidesPerView: 6,
//     },
//   },
// });





var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
  },
});