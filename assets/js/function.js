$(function () {
    $(".nav-item").hover(function () {
        if ($(document).width() <= 660) {
            $(".menu-thumb").addClass("hidden")
        } else {

            $(".menu-thumb").addClass("hidden")
            $(this).find(".menu-thumb").removeClass("hidden")
            $(this).find("p").removeClass("hidden")
        }
    })

    // Control nave menu
    $(".menu-button").click(function () {
        $(".nav-menu").toggleClass("menu-open")
    })
    $(".client-explain").click(function () {
        $(".client-explain:last-child").removeClass("hidden")
        $(this).addClass("hidden")
        $(".our-clients-pre").css("margin-bottom", 0)
        $("#clients-explain").css("height", "auto")
    })
    $(".client-explain:last-child").click(function () {
        $(".client-explain").removeClass("hidden")
        $(this).addClass("hidden")
        $(".our-clients-pre").css("margin-bottom", 100)
        $("#clients-explain").css("height", 0)
    })

    // console slide
    cardSlideCount = 0;
    deviceWidth = $("#device-ruler").width();
    if (deviceWidth > 460) cardsCunt = parseInt($('.slide-item').length / 2);
    else cardsCunt = $('.slide-item').length;

    $("#right-arrow").click(function () {
        if (cardSlideCount > 0 - cardsCunt) {
            cardSlideCount--
            $(".slide-cards").css({ "transform": "translateX(" + deviceWidth * cardSlideCount + "px)" })
            $("#left-arrow").css("opacity", 1)
        } else {
            $("#right-arrow").css("opacity", 0.4)
            $("#left-arrow").css("opacity", 1)
        }
    })
    $("#left-arrow").click(function () {
        if (cardSlideCount < 0) {
            cardSlideCount++
            $(".slide-cards").css({ "transform": "translateX(" + deviceWidth * cardSlideCount + "px)" })
            $("#right-arrow").css("opacity", 1)
        } else {
            $("#right-arrow").css("opacity", 1)
            $("#left-arrow").css("opacity", 0.4)
        }
    })



    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 3000);
    });

    var slideCount = $('#slider-reviews ul li').length;
    var slideWidth = $('#slider-reviews ul li').width();
    var slideHeight = $('#slider-reviews ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider-reviews').css({ width: '100%', height: slideHeight });

    // $('#slider-reviews ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $('#slider-reviews ul li:last-child').prependTo('#slider-reviews ul');

    function moveLeft() {
        $('#slider-reviews ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider-reviews ul li:last-child').prependTo('#slider-reviews ul');
            $('#slider-reviews ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-reviews ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider-reviews ul li:first-child').appendTo('#slider-reviews ul');
            $('#slider-reviews ul').css('left', '');
        });
    };

    $('button.control_prev').click(function () {
        moveLeft();
    });

    $('button.control_next').click(function () {
        moveRight();
    });
    //////////////
    var sliding = startClientX = startPixelOffset = pixelOffset = currentSlide = 0;
    slideCount = $('.slide').length;

    $('#slides1').on('mousedown touchstart', slideStart);
    $('#slides1').on('mouseup touchend', slideEnd);
    $('#slides1').on('mousemove touchmove', slide);

    /**
    / Triggers when slide event started
    */
    function slideStart(event) {
        // If it is mobile device redefine event to first touch point
        if (event.originalEvent.touches)
            event = event.originalEvent.touches[0];
        // If sliding not started yet store current touch position to calculate distance in future.
        if (sliding == 0) {
            sliding = 1; // Status 1 = slide started.
            startClientX = event.clientX;
        }
    }

    /** Occurs when image is being slid.
    */
    function slide(event) {
        event.preventDefault();
        if (event.originalEvent.touches)
            event = event.originalEvent.touches[0];
        // Distance of slide.
        var deltaSlide = event.clientX - startClientX;
        // If sliding started first time and there was a distance.
        if (sliding == 1 && deltaSlide != 0) {
            sliding = 2; // Set status to 'actually moving'
            startPixelOffset = pixelOffset; // Store current offset
        }

        //  When user move image
        if (sliding == 2) {
            // Means that user slide 1 pixel for every 1 pixel of mouse movement.
            var touchPixelRatio = 1;
            // Check for user doesn't slide out of boundaries
            if ((currentSlide == 0 && event.clientX > startClientX) ||
                (currentSlide == slideCount - 1 && event.clientX < startClientX))
                // Set ratio to 3 means image will be moving by 3 pixels each time user moves it's pointer by 1 pixel. (Rubber-band effect)
                touchPixelRatio = 3;
            // Calculate move distance.
            pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
            // Apply moving and remove animation class
            $('#slides1').css('transform', 'translateX(' + pixelOffset + 'px').removeClass();
        }
    }

    /** When user release pointer finish slide moving.
    */
    function slideEnd(event) {
        if (sliding == 2) {
            // Reset sliding.
            sliding = 0;
            // Calculate which slide need to be in view.
            currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;
            // Make sure that unexisting slides weren't selected.
            currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);

            // Since in this example slide is full viewport width offset can be calculated according to it.
            pixelOffset = currentSlide * -430;

            // Remove style from DOM (look below)
            $('#temp').remove();
            // Add a translate rule dynamically and asign id to it
            $('<style id="temp">#slides1.animate{transform:translateX(' + pixelOffset + 'px)}</style>').appendTo('head');
            // Add animate class to slider and reset transform prop of this class.
            $('#slides1').addClass('animate').css('transform', '');
        }
    }

    $('#we-do-menu').on('click', function () {
        $('#main-menu').addClass('hidden');
        $('#we-do-submenu').addClass('hidden').removeClass('hidden');
    });
    $('#back-to-mainmenu').on('click', function () {
        $('#main-menu').addClass('hidden').removeClass('hidden');
        $('#we-do-submenu').addClass('hidden');
    });
});


