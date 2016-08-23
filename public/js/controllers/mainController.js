app.controller('MainCtrl', ['$scope','beers', '$http', '$state', function($scope, beers, $http, $state){
  beers.getAll().then(function () {
    $scope.beers = beers.beers;
  });

  $scope.logout = function() {
  return $http.get('/logout').then(function(){
      $state.go('login');
      console.log("logged out")
    });
  }

  $scope.addBeer = function() {
    if ($scope.name === '') { return; }

    beers.create({ 
      name: $scope.name,
      style: $scope.style,
      image_url: $scope.image_url,
      abv: $scope.abv
    });

    $scope.name = '';
    $scope.style = '';
    $scope.abv = '';
    $scope.image_url = '';
  };

  $scope.removeBeer = function (beer) {
    beers.delete(beer);
  };
}]);