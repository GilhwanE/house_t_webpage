const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbsearchHistory = gnbSearch.querySelector('.search-history');
const gnbsearchHistoryList = gnbsearchHistory.querySelector('ol');
const deleteAllButton = gnbSearch.querySelector(
  '.search-history-header button'
);

function openGnbSearchHistory() {
  // check => gnbsearchHistoryList안에 li가 몇개있는지?
  // li 가 0개면 실행
  if (gnbsearchHistoryList.children.length === 0) {
    return;
  }

  if (!gnbsearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory);
  }
  gnbsearchHistory.classList.add('is-active');
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbsearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistory);
  }
}

function deleteAllitem() {
  gnbsearchHistoryList.innerHTML = '';
  gnbsearchHistory.classList.remove('is-active');
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllButton.addEventListener('click', deleteAllitem);
