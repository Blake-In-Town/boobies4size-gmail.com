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
})