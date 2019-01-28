$(document ).ready(function() {
    $('.partners .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<i class=\"icon-prev\"></i>","<i class=\"icon-next\"></i>"],
        items:5,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.comments-owl .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        margin:10,
        nav:true,
        navText: ["<i class=\"icon-prev\"></i>","<i class=\"icon-next\"></i>"],
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

    // open login modal
    window.onclick = function(event) {
        if(event.target.classList.contains('open-modal')) {
            $('.login-popup').addClass("visible");
            $('body').addClass('overlay');

        } else if(event.target.classList.contains('overlay')) {
            $('.login-popup').removeClass("visible");
            $('body').removeClass('overlay');
        }
    }

    $('.toggl').click(function () {
        $('ul').toggleClass('active');
        
    });



    });

