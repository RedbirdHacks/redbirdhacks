$(document).ready(function() {

    if ($(document).scrollTop() == 0) {

        $("#scrollHint").fadeIn();

    }
    $(window).scroll(function() {

        if ($(document).scrollTop() < 1) {
            $("#scrollHint img").fadeIn();
        } else {
            $("#scrollHint img").fadeOut();
        }


        // TODO maybe not in this file!
        if ($(document).scrollTop() > $('#hero').height()) {
            $('#main-nav').addClass('affix');
            $('#faq').css('margin-top', $('#main-nav').height());
        }
        else {
            $('#main-nav').removeClass('affix');
            $('#faq').css('margin-top', '0');
        }

    });
    $('#scrollHint img').hover(function() {
        $(this).fadeTo(500, .8);
    }, function() {
        $(this).fadeTo(500, .5);
    });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }

        });

    });

});
