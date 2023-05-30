// document.querySelector('.hamburger').addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.toggle('expanded');
// });
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const menubtn = document.querySelector('.menu_toggle_btn');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

menubtn.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
