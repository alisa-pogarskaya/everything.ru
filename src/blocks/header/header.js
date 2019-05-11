const $document = $(document);
const $searchBlock = $('.header_search-form');

$document.on('click', '[data-header="search"]', function () {
    $searchBlock.slideToggle();
    return false;
});
