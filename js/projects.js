$( document ).ready(function() {

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
