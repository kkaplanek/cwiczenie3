$(document).ready(function () {

    $('.accordion-box').click(function() {

        if($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $(this).find('.accordion-text').slideUp(1000);
        } else {
            $(this).addClass('opened');
            $(this).find('.accordion-text').slideDown(1000);
        }
    })
})