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

var tennisPros = ['Rafael Nadal', 'Serena Williams', 'Andre Agassi', 'Novak Djokovic', 'Andy Murray', 'Maria Sharapova', 'Rod Laver', 'Lleyton Hewitt'];

$('#addPlayerBtn').click(function () {
  var tennisPro = tennisPros[Math.floor(Math.random()*tennisPros.length)];
  $('.newPlayerField').append('<input type="text" name="addPlayer" placeholder="' + tennisPro + '">');
});

function addPlayerField() {

}
