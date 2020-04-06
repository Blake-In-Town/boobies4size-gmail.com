$(function(){
    $('.call-button, .main-button, .header__mobile-call')
        .click(function(){
            var feedbackBlock = $('.popup-background')
            $('html, body').animate({scrollTop: 0},500);
            feedbackBlock
                .fadeIn(400)
                .css('position','fixed')
                .css('-ms-overflow-y','hidden');
            return false;
        });

    $('.popup-background')
        .click(function(event){
            if(event.target == this) {
                $(this).fadeOut(400);
                $('body').css('position','static');
                $('body').css('-ms-overflow-y','visible');
            }
        });

// mobile menu buttons    
        
    var menuStatus

	$('.header__mobile-menu').click(function(){
        if ($(window).width() >= 500) {
            $('.header__mobile').animate({
                opacity: '0',
                zIndex: '-1'
            });

            $('.mobile__slider-menu').slideToggle();
            menuStatus = 1;
        }

        else {
            $('.mobile__slider-menu').fadeIn();
            $('.main').animate({
                marginTop: "18%"
            });
            menuStatus = 1;
        } 
    });

    $('.close-slider').click(function(){
        $('.mobile__slider-menu').fadeOut();
        $('.header__mobile').fadeIn( 200, function () {
            $('.main').animate({
                marginTop: "0%"
            });    
        });
        menuStatus = 0;
    }); 

    $('main').click(function(){
            if(menuStatus != 0) {
                $('.mobile__slider-menu').slideUp();
                $('.header__mobile').animate({
                    opacity: '1',
                    zIndex: '2'
                });
            }
    });
});