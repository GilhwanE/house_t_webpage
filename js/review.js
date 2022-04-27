const reviewLikeButton = document.querySelector('.review-card-footer button');

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';
const checkIcon = '<i class="ic-check" aria-hidden></i>';

function toggleReviewLikeButton() {
  // 1. btn-primary  <--> btn-outlined
  // 2. text 변경 : 도움됨 <--> 도움이 돼요
  // 3. count 증가 : N 명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary'); //버튼의 상태가 도움이됨
  const textElement = this.nextElementSibling;

  if (isLiked) {
    // 비활성
    this.innerHTML = NOT_HELPFUL;
  } else {
    // 활성
    this.innerHTML = HELPFUL;

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');
    checkIcon.setAttribute('aria-hidden', true);
    this.prepend(checkIcon); // 이전 요소에 넣기
  }

  // if (textElement) {
  // } else {
  //     if(!isLiked)
  //     // 앞으로는 활성화 될 것 => 1명
  //     const newTextElement = document.createElement('p')
  // }

  this.classList.toggle('btn-primary');
  this.classList.toggle('btn-outlined');
}

reviewLikeButton.addEventListener('click', toggleReviewLikeButton);
