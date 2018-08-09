(function(){

    function createButton() {
        var button = document.createElement("button");
        button.classList.add("back", "hidden");
        document.body.appendChild(button);

        return button;
    }

    function animateButton() {
        if(document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -25);
            setTimeout(animateButton, 1);
        }
    }

    var button = createButton();
    
    button.addEventListener("click",function(e){
        e.stopPropagation();
        animateButton();
    }, false);

    document.addEventListener("scroll", function() {
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 1220) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    }, false)

})();