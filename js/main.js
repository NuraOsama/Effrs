(function ($) {

    "use strict";
    new WOW().init();

      //preloader
      var  mainStatus  = $('#status'),
      mainBody = $('body'),
      mainPreloader  = $('#preloader');
 
      window.onload = function() {
       mainStatus.fadeOut();
       mainPreloader.delay(500).fadeOut('slow');
       mainBody.delay(500).css({
           'overflow': 'visible'
       });
      }


     //sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('.navbar-light').addClass('sticky-top').animate({

            }, 4000);

        } else {
            $('.navbar-light').removeClass('sticky-top').animate({

            }, 4000);

        }
    });

    //search 
    $(".search-icon").click(function(){

      $(".search-form").toggleClass('show');
    });
    $(".close-it").click(function(){

        $(".search-form").removeClass('show');
      });

//slider
 var owl = $('.owl');
   owl.owlCarousel({
       items: 1,
       nav: true,
       loop: true,
       dots:false,
       autoplay: true,
       smartSpeed:1500
   
   });

   $( ".owl-prev").html('<span class="fas fa-angle-left"></span>');
   $( ".owl-next").html('<span class="fas fa-angle-right"></span>');

   function setAnimation(_elem, _InOut) {
      
       var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

       _elem.each(function() {
           var $elem = $(this);
           var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

           $elem.addClass($animationType).one(animationEndEvent, function() {
               $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
           });
       });
   }

   owl.on('change.owl.carousel', function(event) {
       var $currentItem = $('.owl-item', owl).eq(event.item.index);
       var $elemsToanim = $currentItem.find("[data-animation-out]");
       setAnimation($elemsToanim, 'out');
   });

   var round = 0;
   owl.on('changed.owl.carousel', function(event) {

       var $currentItem = $('.owl-item', owl).eq(event.item.index);
       var $elemsToanim = $currentItem.find("[data-animation-in]");

       setAnimation($elemsToanim, 'in');
   });
   
   //testimonilas
$(document).ready(function(){   
    $('.testimonials-owl').owlCarousel({
    items:3,
    nav: false,
    loop: true,
    dots:true,
    autoplay: true,
    margin:15,
    smartSpeed:500,
    margin:30,
    animateIn: 'zoomIn',
    animateOut: 'zoomOut',
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true,
            loop:false
        },
       
          
          768 : {
  
            items:3,
           
          },
  
          575 : {
  
            items:2,
           
          },
         
          418: {
  
            items:1,
           
           
              
      },
     375: {
  
        items:1,
       
       
          
  },
  320: {
     
    items:1,
   
   
      
  }
     
        
        
    }
   
    });
});


//footer silder

$(document).ready(function(){   
    $('.footer-owl').owlCarousel({
        items:5,
        nav: false,
        loop: true,
        dots:false,
        autoplay: true,
        margin:55,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:5,
                nav:true,
                loop:false
            },
           
              
              768 : {
      
                items:3,
               
              },
      
              575 : {
      
                items:2,
               
              },
             
              418: {
      
                items:1,
               
               
                  
          },
         375: {
      
            items:1,
           
           
              
      },
      320: {
         
        items:1,
       
       
          
      }
         
            
            
        }
       
    });
});


//about testimonials

$(document).ready(function(){
$('.about-testimonials-owl').owlCarousel({
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay:true,
});
});


//scroll to top
$(window).scroll(function(){
    if($(this).scrollTop() > 300) {
       $(".auto-scroll-to-top").addClass("visible");                    
     } else {
         $(".auto-scroll-to-top").removeClass("visible");
     }        
    });
     
   $(".auto-scroll-to-top").click(function(){
     $("html, body").animate({scrollTop: 0}, 1000);
   });
 
   // responsive middle header

   $(".middle-toggle").click(function(){
    $(".responsive-midle-header").addClass('show');
    
    });
    $(".close-middle").click(function(){
      $(".responsive-midle-header").removeClass('show');
      
      });

    // responsive main header
      $(".bottom-toggle").click(function(){
        $(".aside-header").addClass('show');
        
        });
      $(".close-aside").click(function(){
        $(".aside-header").removeClass('show');
        
        });

})(jQuery);