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
    speed: 1000,
  });

  // ----------- end welcomescreen slider --------- //

  // ----------- start reviews slider --------- //

  // var swiper = new Swiper(".reviews__slider-wrapper", {
  //   navigation: {
  //     nextEl: ".review-next",
  //     prevEl: ".review-prev",
  //   },
  //   speed:800,
  // });

  // ----------- end reviews slider --------- //

  // --- burger btn --- //

  $(".burgerbtn").on("click", function () {
    $(this).toggleClass("active");
    $('.mobile__menu').toggleClass("active");
  });
});
