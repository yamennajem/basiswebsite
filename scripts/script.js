// JavaScript Document
console.log("hi");

// Ik heb de hamburgermenu javascript gecodeerd met behulp van ChatGBT, ik begrijp de code wel.


const menuButton = document.querySelector('.MenuButton');
const closeButton = document.querySelector('.CloseButton');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
// const giftsSubmenu = document.querySelector('.gifts-submenu');

// Menu openen
document.querySelector('.MenuButton').addEventListener('click', function () {
  document.body.classList.add('hamburger-active');
  document.querySelector('.hamburger-overlay').classList.add('open');
});

// Menu sluiten
document.querySelector('.CloseButton').addEventListener('click', function () {
  document.body.classList.remove('hamburger-active');
  document.querySelector('.hamburger-overlay').classList.remove('open');
});





