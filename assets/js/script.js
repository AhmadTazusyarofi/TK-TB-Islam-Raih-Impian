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
const wrapper = document.getElementById("financial-table").parentElement;

wrapper.style.overflowX = "auto";

let isDown = false;
let startX;
let scrollLeft;

wrapper.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = wrapper.scrollLeft;
});

document.addEventListener("mouseup", () => (isDown = false));
document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 3;
  wrapper.scrollLeft = scrollLeft - walk;
});

// kotak saran
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  const url =
    "https://api.whatsapp.com/send?phone=628980560425&text=Hallo%20Admin.%20Ini%20adalah%20pesan%20dari%20website%20kotak%20saran%20KB-TK%20Islam%20Raih%20Impian%0Asaya%20*" +
    name +
    "*%0Aemail%20*" +
    email +
    "*%0Anomor%20*" +
    number +
    "*%0A%0A*" +
    message +
    "*";

  window.open(url);
}
