$( document ).ready(function() {

    // Stat toggle
    var statCategory = $(".stat-category");
    var statCategoryImg = $(".stat-img");
    statCategory.click(function(){
        statCategory.removeClass("active");
        $(this).addClass("active");
        var currentCategory = $(this).index();
        statCategoryImg.removeClass("active").eq(currentCategory).addClass("active");
    });


    // Project Panorama
    calculateProjectsPanorama();

    $( ".projects" ).draggable({
        axis: "x",
        containment: ".projects-box",
        scroll: false
    });

    // uncomment if you want to move pins by drag
    //$( ".pin" ).draggable({});

    function calculateProjectsPanorama() {
        var projectsWrapWidth = $(".projects-wrap").width();
        var projectBoxWidthDelta = 3846 - projectsWrapWidth;
        var projectBoxWidth = projectBoxWidthDelta + 3846;
        $(".projects-box").width(projectBoxWidth).css("margin-right","-" + projectBoxWidth/2 + "px");
        console.log(projectsWrapWidth);
    }

    $(window).on("resize",function(){
        calculateProjectsPanorama();
    });

});
