$(window).scroll(function(event) {

    var st = $(this).scrollTop()

    $('.header_text').css({
        "transform": "translate(0% , " + st + "%"
    });

});

$(window).scroll(function(event) {

    var st = $(this).scrollTop()

    $('.second_header_text').css({
        "transform": "translate(0% , -" + st + "%"
    });

});

$(window).scroll(function(event) {

    var st = $(this).scrollTop()

    $('.third_header_text').css({
        "transform": "translate(0% , -" + st + "%"
    });

});
