$(function () {
    $(".nav-item").hover(function () {
        $(".menu-thumb").addClass("hidden")
        $(this).find(".menu-thumb").removeClass("hidden")
        $(this).find("p").removeClass("hidden")
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
    deviceWidth = $("#device-ruler").width()
    cardsCunt = $('.slide-item').length % 2
    $("#right-arrow").click(function () {
        cardSlideCount--
        $(".slide-cards").css({ "transform": "translateX(" + deviceWidth * cardSlideCount + "px)" })
    })
    $("#left-arrow").click(function () {
        cardSlideCount++
        $(".slide-cards").css({ "transform": "translateX(" + deviceWidth * cardSlideCount + "px)" })
    })
});
