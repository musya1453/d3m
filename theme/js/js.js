(function ($) {

  $(window).load(function () {
    initBtnmenu();
    initAccordion();
  });

  function initBtnmenu() {
    var $btn = $('.menu-btn');


    $btn.on('click touch', menuOpen);

    function menuOpen(e) {
      e.preventDefault();

      $('body').toggleClass('open-menu');
    }

    $('.header-wrapper').prepend('<a href="#" class="close close-bg"></a>');
    var $close = $('.close');

    $close.on('click touch', function (e) {
      e.preventDefault();

      $('body').removeClass('open-menu');
    })
  }

  function initAccordion() {
    var $btn = $('.section-faq .title');

    $btn.on('click touch', function (e) {
      e.preventDefault();

      var $parent = $(this).parent();

      $parent.toggleClass('active');
    })
  }

})(jQuery);

