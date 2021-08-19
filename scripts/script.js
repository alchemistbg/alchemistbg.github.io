$(document).ready(function () {
    console.log("Web site loaded!");
    $(window).on('load', function () {
        // console.log($('#preloader').length);
        if (window.location.pathname === '/') {
            if ($('#preloader').length > 0) {
                $('#preloader').delay(250).fadeOut('slow', function () {
                    $(this).remove();
                });
            }
        } else {
            $('#preloader').hide();
        }
    });

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-btn-up').addClass('show');
        } else {
            $('.scroll-btn-up').removeClass('show');
        }
    });

    $('.hamburger, .hamburger-item').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.hamburger').toggleClass('active');
        $('.hamburger-item').toggleClass('active');
    });

    if ($('.typing-1-items').length) {
        const typing1items = $(".typing-1-items").text();
        // console.log(typing1items);
        const typed1 = new Typed(".typing-1", {
            strings: typing1items.split(', '),
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if ($('.typing-2-items').length) {
        const typing2items = $('.typing-2-items').text();
        // console.log(typing2items);
        const typed2 = new Typed('.typing-2', {
            strings: typing2items.split(', '),
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
});