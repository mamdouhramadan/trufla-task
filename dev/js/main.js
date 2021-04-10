$(document).ready(function () {

  $(".nav-link .icon").click(function () {
    $(this).siblings('.text').toggleClass('d-none');
    console.log('Clicked');
  });

  $(".scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  }

});
