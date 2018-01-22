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
