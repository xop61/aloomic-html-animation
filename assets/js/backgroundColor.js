$(function () {

    window.onscroll = function (e) {
        var ypos = window.pageYOffset || document.documentElement.scrollTop;
        if (ypos < 2800) {
            $('.full-screen>div').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            $('.full-screen>div *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');

            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-b2w');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-w2b');
        } else if (ypos < 3400 && ypos > 2800) {
            $('.full-screen>div').removeClass('background-w2b').addClass('background-b2w');
            $('.full-screen>div *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-w2b');

            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');

            // $('.showreel-section').animate({ backgroundColor: 'black' }, 300, function () {
            //     console.log('ypos');
            // });
            // var timer = setInterval(function () {
            //     currentcolor[0] = parseInt(currentcolor[0] - 10);
            //     currentcolor[1] = parseInt(currentcolor[1] - 10);
            //     currentcolor[2] = parseInt(currentcolor[2] - 10);
            //     $('.showreel-section').style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
            //     stepcount += 1;
            //     if (stepcount >= steps) {
            //         element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
            //         clearInterval(timer);
            //     }
            // }, 50);
        } else {
            $('.full-screen>div').removeClass('background-w2b').removeClass('background-b2w').addClass('background-w2b');
            $('.full-screen>div *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-b2w');

            $('.client-section').removeClass('background-w2b').removeClass('background-b2w').addClass('background-b2w');
            $('.client-section *').removeClass('color-b2w').removeClass('color-w2b').addClass('color-w2b');
        }
    }
});