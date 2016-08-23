app.controller('LoginCtrl', ['$scope', 'auth', '$state', function($scope, auth, $state){
  $scope.login = function () {
    auth.login($scope.user);
  };
}]);