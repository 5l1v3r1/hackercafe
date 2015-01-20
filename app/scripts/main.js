function resizePages() {
    var h = $(window).height();
    var height = h > 850 ? 850 : h;
    $('.fullscreen').css('height', height);
    /* $('firstSection').css('height',height*0.98);*/
}

$(window).resize(function (e) {
    resizePages();
});
resizePages();

$(document).ready(function () {


    $("#info h2").fitText(1.2, {
        minFontSize: '30px',
        maxFontSize: '46px'
    });

    $("#location h2").fitText(1.2, {
        minFontSize: '30px',
        maxFontSize: '60px'
    });


    $("#pricing h2").fitText(1.2, {
        minFontSize: '30px',
        maxFontSize: '50px'
    });
    $('.sub-headline').fitText(1.7, {
        minFontSize: '10px',
        maxFontSize: '40px'
    });


    $('#features h3').fitText(1.4, {
        minFontSize: '15px',
        maxFontSize: '45px'
    });

    $("#contact h3").fitText(1.2, {
        minFontSize: '35px',
        maxFontSize: '55px'
    });



    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, 'swing');
                return false;
            }
        }
    });
    /*   $('.btn-cta').click(function (e) {
      e.preventDefault();
        $(this).addClass('bounce');
    })*/


   /* if (documentWidth == (windowWidth + scrollOffset)) {
        $('#btnTop').fadeIn();
    }*/


});