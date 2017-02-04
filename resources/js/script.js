$(document).ready(function () {
    
    /*  For Sticky Navigation  */
    $('.js-aboutus').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
    /*  Scroll on buttons  */
    $('.js-scroll-to-schools').click(function () {
        $('html, body').animate({scrollTop: $('.js-schools').offset().top}, 1000);
    });
    
    $('.js-scroll-to-aboutus').click(function () {
        $('html, body').animate({scrollTop: $('.js-aboutus').offset().top}, 1000);
    });
    
    /* Scroll to section on nav click */
    function scrolltoSection(a){
        var s = "#" + a;
        $('html, body').animate({scrollTop: $(s).offset().top -70}, 1000);
        if(mobilenav){
            nav.slideToggle(200);
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    }
    $('.main-nav li').click(function () {
        scrolltoSection($(this).text());
    });
    
    /* Animations */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /*  Mobile nav  */
    var mobilenav = false;
    var nav = $('.js-main-nav');
    var icon = $('.js-mobile-nav i');
    $('.js-mobile-nav').click(function() {
        nav.slideToggle(200);
        if ( icon.hasClass('fa-bars')) {
            mobilenav = true;
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else{
            mobilenav = false;
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    
    
});