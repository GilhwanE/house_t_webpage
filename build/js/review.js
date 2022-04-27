const reviewLikeButtons = document.querySelectorAll(
  '.review-card-footer button'
);

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';
const checkIcon = '<i class="ic-check" aria-hidden></i>';

function toggleReviewLikeButton() {
  // 1. btn-primary  <--> btn-outlined
  // 2. text 변경 : 도움됨 <--> 도움이 돼요
  // 3. count 증가 : N 명에게 도움이 되었습니다.

  const isLiked = this.classList.contains('btn-primary'); //버튼의 상태가 도움이됨
  const textElement = this.nextElementSibling;
  const reviewCardFooter = this.parentNode;

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

  if (textElement) {
    // N명에게 도움 업데이트
    const countSpan = textElement.querySelector('span');
    const count = Number(countSpan.innerHTML.replaceAll('.', ''));

    let newCount = count;
    if (isLiked) {
      // 비활성화 -1
      newCount = newCount - 1;
      if (newCount === 0) {
        // textElement 삭제
        textElement.remove();
      } else {
        countSpan.innerHTML = newCount.toLocaleString();
      }
    } else {
      // 활성화 + 1
      newCount = newCount + 1;
      countSpan.innerHTML = newCount.toLocaleString();
    }
  } else {
    if (!isLiked) {
      // 비활성화
      // 앞으로는 활성화 될 것 => 1명
      const newTextElement = document.createElement('p');
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이되었습니다.';
      reviewCardFooter.appendChild(newTextElement);
    }
  }

  this.classList.toggle('btn-primary');
  this.classList.toggle('btn-outlined');
}

reviewLikeButtons.forEach((button) => {
  button.addEventListener('click', toggleReviewLikeButton);
});
