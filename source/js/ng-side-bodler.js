angular.module('ngSideBodler', [])
  .directive('ngSideBodler', function($parse) {
    return {
      scope:true,
      restrict: 'A',
      controller: function($scope) {
        $scope.bodler = {
          open: false,
          toggle: function() {
            $scope.bodler.open = !$scope.bodler.open;
          }
        };
      },
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
  })

  .directive('ngSideBodlerToggle', function($parse) {
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
  });
