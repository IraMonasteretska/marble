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



  // --- start burger menu --- //
  $(".burgerbtn").on("click", function () {
    $(this).toggleClass("active");
    $('.mobile__menu').toggleClass("active");
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
  easing: 'ease',
  disable: 'mobile'
 });
// --- end AOS ----- //


});
