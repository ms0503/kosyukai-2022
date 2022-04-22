($ => {
    function removeMenu($shade) {
        $shade.remove();
        $('.nav-container').slideUp('fast');
    }
    $('.navigation-button').on('click', e => {
        e.preventDefault();
        let $shade = $('.js-slidemenu-effect')[0];
        if($shade === undefined) {
            $('.container').addClass('js-slidemenu-effect').on('click', () => {
                removeMenu(this);
            }).appendTo($('body'));
            $('.nav-container').slideDown('fast');
        } else removeMenu($shade);
    });
})(jQuery);