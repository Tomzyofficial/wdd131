// Footer js
const d = new Date();
const fullyear = d.getFullYear();

document.getElementById("currentyear").innerHTML = fullyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

// Menu js
const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', function () {
  let isOpen = false;
  if (!isOpen) {
    nav.classList.toggle('show');
    menuButton.classList.toggle('open');
    isOpen = true;
  } else {
    isOpen = false;
    return null;
  }
})