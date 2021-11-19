function toggleNav() {
    var x = document.getElementById('responsive-nav');

    if(x.className === 'responsive-nav')
    {
        x.className += ' responsive';
    }
    else
    {
        x.className = 'responsive-nav';
    }
}

/* NAVBAR SCROLL EFFECT */
const body = document.body;
let lastScroll = 0;

//SCROLL NAVBAR
window.addEventListener('resize', () => {
    document.getElementById('responsive-nav').className = 'responsive-nav';
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    document.getElementById('responsive-nav').className = 'responsive-nav';

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})



/* TIL AOS - SCROLL ANIMATIONS */

AOS.init({
    duration: 1000,
    once: true,
  })


//ACCORDION FAQ TIL NATURVINSKASSEN

jQuery('document').ready(function($){
    $('.dropdown__top').click(function(){
        if ($(this).parent(".dropdown").hasClass("open")) {
          $(this).parent(".dropdown").removeClass("open");
          $(this).siblings(".dropdown__btm").slideUp(500);
        } else {
          $(".dropdown").removeClass("open");
          $(".dropdown .dropdown__btm").slideUp(500);
          $(this).parent(".dropdown").addClass("open");
          $(this).siblings(".dropdown__btm").slideDown(500);
        }
      })
    });
