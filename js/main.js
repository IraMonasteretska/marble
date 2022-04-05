$(document).ready(function () {

  // ----------- start welcomescreen slider --------- //
  var swiper = new Swiper(".welcomescreen__slider", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".welcomescreen__slider-next",
      prevEl: ".welcomescreen__slider-prev",
    },
    speed: 1200,
    autoplay: {
      delay: 1200,
    },
  });
  // ----------- end welcomescreen slider --------- //

  // --- start burger menu --- //
  $(".burgerbtn").on("click", function () {
    $(this).toggleClass("active");
    $(".mobile__menu").toggleClass("active");
  });
  // --- end burger menu --- //

  // --- start PARALLAX ----- //
  if ($("body *").is("#scene")) {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  }
  // --- end PARALLAX ----- //



  // --- start AOS ----- //
  AOS.init({
    duration: 1200,
    easing: "ease",
    disable: "mobile",
  });
  // --- end AOS ----- //

  // --- start styleselect ----- //
  $("select").styler();
  // --- end styleselect ----- //

  // ----------- start welcomescreen slider --------- //
  var swiper = new Swiper(".weprovideslider__inner", {

    navigation: {
      nextEl: ".weprovideslider-next",
      prevEl: ".weprovideslider-prev",
    },
    slidesPerView: 3,
    speed: 1200,
    breakpoints: {
      // when window width is >= 1600px
      1600: {
        spaceBetween: 40
      },
       // when window width is >= 1600px
       1400: {
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      }
    }
  });
  // ----------- end welcomescreen slider --------- //


  // --- start video player ----- //
  const player = new Plyr(".js-player");

  $(".antietchvideo__content-btn").on("click", function () {
    player.togglePlay();
    $(this).toggleClass('pause');

  });
  // --- end video player ----- //

});
