function resizePages() {
	var h = $(window).height();
	var height  =  h > 750 ? 750 : h;
	$('section').css('height',height);
   /* $('firstSection').css('height',height*0.98);*/
}

$(window).resize(function(e) {
    resizePages();
});
resizePages();



$("#home h1").fitText(1.2, { minFontSize: '40px', maxFontSize: '90px' });


$("h2").fitText(1.2, { minFontSize: '30px', maxFontSize: '60px' });

$('.sub-headline').fitText(1.7, { minFontSize: '10px', maxFontSize: '40px' });

$("h3").fitText(1.2, { minFontSize: '50px', maxFontSize: '90px' });




    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });