# 내일의집 🏠

URL : https://gilhwane.github.io/house_t_webpage/

### skill

- HTML, CSS, SCSS , JS, figma

### 주요기능
- SCSS 스킬을 사용해보기 위해 이 프로젝트를 진행하였습니다. 
- 공통UI 요소를 고려하여 폴더를 분배하여 파일을 관리하였습니다.
- 디자인툴인 figma를 사용하여 이미지를 가져와서 사용하였습니다. (디자인은 제공받음)
- 로그인, 비로그인과 같은 경우의 따라 제작하였습니다. (주석을 통해 알 수 있음) 

### 완성된 페이지 

- 모바일 
- ![모바일](https://user-images.githubusercontent.com/63918911/180941935-23bd3ccd-6bdb-4268-9358-4aea3b91d31a.PNG)

- 데스크탑
![피씨](https://user-images.githubusercontent.com/63918911/180941955-73a21725-329b-45ce-ac52-617f3e25502f.PNG)

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

