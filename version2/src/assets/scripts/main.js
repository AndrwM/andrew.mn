'use strict';

$(window).load(function() {
   console.log('%c🚀 Interested in what\'s going on under the hood?', 'color: #6a5ef5');
   console.log('%c   Studio@Andrew.mn', 'font-weight: bold;');

  var breakpoint = function () {
    if ($('body > [js-breakpoint]').length <= 0) {
      $('body').append('<div js-breakpoint></div>');
    }

    return $('[js-breakpoint]').css('z-index');
  };

  if ( breakpoint() > 1 ) {
    $("[js-sticky-aside]").stick_in_parent({
      offset_top: 100,
    });
  }

  if ( breakpoint() > 0 ) {
    // var headroom  = new Headroom($("[js-navigation]")[0], {
    //   tolerance: {
    //     down: 3,
    //     up: 10
    //   },
    //   classes: {
    //     initial: "c-navigation",
    //     pinned: "c-navigation--pinned",
    //     unpinned: "c-navigation--unpinned",
    //     top: "c-navigation--top",
    //     notTop: "c-navigation--not-top",
    //     bottom: "c-navigation--bottom",
    //     notBottom: "c-navigation--not-bottom" }
    // }).init();

    // $('[js-navigation]').midnight();

    $('[js-navigation]').midnight({
      innerClass: 'c-navigation__container',
    });

    $('[js-carousel]').flickity({
      draggable: true,
      prevNextButtons: false,
      cellAlign: 'left',
      // groupCells: true,
      selectedAttraction: 0.1,
      friction: 0.8,
      dragThreshold: 1,
    });
  }

  if ( breakpoint() == 0 ) {
    //     $('[js-carousel]').flickity({
    //   draggable: true,
    //   prevNextButtons: false,
    //   cellAlign: 'left',
    //   groupCells: true,
    //   selectedAttraction: 0.2,
    //   friction: 0.8
    // });
  }
});
