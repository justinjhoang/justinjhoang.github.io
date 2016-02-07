$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#banner").offset().top
    }, 2000);
});

$("#about").click(function() {
    var offset = -40; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#wrapper").offset().top + offset
    }, 2000);
});

$("#contact").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#footer").offset().top + offset
    }, 2000);
});

$("#resume").click(function(e) {
  e.preventDefault();
});