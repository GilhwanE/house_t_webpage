const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbsearchHistory = gnbSearch.querySelector('.search-history');
const gnbsearchHistoryList = gnbsearchHistory.querySelector('ol');
const deleteAllButton = gnbSearch.querySelector(
  '.search-history-header button'
);
const deleteButtonItems = gnbSearch.querySelectorAll('.delete-button');

function closeAllGnbSearchHistory() {
  gnbsearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistory);
}

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
    closeAllGnbSearchHistory();
  }
}

function deleteAllitem() {
  gnbsearchHistoryList.innerHTML = '';
  closeAllGnbSearchHistory();
}

function deleteSearchHistoryItem(e) {
  // delete button 찾기
  // event 전파를 막기
  e.stopPropagation();
  const itemToDelete = this.parentNode;
  gnbsearchHistoryList.removeChild(itemToDelete);
  if (gnbsearchHistoryList.children.length === 0) {
    closeAllGnbSearchHistory();
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllButton.addEventListener('click', deleteAllitem);
deleteButtonItems.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem);
});
