(function(){
  
  var spaCtr = angular.module('spa.ctr', []);

  spaCtr.controller('spa.list.ctr', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('mock/phones.json').success(function(data) {
        $scope.phones = data;
      });

      $scope.orderProp = 'age';
    }
  ]);

  spaCtr.controller('spa.detail.ctr', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
    }
  ]);
})();