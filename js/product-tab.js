const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBILE = 50 + 40 + 40;

let currentAcitveTab = productTab.querySelector('.is-active'); // 현재 is-active된 버튼 요소 담기
let disableUpdating = false;

function toggleActiveTab() {
  // 버튼 클릭시 is-active
  const tabItem = this.parentNode; // product-tab-item 요소담기

  if (currentAcitveTab !== tabItem) {
    disableUpdating = true;
    // 같은 요소 클릭시 is-active 해제 방지
    tabItem.classList.add('is-active'); // item에 is-active 효과 넣기
    currentAcitveTab.classList.remove('is-active'); // is-active였던 버튼에 효과 제거
    currentAcitveTab = tabItem; // is-active 효과 들어간 item요소를 current요소로 바꿔치기

    // 1초후에 disableUpdating 값을 true => false 로 바꿔준다
    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
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

// 사전정보 : 각 tabpanel 의 y축 위치
// 요소의 y축 위치는 window.scrollY + getBoundingClientRect().top의 합이다

const productTabPaneIdlList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
];

const productTabPanelList = productTabPaneIdlList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`); // panelId를 ID로 받는 요소를 찾는다
  return tabPanel;
});

const productTabPositionMap = {};

function detectTabPanelPosition() {
  // 각각의 tabPanel의 Y위치를 찾는다.
  // productTabPositionMap 에 값을 업데이트
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id');
    const position = window.scrollY + panel.getBoundingClientRect().top;
    productTabPositionMap[id] = position; // 키와 value를 설정
  });
  updateActiveTabScroll(); // 로드될때 탭 업데이트
}

function updateActiveTabScroll() {
  if (disableUpdating) {
    return;
  }

  // 스크롤 위치에 따른 Active tab 변경
  // 1. 현재 window.scrollY 값 호출
  // 2. 각 Tabpanel y축 위치 productTabPositionMap

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768
      ? TOP_HEADER_DESKTOP + 80
      : TOP_HEADER_MOBILE + 8);

  let newActiveTab;

  if (scrolledAmount >= productTabPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4];
  } else if (scrolledAmount >= productTabPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3];
  } else if (scrolledAmount >= productTabPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2];
  } else if (scrolledAmount >= productTabPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1];
  } else {
    newActiveTab = productTabButtonList[0];
  }

  // 추가 로직 페이지가 끝가지 스크룰이 된 경우
  // newActiveTab 에 productTabButtonList[4] 마지막요소를 넣으면 된다
  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0);
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4];
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode;

    if (newActiveTab !== currentAcitveTab) {
      newActiveTab.classList.add('is-active');
      if (currentAcitveTab !== null) {
        // 현재 탭이 널이 아닐때만 실행한다
        currentAcitveTab.classList.remove('is-active');
      }
      currentAcitveTab = newActiveTab;
    }
  }
}

window.addEventListener('load', detectTabPanelPosition); // 윈도우에 모든요소가 load 된 후에 실행
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000));
window.addEventListener('scroll', _.throttle(updateActiveTabScroll, 300));
