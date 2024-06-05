$(document).ready(function () {
  $("#autoWidth").lightSlider({
    adaptiveHeight: true,
    auto: true,
    item: 1,
    slideMargin: 0,
    loop: true,
  });
});

const navbarHome = document.querySelector(".navbarHome");

window.addEventListener("scroll", () => {
  const post = window.scrollY > 100;

  navbarHome.classList.toggle("scroll", post);
});

// navbar
document.addEventListener("click", function (event) {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector("#navbarSupportedContent");

  if (
    !navbarToggler.contains(event.target) &&
    !navbarCollapse.contains(event.target) &&
    navbarCollapse.classList.contains("show")
  ) {
    navbarCollapse.classList.remove("show");
  }
});

// icon geser di table
document.addEventListener("DOMContentLoaded", function () {
  const icon1 = document.getElementById("chevron-icon-right");
  const icon2 = document.getElementById("chevron-icon-left");
  const table = document.getElementById("financial-table");
  const container = document.querySelector(".container");
  let shiftAmount = 50;

  icon1.addEventListener("click", function () {
    if (window.innerWidth < 1000) {
      let currentTransform = table.style.transform
        ? parseInt(table.style.transform.match(/-?\d+/)[0])
        : 0;
      let newTransform = currentTransform - shiftAmount;
      table.style.transform = `translateX(${newTransform}px)`;
    }
  });

  icon2.addEventListener("click", function () {
    if (window.innerWidth < 1000) {
      let currentTransform = table.style.transform
        ? parseInt(table.style.transform.match(/-?\d+/)[0])
        : 0;
      let newTransform = currentTransform + shiftAmount;
      table.style.transform = `translateX(${newTransform}px)`;
    }
  });
});
