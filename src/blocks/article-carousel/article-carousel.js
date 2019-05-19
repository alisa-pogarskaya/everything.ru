import 'slick-carousel';

const icon = `
    <svg width="36" height="36" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M3.81066017,12 L11.2803301,19.4696699 C11.5732233,19.7625631 11.5732233,20.2374369 11.2803301,20.5303301 C10.9874369,20.8232233 10.5125631,20.8232233 10.2196699,20.5303301 L2.21966991,12.5303301 C1.9267767,12.2374369 1.9267767,11.7625631 2.21966991,11.4696699 L10.2196699,3.46966991 C10.5125631,3.1767767 10.9874369,3.1767767 11.2803301,3.46966991 C11.5732233,3.76256313 11.5732233,4.23743687 11.2803301,4.53033009 L3.81066017,12 Z"></path>
    </svg>
`;

$('[data-js="article-carousel"]').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '[data-js="article-carousel-nav"]'
});

$('[data-js="article-carousel-nav"]').slick({
    prevArrow: `<button class="slide_prev" type="button">${icon}</button>`,
    nextArrow: `<button class="slide_next" type="button">${icon}</button>`,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    asNavFor: '[data-js="article-carousel"]',
    dots: false,
    draggable: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});