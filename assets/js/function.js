$(function () {
    $(".nav-item").hover(function () {
        $(".menu-thumb").addClass("hidden")
        $(this).find(".menu-thumb").removeClass("hidden")
        $(this).find("p").removeClass("hidden")
    })

    // Control nave menu
    $(".menu-button").click(function () {
        $(".nav-menu").toggleClass("menu-open");
    })
});
