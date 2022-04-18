const sidebutton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function openSidebar() {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

function closeSidebar() {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

sidebutton.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);
