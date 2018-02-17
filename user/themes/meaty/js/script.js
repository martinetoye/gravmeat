jQuery(document).ready(function($) {
  //Menu Open
$(".hamburger").on("click", function(){
        $(".hamburger").toggleClass("change");
        $(".header__menu--mobile").toggleClass("open");
      });
//links for Header Menu
$('a.mnav').on('click', function(event){
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
  // Quick & dirty toggle to demonstrate modal toggle behavior
$('.modal__toggle').click(function(e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
  return false;
});

});
$(document).ready(function() {
    var autoplaySlider = $('#lightSlider').lightSlider({
        auto:true,
        loop:true,
        speed:2000,
        pauseOnHover: true,
        responsive : [
         {
             breakpoint:800,
             settings: {
                 item:1,
                 slideMove:1,
                 slideMargin:1,
               }
         },
         {
             breakpoint:480,
             settings: {
                 item:1,
                 slideMove:1,
               }
         }
     ],
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
