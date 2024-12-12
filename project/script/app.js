// navigation
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $("ul").toggleClass("show");
  })
});

// site loader
var setTimeOut = setTimeout(() => {
  $(".loader-wrapper").fadeToggle();
}, 1000);

// navigation animation scroll
document.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 300)
});

// menu icon hamburger
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// back to top
let btn = document.getElementById("scroll-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
function myFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// footer year changer
let yearDate = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = yearDate;




