// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });


(function($, window, document, undefined) {
  'use strict';

  // init cubeportfolio
  $('#js-grid-mosaic-projects').cubeportfolio({
      filters: '#js-filters-mosaic-projects1,#js-filters-mosaic-projects2',
      loadMoreAction: 'click',
      layoutMode: 'mosaic',
      defaultFilter: '*',
      animationType: 'quicksand',
      gapHorizontal: 35,
      gapVertical: 30,
      gridAdjustment: 'responsive',
      mediaQueries: [{
          width: 1500,
          cols: 5
      }, {
          width: 1100,
          cols: 4
      }, {
          width: 800,
          cols: 3
      }, {
          width: 480,
          cols: 2
      }, {
          width: 320,
          cols: 1
      }],
      caption: 'zoom',
      displayType: 'sequentially',
      displayTypeSpeed: 80,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
  });

  /*-------------------------------------
      Preloader
  -------------------------------------*/
  $(document).ready(function(){
    setTimeout(function(){
      $('body').addClass('loaded');
    },500);
    $('.owl-carousel').owlCarousel();
  });

})(jQuery, window, document);

// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel();
// });

$('#clientsCarousel').carousel({
  interval: 5000
});
