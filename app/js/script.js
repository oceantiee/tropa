$(function () {
  //cлайдер в блоке рекомендаций
  const recommend = new Swiper(".recommend", {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: 'true',
    autoplay: {
      delay: 3500,
      disableOnInteraction: !1
    },
    breakpoints: {
      480: {
        spaceBetween: 10
      },
      800: {
        spaceBetween: 15
      },
      1250: {
        spaceBetween: 15
      }
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop()
        }), this.el.addEventListener("mouseleave", () => {
          this.autoplay.start()
        })
      }
    }
  });

  //слайдер в блоке популярных маршрутов
  const popular = new Swiper('.popular__slider', {
    loop: true,
    spaceBetween: 10,
    loop: false,
    slidesPerView: 'auto',
    breakpoints: {
      767: {
        spaceBetween: 15
      },
      991: {
        spaceBetween: 25
      },
      1199: {
        spaceBetween: 30
      }
    },

    navigation: {
      nextEl: '.popular__btn--next',
      prevEl: '.popular__btn--prev',
    },
  });

  //мобильное меню
  $('.menu__btn').on('click', (function () {
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('lock');
  }));
  $('.menu__link').on('click', (function () {
    if ($('body').hasClass('lock')) {
      $('body').toggleClass('lock');
      $('.menu').toggleClass('menu--active');
    }
  }));
  $('.header__logo').on('click', (function () {
    if ($('body').hasClass('lock')) {
      $('body').toggleClass('lock');
      $('.menu').toggleClass('menu--active');
    }
  }));

  //плавный скролл
  $(".header a, .footer__logo").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 850);
  });

  //прилипание хедера к верху экрана
  window.addEventListener("scroll", (function () {
    document.querySelector(".header").classList.toggle("header--fixed", window.scrollY != 0);
  }));

  //анимация при скроле
  AOS.init({
    duration: 600,
    disable: 'phone'
  });

  //сортировка карточек по областям
  const mixer = mixitup(".areas");
});