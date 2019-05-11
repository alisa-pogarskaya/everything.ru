import 'slick-carousel';

$('[data-js="cart-carousel"]').slick({
    prevArrow: '<button class="slide_prev" type="button"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide_next" type="button"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: false,
    draggable: false,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1220,
            settings: {
                draggable: true,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                draggable: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});