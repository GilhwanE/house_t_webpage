const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');

function myMenuToogle() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closemyMenu);
  }
  myMenu.classList.toggle('is-active');
}

function closemyMenu(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active');
    window.removeEventListener('click', closemyMenu);
  }
}

myMenu.addEventListener('click', myMenuToogle);
