/**
 * This only for toggle the grid/list view
 */
(function($) {
  'use strict';
  Drupal.behaviors.toggleViewGridList = {
    // Controls the main navigation.
    attach: function (context, settings) {

      //Ensure the function only works when view-toggle div on.
      //We could cookie the path to solve the problem, might be too much.
      if ($('.view-toggle').length == 0) {
        $('.view-content').removeClass('grids-view');
        return;
      } else {
        //Default grid view.
        toggleView('grids-view');
      }

      //D8 got jquery.cookie as default.
      //This only works on Unformatted list view mode.
        var active_class = $.cookie('active-mode');
        if (active_class == 'grids') {
          toggleView('grids-view');
        } else {
          toggleView('list-view');
        }

        $('.view-toggle >.fa-list', context).click(function (event) {
          toggleView('list-view');
          $.cookie('active-mode', 'list');
        });

        $('.view-toggle >.fa-table', context).click(function (event) {
          toggleView('grids-view');
          $.cookie('active-mode', 'grids');
        });

    }
  }

  function toggleView(viewmode) {
    if (viewmode == 'grids-view') {
      $('.view-toggle >.fa-table').addClass('active');
      $('.view-toggle >.fa-list').removeClass("active");
      $('.view-content').addClass('grids-view');
      $('.views-row').matchHeight();
    } else {
      //Fallback to list view.
      $('.view-content').removeClass('grids-view');
      $('.view-toggle >.fa-list').addClass('active');
      $('.view-toggle >.fa-table').removeClass("active");
      $('.views-row').matchHeight({ remove: true });
    }
  }

})(jQuery);