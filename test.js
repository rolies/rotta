
/*===================================================*/
  $(window).load(function(){
    $portfolio = $('.works-img');
    $portfolio.isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows'
    });
    $portfolio_selectors = $('label');
    $portfolio_selectors.on('click', function(){
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({ filter: selector });
      return false;
    });
  });
  

// INITIALIZATION FOR ANIMATION
new WOW().init();

