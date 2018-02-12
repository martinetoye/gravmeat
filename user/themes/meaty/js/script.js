jQuery(document).ready(function($) {
  //Menu Open
  $(".hamburger").on("click", function(){
        $(".hamburger").toggleClass("change");
        $(".header__menu--mobile").toggleClass("open");
      });
//links for Header Menu
$('a.testclass').on('click', function(event){
  $(".hamburger").toggleClass("change");
  $(".header__menu--mobile").toggleClass("open");
  var href = $(this).attr('href');
  var scrollto = $(href).offset().top;
  var speed = 1000;
  var delay = 200
  $('html,body').delay(delay).animate({scrollTop: scrollto},speed);
  return false
  event.preventDefault();
});



});//End




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
