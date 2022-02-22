# 내일의집

URL : https://gilhwane.github.io/house_t_webpage/

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창열기버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a class="gnb-icon-button is-cart" href="#" aria-label="장바구니 페이지 이동">
    <i class="ic-cart"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="#">로그인</a>
    <a href="#">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창열기버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button sm-hidden"
    href="#"
    aria-label="스크랩북 페이지 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a class="gnb-icon-button sm-hidden" href="#" aria-label="내소식 페이지 이동">
    <i class="ic-bell"></i>
  </a>

  <a class="gnb-icon-button is-cart" href="#" aria-label="장바구니 페이지 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <a href="#">로그인</a>
  <a href="#">회원가입</a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="/assets/imgs/img-user-01.jpg" alt="프로필이미지" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 한 경우

```html
<!-- NOTE: 로그인을 한 경우 -->
<div class="sidebar-user">
  <a href="#">
    <div class="avatar-24">
      <img src="./assets/imgs/img-user-01.jpg" alt="프로필이미지" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```

- 로그인을 하지 않은 경우

```html
<!-- NOTE: 로그인 안 한 경우 -->
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="#"> 로그인 </a>
  <a class="btn-primary btn-40" href="#"> 회원가입 </a>
</div>
```
