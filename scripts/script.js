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

});