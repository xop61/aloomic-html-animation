$(function () {
    var ypos = window.pageYOffset || document.documentElement.scrollTop;
    var maxYvalue = $(document).height() - $(window).height();
    var percent = parseInt(ypos * 100 / maxYvalue);
    $('#scroll_value').text(percent + "%");

    window.onscroll = function (e) {
        $('.circle-mark path').css("opacity", 0);
        $('#scroll_value').css("opacity", 0);
        // called when the window is scrolled.  
        var ypos = window.pageYOffset || document.documentElement.scrollTop;
        var maxYvalue = $(document).height() - $(window).height();
        var percent = parseInt(ypos * 100 / maxYvalue);
        $('#scroll_value').text(percent + "%");

        var ypos = window.pageYOffset || document.documentElement.scrollTop;
        if (ypos < 2500) {
            $('.full-screen>div').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            $('.full-screen>div *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');

            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-b2w');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-w2b');

            if (ypos >= 1030 && ypos <= 1630) {
                $(".cards-box:first-child .video-card:first-child").css('transform', 'translate3d(' + (ypos - 1630) / 6 * 2 + '%, 0, 0) scale(' + (2230 - ypos) / 600 + ', ' + (2230 - ypos) / 600 + ')');
                $(".cards-box:first-child .video-card:first-child").css('opacity', (ypos - 1030) / 600);
                // 
                $(".cards-box:last-child .video-card:first-child").css('transform', 'translate3d(' + (1630 - ypos) / 4 + '%, ' + (ypos - 1630) / 12 + '%, 0) scale(' + (2830 - ypos) / 1200 + ', ' + (2830 - ypos) / 1200 + ')');
                $(".cards-box:last-child .video-card:first-child").css('opacity', (ypos - 1030) / 600);
                //
                $(".cards-box:first-child .video-card:last-child").css('transform', 'translate3d(' + (ypos - 1630) / 6 * 2 + '%, ' + (1630 - ypos) / 6 * 2 + '%, 0) scale(' + (2230 - ypos) / 600 + ', ' + (2230 - ypos) / 600 + ')');
                $(".cards-box:first-child .video-card:last-child").css('opacity', (ypos - 1030) / 600);
                // 
                $(".cards-box:last-child .video-card:last-child").css('transform', 'translate3d(' + (1630 - ypos) / 4 + '%, ' + (1630 - ypos) / 12 + '%, 0) scale(' + (2830 - ypos) / 1200 + ', ' + (2830 - ypos) / 1200 + ')');
                $(".cards-box:last-child .video-card:last-child").css('opacity', (ypos - 1030) / 600);

            } else if (ypos > 1630) {
                $(".cards-box:first-child .video-card:first-child").css('transform', 'translate3d(0, 0, 0) scale(1, 1)');
                $(".cards-box:first-child .video-card:first-child").css('opacity', '1');
                //
                $(".cards-box:last-child .video-card:first-child").css('transform', 'translate3d(0, 0, 0) scale(1, 1)');
                $(".cards-box:last-child .video-card:first-child").css('opacity', '1');
                //
                $(".cards-box:first-child .video-card:last-child").css('transform', 'translate3d(0, 0, 0) scale(1, 1)');
                $(".cards-box:first-child .video-card:last-child").css('opacity', '1');
                //
                $(".cards-box:last-child .video-card:last-child").css('transform', 'translate3d(0, 0, 0) scale(1, 1)');
                $(".cards-box:last-child .video-card:last-child").css('opacity', '1');
            }
            // 
            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');
        } else if (ypos < 3400 && ypos > 2500) {
            // $('.full-screen>div').removeClass('background-w2b').addClass('background-b2w');
            // $('.full-screen>div *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-w2b');

            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-b2w');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-w2b');

        } else {
            // $('.full-screen>div').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            // $('.full-screen>div *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');

            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');
        }
    }
});

$(window).scroll(function () {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
        // do something
        $('.circle-mark path').animate({ opacity: '1' });
        $('#scroll_value').animate({ opacity: "1" });
    }, 250));
});