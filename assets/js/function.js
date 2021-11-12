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
});
