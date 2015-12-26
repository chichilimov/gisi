$( document ).ready(function() {
    //alert("JS INITIALISED!");

    // enlarge search bar in menu
    $(".site-controls .search .icon").click(function(){
        $(this).siblings("input").toggleClass("active").focus();
        $(".dropdown").removeClass("deployed");
    });

    // deploy dropdowns in menu
    $(".has-dropdown .icon, .has-dropdown .username").click(function(){
        $(this).siblings(".dropdown").toggleClass("deployed");
        $(this).parent().siblings(".has-dropdown").children(".dropdown").removeClass("deployed");
    });

    //department list toggle
    $(".sub-list-category, .with-list .icon").click(function(){
        $(this).parent().toggleClass("sub-list-deployed");
    });

    //feature slider
    var allSlides = $(".feature");
    var currentHeadSlide = 0;
    var totalSlides = allSlides.length - 4;
    var firstSlide = $(".feature").first();
    var lastSlide = $(".feature").last();
    var featureStep;

    //firstSlide.before(allSlides);
    //$(".feature-list").css("transform","translate(" + allSlides.length*280 + "px,0)");

    $(".feature-slider .controls.to-left").click(function(){
        $(".feature:not(:first-child).active").removeClass("active").prev().addClass("active");
    });
    $(".feature-slider .controls.to-right").click(function(){
        $(".feature:not(:last-child).active").removeClass("active").next().addClass("active");
    });

    //tabs operation
    $(".tabs .tab").click(function(){
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });

    //acc version
    var body = $("body");
    // $(".acc-version-switch").click(function(){
    //     body.addClass("in-acc-mode medium color-normal");
    // });
    //
    // $(".normal-version").click(function(){
    //     body.removeClass("in-acc-mode medium color-normal");
    //     return false
    // });

    //font size change
    $("header .size-small").click(function(){
        body.removeClass("small medium big");
        body.addClass("small");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('accVersionTypePreset', "small");
    });

    $("header .size-medium").click(function(){
        body.removeClass("small medium big");
        body.addClass("medium");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('accVersionTypePreset', "medium");
    });

    $("header .size-big").click(function(){
        body.removeClass("small medium big");
        body.addClass("big");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('accVersionTypePreset', "big");
    });

    //color scheme change
    $("header .color-normal").click(function(){
        body.removeClass("color-normal color-inverted color-contrast");
        body.addClass("color-normal");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('accVersionColorPreset', "color-normal");
    });

    $("header .color-inverted").click(function(){
        body.removeClass("color-normal color-inverted color-contrast");
        body.addClass("color-inverted");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('accVersionColorPreset', "color-inverted");
    });

    $("header .color-contrast").click(function(){
        body.removeClass("color-normal color-inverted color-contrast");
        body.addClass("color-contrast");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        localStorage.setItem('accVersionColorPreset', "color-contrast");
    });
    //remember user acc prefs
    if (body.hasClass("in-acc-mode")) {

        if ( localStorage.getItem('accVersionFirstLoad') == 'true'  ) {

            if (localStorage.getItem('accVersionTypePreset') == 'medium') {
                body.removeClass("small medium big");
                body.addClass("medium");
                $("header .size").removeClass("active");
                $("header .size-medium").addClass("active");
            } else if (localStorage.getItem('accVersionTypePreset') == 'small') {
                body.removeClass("small medium big");
                body.addClass("small");
                $("header .size").removeClass("active");
                $("header .size-small").addClass("active");
            } else if (localStorage.getItem('accVersionTypePreset') == 'big') {
                body.removeClass("small medium big");
                body.addClass("big");
                $("header .size").removeClass("active");
                $("header .size-big").addClass("active");
            }

            if (localStorage.getItem('accVersionColorPreset') == 'color-normal') {
                body.removeClass("color-normal color-inverted color-contrast");
                body.addClass("color-normal");
            } else if (localStorage.getItem('accVersionColorPreset') == 'color-contrast') {
                body.removeClass("color-normal color-inverted color-contrast");
                body.addClass("color-contrast");
            } else if (localStorage.getItem('accVersionColorPreset') == 'color-inverted') {
                body.removeClass("color-normal color-inverted color-contrast");
                body.addClass("color-inverted");
            }

        }

        if ( localStorage.getItem('accVersionFirstLoad') != 'true'  ) {
            localStorage.setItem('accVersionFirstLoad', true);
            localStorage.setItem('accVersionTypePreset', "medium");
            localStorage.setItem('accVersionColorPreset', "color-normal");
            console.log("first load");
        }

    }

});
