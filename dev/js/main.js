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

$(window).on('load', function () {

  registerSW()

})

async function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {
      scope: '.' // <--- THIS BIT IS REQUIRED
    }).then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }

}
