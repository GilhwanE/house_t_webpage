# ๋ด์ผ์์ง ๐ 

URL : https://gilhwane.github.io/house_t_webpage/

### skill

- HTML, CSS, SCSS , JS

### 1. GNB

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ์ด๊ธฐ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>
  <a class="gnb-icon-button is-cart" href="#" aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง ์ด๋">
    <i class="ic-cart"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="#">๋ก๊ทธ์ธ</a>
    <a href="#">ํ์๊ฐ์</a>
  </div>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ์ด๊ธฐ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button sm-hidden"
    href="#"
    aria-label="์คํฌ๋ฉ๋ถ ํ์ด์ง ์ด๋"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a class="gnb-icon-button sm-hidden" href="#" aria-label="๋ด์์ ํ์ด์ง ์ด๋">
    <i class="ic-bell"></i>
  </a>

  <a class="gnb-icon-button is-cart" href="#" aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง ์ด๋">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <a href="#">๋ก๊ทธ์ธ</a>
  <a href="#">ํ์๊ฐ์</a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="๋ฉ๋ด ์ด๊ธฐ ๋ฒํผ"
  >
    <div class="avatar-32">
      <img src="/assets/imgs/img-user-01.jpg" alt="ํ๋กํ์ด๋ฏธ์ง" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- ๋ก๊ทธ์ธ์ ํ ๊ฒฝ์ฐ

```html
<!-- NOTE: ๋ก๊ทธ์ธ์ ํ ๊ฒฝ์ฐ -->
<div class="sidebar-user">
  <a href="#">
    <div class="avatar-24">
      <img src="./assets/imgs/img-user-01.jpg" alt="ํ๋กํ์ด๋ฏธ์ง" />
    </div>
    <strong class="username">์ฌ๋ฌ๋ผ</strong>
  </a>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<!-- NOTE: ๋ก๊ทธ์ธ ์ ํ ๊ฒฝ์ฐ -->
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="#"> ๋ก๊ทธ์ธ </a>
  <a class="btn-primary btn-40" href="#"> ํ์๊ฐ์ </a>
</div>
```

-Image-
 
