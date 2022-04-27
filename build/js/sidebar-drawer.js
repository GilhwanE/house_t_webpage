const drawerMenuButtons = document.querySelectorAll('.drawer-menu-button');
const drawerMenuList = document.querySelector('.drawer-menu');

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode; //부모요소를 찾는 속성
  drawerMenu.classList.toggle('is-open');
}

drawerMenuButtons.forEach((e) => {
  e.addEventListener('click', toggleDrawerMenu);
});
