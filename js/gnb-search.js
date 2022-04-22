const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbsearchHistory = gnbSearch.querySelector('.search-history');

function openGnbSearchHistory() {
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

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
