
// Initialise Foundation
$(document).foundation();

// Adds active class to the menu item w/ corresponding href to the current url
// (https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/)
$('.sidebar-nav li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');

// Convert font-awesome sidebar icons to larger form w/ smaller devices
$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 640) {
            $(".sidebar-icon").addClass("fa-2x");
    } else {
      $(".sidebar-icon").removeClass("fa-2x");
    }
});

// Add funky Giflinks
window.onload = function() {
    var element = document.querySelector('.mexico');
    GifLinks(element);
};

// Append input field to form to when 'add player' button is pressed
var tennisPros = ['Rafael Nadal', 'Serena Williams', 'Andre Agassi', 'Novak Djokovic', 'Andy Murray', 'Maria Sharapova', 'Rod Laver', 'Lleyton Hewitt'];
$('#addPlayerBtn').click(function () {
  var tennisPro = tennisPros[Math.floor(Math.random()*tennisPros.length)];
  $('.newPlayerField').append('<div class="addedPlayerField"><input class="large-10 medium-9 small-10 columns" type="text" name="addPlayer" placeholder="' + tennisPro + '"><button type="button" tabindex="-1" name="removePlayerBtn" class="removePlayerBtn"><i class="fa fa-times rmvBtnI" aria-hidden="true"></i></button></div>');
});

// Remove the parent of the cross and its siblings (i.e. the added player field)
// (elements appended to the dom must be refenced via a element already in the dom)
$('.newPlayerField').on('click', '.removePlayerBtn', function() {
  $(this).parent().remove()
});


// On submit of the comp creation form
$('#createComp').click(function () {
  // add each of the players to 'playerNames'
  var playerNames = []
  $('input[name=addPlayer]').each(function(){
    if ($(this).val() !== "") playerNames.push($(this).val())
  })

  // collect data and prepare to send
  var jsonToSend = {
    "compName": $('input[name=name]').val(),
    "singlesDoubles": $('input[name=singlesDoubles]:checked').val(),
    "type": $('select[name=type]').val(),
    "players": playerNames
  }
  console.log(JSON.stringify(jsonToSend))

  // TODO: POST jsonToSend to server and redirect
})
