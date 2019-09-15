$(document).ready(function() {

    $(".hamburger").on("click", function() {

        $(this).toggleClass("is-active");
        
        $(".nav__list").toggleClass("open");
    });

    $(".nav__item").on("click", function() {
        $(".nav__list").removeClass("open");
        $(".hamburger").removeClass("is-active");
        console.log("click");
    })

});



