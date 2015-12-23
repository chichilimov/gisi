$( document ).ready(function() {

  var $grid = $('.photo-gallery').imagesLoaded( function() {
  // init Masonry after all images have loaded
    $grid.masonry({
      itemSelector: '.gallery',
      columnWidth: 360,
      gutter: 20
    });
  });

});
