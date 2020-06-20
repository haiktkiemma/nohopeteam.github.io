document.addEventListener("DOMContentLoaded", function () {
    $(function () {
        $('img.img-child').hover(function () {
            let img = $(this).attr('src');
            $('img#img-main').attr('src', img);
        })
    })
    // $(function () {
    //     $('.header__navbar-item--register').click(function () {
    //         $('.header__navbar-register').addClass('header__navbar-register--open');
    //         $('.header__overlay').addClass('header__overlay-open');
    //     })
    //     $('.register__close').click(function () {
    //         $('.header__navbar-register').removeClass('header__navbar-register--open');
    //         $('.header__overlay').removeClass('header__overlay-open');
    //     })
    //     $('.header__navbar-item--logIn').click(function () {
    //         $('.header__navbar-logIn').addClass('header__navbar-logIn--open');
    //         $('.header__overlay').addClass('header__overlay-open');
    //     })
    //     $('.logIn__close').click(function () {
    //         $('.header__navbar-logIn').removeClass('header__navbar-logIn--open');
    //         $('.header__overlay').removeClass('header__overlay-open');
    //     })
    // })

}, false)
$(function (){
    // navbar hiện khi scroll xuống
    $(window).scroll(function () {
        if($(this).scrollTop()>250){
            $('.header__navbar-2').addClass('header__navbar-2-add');
            $('.scrolltotop').addClass('scrolltotop__show');

        }
        else{
            $('.header__navbar-2').removeClass('header__navbar-2-add');
            $('.scrolltotop').removeClass('scrolltotop__show');

         }
    });
    // scroll to top
    $('.scrolltotop').click(function () { 
        $('html,body').animate({scrollTop:0}, 500);
    });

});

