jQuery(document).ready(function($) {
  //Menu Open
  $(".hamburger").on("click", function(){
        $(".hamburger").toggleClass("change");
        $(".menu__wrapper").toggleClass("open");
      });
      //Scroll Down Button
      $('#scrollDown').on('click',function(){
        //const height = window.innerHeight;
        //const vhPixels = height * 1.5
        //window.scrollBy(0, vhPixels);
        //$("html, body").animate({ scrollBottom: 0 }, 800);
      $('html, body').animate({ scrollTop:  $('#scrollDown').offset().top - 0 }, 1000);
     //return false;
 });

});

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 2000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
