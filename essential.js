($ => {
    function removeMenu(shade) {
        shade.remove();
        $('.nav-container').slideUp('fast');
    }
    $.ajax({
        dataType: 'html',
        url: 'https://ms0503.github.io/kosyukai2021/navigation.html'
    }).done(data => $('.nav-container').html(data));
    $.ajax({
        dataType: 'html',
        url: 'https://ms0503.github.io/kosyukai2021/footer.html'
    }).done(data => $('.footer-contents').html(data));
    $('.navigation-button').on('click', e => {
        e.preventDefault();
        let shade = $('.navigation-effect')[0];
        if(shade === undefined) {
            $('<div>').addClass('navigation-effect').on('click', () => {
                removeMenu(this);
            }).appendTo($('body'));
            $('.navigation').slideDown('fast');
        } else removeMenu(shade);
    });
})(jQuery);
