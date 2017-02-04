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
    
    
    /*  Smooth scrolling  */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
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
    });

    
    /* Animations */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /*  Mobile nav  */
    $('.js-mobile-nav').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav i');
        nav.slideToggle(200);
        if ( icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    
    
});