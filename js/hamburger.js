$(document).ready(function() {

    $(".hamburger").on("click", function() {

        $(this).toggleClass("is-active");
        
        $(".nav__list").toggleClass("open");
    })

});

