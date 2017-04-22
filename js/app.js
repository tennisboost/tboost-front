$(document).foundation();

$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 640) {
            $(".sidebar-icon").addClass("fa-2x");
    } else {
      $(".sidebar-icon").removeClass("fa-2x");
    }
});

window.onload = function() {
    var element = document.querySelector('.mexico');
    GifLinks(element);
};
