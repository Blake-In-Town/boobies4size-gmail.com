$(document).ready(function(){

    $('.owl-carousel').owlCarousel({

        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0 :{
                items: 1,
                dots: true,
                margin: 20
            },
            551 :{
                items: 2,
                dots: true
            },
            1000 :{
                items: 3
            }
        }

    })


    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.slider_right').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.slider_left').click(function() {
        owl.trigger('prev.owl.carousel');
    })
});