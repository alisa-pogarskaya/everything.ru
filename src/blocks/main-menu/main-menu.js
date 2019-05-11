const $document = $(document);
const $button = $('button[data-toggle="navigation-menu"]');
const $body = $('body');
const $menu = $(`#${$button.attr('data-toggle')}`);

$document.on('click', event => {
    const $target = $(event.target);

    if ($target.closest('#' + $button.attr('data-toggle'))[0] !== $menu[0] && $target.closest('button[data-toggle="navigation-menu"]')[0] !== $button[0]) {
        $button.removeClass('is-active');
        $menu.removeClass('is-active');
        $body.removeClass('menu-open');
    } else {
        if ($target.closest('#navigation-menu a').length && !$target.closest('#navigation-menu a').hasClass('down') || $target.closest('#navigation-menu button').length) {
            $button.removeClass('is-active');
            $menu.removeClass('is-active');
            $body.removeClass('menu-open');
        }
    }

    if ($target.closest('button[data-toggle="navigation-menu"]')[0] === $button[1]) {
        event.preventDefault();
        toogleMenu();
    }

    if (window.matchMedia && window.matchMedia('(max-width: 1279px)').matches) {
        var $targetLi = $target.closest('li');
        var $down = $('.down').closest('li');

        if ($down.toArray().some(el => el === $targetLi[0])) {
            event.preventDefault();
            if (!$targetLi.hasClass('is-active')) {
                $targetLi.addClass('is-active');
            } else {
                const $childDown = $targetLi.find('.down').slice(1).closest('li');

                $targetLi.removeClass('is-active');
                if ($childDown.length) $childDown.removeClass('is-active');
            }
        }
    }
});

function toogleMenu() {
    var open = $button.hasClass('is-active');

    if (!open) {
        $button.addClass('is-active');
        $menu.addClass('is-active');
        $body.addClass('menu-open');
    } else {
        $button.removeClass('is-active');
        $menu.removeClass('is-active');
        $body.removeClass('menu-open');
    }
}
