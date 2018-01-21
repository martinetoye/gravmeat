jQuery(document).ready(function($) {
  //Menu Open
  $(".hamburger").on("click", function(){
        $(".hamburger").toggleClass("change");
        $(".menu__wrapper").toggleClass("open");
      });

});
