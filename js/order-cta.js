const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;
// const orderCtaBuyButton = orderCta.children[1];
// const orderCtaBookmarkButton = orderCta.children[2];

const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

function orderIsOpen() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

function orderClose() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderCtaBuyButton.addEventListener('click', orderIsOpen);
orderModalOverlay.addEventListener('click', orderClose);

function toggleOrderBookmark() {
  const [icon, countSpan] = this.children;
  const count = Number(countSpan.innerHTML.replaceAll(',', ''));
  let newCount = count;

  //   활성화 상태면 -> 비활성화 상태로 전환
  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark');
    icon.classList.remove('ic-bookmark-filled');
    newCount = newCount - 1;
  } else {
    //   비활성화 상태 -> 활성화 상태로
    icon.classList.remove('ic-bookmark');
    icon.classList.add('ic-bookmark-filled');
    newCount = newCount + 1;
  }
  countSpan.innerHTML = newCount.toLocaleString();
  this.classList.toggle('is-active');
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderBookmark);
// ic-bookmark-filled
// is-active
// count + 1
