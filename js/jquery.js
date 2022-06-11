$(function() {
  var $main = $("main");
  window.mySparticles = new Sparticles($main.get(0),
  { 
    randomColorCount:6,
    color:['#0072B8','red', 'blue','#29AAE0' ,'#7952B3' ,'orange'],
    speed:8,
    minSize:0,
    minSize:0,
    parallax:0,
    count: 100,
    rotate:false,
    direction:0
  });
});

// https://github.com/simeydotme/sparticles#glow

let offset = $('#about').offset();

let x=document.querySelectorAll('.nav-item .nav-link')
let y=document.querySelector('.shazly')
let z=document.querySelectorAll('.nav-link')
console.log(z)
$(window).scroll(function () { 
    let wScroll= $(window).scrollTop();
    if (wScroll>offset.top-630) {
      $('nav').css("background-color", 'white');
      $(y).css("color", 'black');
      $('.navbar').addClass('sticky-top ');

       $(z).attr('style', 'color: #4E54C8 !important'); 
    }
    else{
        $('nav').css("background-color", 'transparent');
        $(z).attr('style', 'color: white !important'); 
        $('#active').attr('style', 'color: black !important'); 
        $('.navbar').removeClass('sticky-top ');

        $(y).css("color", 'white');
    }
    // if (wScroll>offset.top-300) {
    //     $('.up').css('visibility', 'visible'); 
    // }
    // else{
    //     $('.up').css('visibility', 'hidden');
    // }
});
