<!DOCTYPE html>
<html class="page" lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aquacase">
  <meta name="keywords" content="Aquacase">
  <title>Aquacase</title>
  <link rel="preload" href="fonts/proxima-nova-300.woff" as="font" crossorigin="anonymous">
  <link rel="preload" href="fonts/proxima-nova-400.woff" as="font" crossorigin="anonymous">
  <link rel="preload" href="fonts/proxima-nova-700.woff" as="font" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="css/styles.min.css">
</head>
<body class="page-body">
  <header class="header">
    <div class="header__wrapper no-lines">
      <a href="#">
        <svg class="header__logo" width="60" height="60" viewBox="0 0 60 60" fill="white">
          <use xlink:href="img/sprite.svg#logo-white"></use>
        </svg>
      </a>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><a href="index.php">Главная</a></li>
          <li class="header__nav-item"><a href="index.php#sessions">Сеансы</a></li>
          <li class="header__nav-item"><a href="index.php#reviews">Отзывы</a></li>
          <li class="header__nav-item"><a href="index.php#addresses">Контакты</a></li>
          <li class="header__nav-item"><a href="news.php">Новости</a></li>
          <li class="header__nav-item"><a href="index.php#about">О нас</a></li>
          <li class="header__nav-item"><a href="blog.php">Блог</a></li>
        </ul>
      </nav>
      <button class="header__call">Записаться на сеанс</button>
      <button class="header__mobile-menu">
        <svg class="header__logo" width="49" height="36" viewBox="0 0 49 36" fill="#018ABE">
          <use xlink:href="img/sprite.svg#hamburger"></use>
        </svg>
      </button>
      <button class="header__mobile-menu-close">
        <svg class="header__logo" width="40" height="39" viewBox="0 0 40 39" fill="#018ABE">
          <use xlink:href="img/sprite.svg#mobile-close"></use>
        </svg>
      </button>
    </div>
  </header>
  <main class="main">

    <?= isset($content) ? $content : ''; ?>

    <?php

    if (isset($_errors)) {
      print_r($_errors);
    }


    ?>
    
    <section class="modal hidden">
      <div class="modal__wrapper">
        <form class="modal__form" action="form.php" method="post" autocomplete="off">
          <legend>Перезвоним Вам<br> в течение 10 минут</legend>
          <fieldset class="modal__form-field">
            <input id="modal__name-input" type="text" name="name" required>
            <label for="modal__name-input">Имя</label>
          </fieldset>
          <fieldset class="modal__form-field">
            <input type="text" id="modal__phone-input" name="phone" required>
            <label for="modal__phone-input">Телефон</label>
          </fieldset>
          <button type="submit">Записаться на сеанс</button>
        </form>
        <button class="modal__close-button"></button>
      </div>
    </section>
    <section class="overlay hidden"></section>
  </main>
  <footer class="footer" id="footer">
    <div class="footer__wrapper <?= $current_page === 'main-page' ? 'no-lines' : ''; ?>">
      <span>© 2018-2022 RitmStyle</span>
      <span>Сделано d-e-n.info</span>
    </div>
  </footer>
  <script src="js/swiper.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
