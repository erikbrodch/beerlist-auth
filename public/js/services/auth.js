app.factory('auth', ['$http', function($http){
  var auth = {};

  auth.register = function(user){
    return $http.post('/register', user);
  };

  auth.login = function (user){
      return $http.post('/login', user);
  }

  return auth;
}]);