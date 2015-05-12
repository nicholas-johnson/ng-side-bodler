// Nicholas Johnson (www.nicholasjohnson.com)
// Forward Advance Training (www.forwardadvance.com)
// MIT licence

(function() {
angular.module('ngSideBodler', [])
  .directive('ngSideBodler', ["$parse", function($parse) {
    return {
      scope:true,
      restrict: 'A',
      controller: ["$scope", function($scope) {
        $scope.bodler = {
          open: false,
          toggle: function() {
            $scope.bodler.open = !$scope.bodler.open;
          }
        };
      }],
      link: function(scope, el, attrs) {
        scope.$watch('bodler.open', function() {
          if (scope.bodler.open) {
            el.addClass('ng-side-bodler-open')
          } else {
            el.removeClass('ng-side-bodler-open')
          }
        })
      }
    };
  }])

  .directive('ngSideBodlerToggle', ["$parse", function($parse) {
    return {
      scope:true,
      restrict: 'A',
      link: function(scope, el, attrs) {
        // el.on('click', function() {
        //   scope.bodler.toggle();
        //   scope.$apply();
        // });
      }
    };
  }]);

// Smuggle locals out of closure for testing
window.placeholder = placeholder;
window.hitZones = hitZones;
window.widget = widget;
})();