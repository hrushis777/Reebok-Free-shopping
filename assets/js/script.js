/* Author: Hrushi Sawant


*/
// Responsive Hamburger Menu starts here
const hamburger = document.getElementById('hamburger');
console.log(hamburger);
const ul = document.querySelector('ul.nav');
console.log(ul);

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('show-x');
    ul.classList.toggle('show');
})
// Responsive Hamburger Menu ends here

// Slider Functionality Starts here
$(document).on('ready', function() {
    $(".banner-slickslider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });
// Slider Functionality ends here

// scroll to top functionality Starts here
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrolltoTop').fadeIn();
      }else {
        $('.scrolltoTop').fadeOut();
      }
    });
    $('.scrolltoTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  });
  // scroll to top functionality ends here


















