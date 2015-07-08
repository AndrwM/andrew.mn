'use strict';

window.a = {
  //-----------------------------------------------------
  init: function() {

    console.log('Exciting Times')

    // INITIATE ALL THE THINGS
    if ( $('.wrapper-page.project').length ) {

      $('.wrapper-page > nav').headroom({
        tolerance: { top:20, bottom:4 }
      });

      $("section.feature .description").stick_in_parent({
        offset_top:80,
      })
        .on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
          $(this).parent().css('position', 'relative');
        });
    }

    // this.navController.init();

  },
  //-----------------------------------------------------
  comparisonSlider: function() {

    window.slider = new Dragdealer('handleTrack', {
      steps: 7,
      x: .5,
      left:6,
      right:6,
      animationCallback: function(x, y) {
        // $('.js-comparison-slider .mask.left').width( Math.round(x * 100) + "%");
        // $('.js-comparison-slider .mask.right').width( Math.round((1 - x) * 100) + "%");

        if (x >= .5) {
          var backgroundSize = Math.round(x * 800)
        } else if (x <= .5) {
          var backgroundSize = Math.round((1 - x) * 800)
        }

        $('.js-comparison-slider .mask.left').css({
          "width": Math.round(x * 100) + "%",
          "background-size": backgroundSize
        });

        $('.js-comparison-slider .mask.right').css({
          "width": Math.round((1 - x) * 100) + "%",
          "background-size": backgroundSize
        });
      }
    });

    $('.js-comparison-slider .mask.left').click(function (e) {
      slider.setStep(5)
    })
    $('.js-comparison-slider .mask.right').click(function (e) {
      slider.setStep(3)
    })

  },
  //-----------------------------------------------------
};


$(document).ready(function () {
  a.init();
});