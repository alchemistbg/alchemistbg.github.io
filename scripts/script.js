$(document).ready(function () {
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
});