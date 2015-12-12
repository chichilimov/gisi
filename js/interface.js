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

});