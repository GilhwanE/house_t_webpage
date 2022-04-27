const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBILE = 50 + 40 + 40;

let currentAcitveTab = productTab.querySelector('.is-active'); // 현재 is-active된 버튼 요소 담기

function toggleActiveTab() {
  // 버튼 클릭시 is-active
  const tabItem = this.parentNode; // product-tab-item 요소담기

  if (currentAcitveTab !== tabItem) {
    // 같은 요소 클릭시 is-active 해제 방지
    tabItem.classList.add('is-active'); // item에 is-active 효과 넣기
    currentAcitveTab.classList.remove('is-active'); // is-active였던 버튼에 효과 제거
    currentAcitveTab = tabItem; // is-active 효과 들어간 item요소를 current요소로 바꿔치기
  }
}

function scrollTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE); // 현재 나의 윈도우 크기를 알 수 있음

  window.scrollBy({
    // 스크롤 동작 함수
    top: scrollAmount,
    behavior: 'smooth',
  });
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
  button.addEventListener('click', scrollTabPanel);
});
