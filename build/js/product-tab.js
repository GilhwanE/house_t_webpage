const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

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

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
});
