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
  console.log(textElement);
  if (isLiked) {
    // 비활성
    this.innerHTML = NOT_HELPFUL;
  } else {
    // 활성
    this.innerHTML = HELPFUL;

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');
    checkIcon.setAttribute('aria-hidden', true);
    this.prepend(checkIcon);
  }

  if (textElement) {
  } else {
      if(!isLiked)
  }

  this.classList.toggle('btn-primary');
  this.classList.toggle('btn-outlined');
}

reviewLikeButton.addEventListener('click', toggleReviewLikeButton);
