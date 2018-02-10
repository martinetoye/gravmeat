jQuery(document).ready(function($) {
  //Menu Open
  $(".hamburger").on("click", function(){
        $(".hamburger").toggleClass("change");
        $(".header__menu--mobile").toggleClass("open");
      });
      //Scroll Down Button
      $('#scrollDown').on('click',function(){
        //const height = window.innerHeight;
        //const vhPixels = height * 1.5
        //window.scrollBy(0, vhPixels);
        //$("html, body").animate({ scrollBottom: 0 }, 800);
      $('html, body').animate({ scrollTop:  $('#scrollDown').offset().top - -85 }, 1000);
     //return false;
 });

});


$(document).ready(function() {
    var autoplaySlider = $('#lightSlider').lightSlider({
        auto:true,
        loop:true,
        speed:2000,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
