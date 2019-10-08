// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

// portfolio js code

/*-------------------------------------
     Protfolio
    -------------------------------------*/


     //Protfolio popup

     $('.portfolio-gallery-set').magnificPopup({
      type: 'image',
         gallery:{
     enabled:true
     }

     });

     //protfolio filter set
     $('.portfolio-filter li').on('click', function(event) {
         $(this).siblings('.active').removeClass('active');
         $(this).addClass('active');
         event.preventDefault();
     });

     //protfolio isotope
     var $varPortfolioMasonry = $('.portfolio-masonry');
     if (typeof imagesLoaded == 'function') {
         imagesLoaded($varPortfolioMasonry, function() {
             setTimeout(function() {
                 $varPortfolioMasonry.isotope({
                     itemSelector: '.portfolio-item',
                     resizesContainer: false,
                     layoutMode: 'masonry',
                     filter: '*'
                 });
             }, 500);

         });
     };

    //protfolio filtering
    $('.portfolio-filter').on('click', 'a', function() {
         $(this).addClass('current');
         var filterValue = $(this).attr('data-filter');
         $(this).parents('.portfolio-filter-wrap').next().isotope({
             filter: filterValue
         });
     });

