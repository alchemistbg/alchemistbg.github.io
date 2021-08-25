$(document).ready(function () {
    // Another possible option:
    // document.addEventListener("DOMContentLoaded", function () {
    // });
    $(document).ready(function () {
        if (window.location.pathname === '/' && window.location.hash === "") {
            $('.navbar').removeClass('sticky');

            if ($('#preloader').length > 0) {
                $('#preloader').delay(200).fadeOut('slow', function () {
                    $(this).remove();
                });
            }
        } else {
            $('.navbar').addClass('sticky');

            $('#preloader').hide();
        }
    });

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else if (this.scrollY <= 20 && (window.location.pathname !== '/skills/' && window.location.pathname !== '/projects/')) {
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
        const typed1 = new Typed(".typing-1", {
            strings: typing1items.split(', '),
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if ($('.typing-2-items').length) {
        const typing2items = $('.typing-2-items').text();
        const typed2 = new Typed('.typing-2', {
            strings: typing2items.split(', '),
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // owl script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                nav: false
            }
        }
    });
});