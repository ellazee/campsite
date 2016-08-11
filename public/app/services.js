angular.module('HippoServices', ['ngResource'])

.factory('Balloon', ['$resource', function($resource) {
  return $resource('/api/balloons/:id');
}])

.factory('Auth', ['$window', function($window) {
  return {
    saveToken: function(token) {
      $window.localStorage['secret-token'] = token;
    },
    getToken: function() {
      return $window.localStorage['secret-token'];
    },
    removeToken: function() {
      $window.localStorage.removeItem('secret-token');
    },
    isLoggedIn: function() {
      var token = this.getToken();
      return token ? true : false;
    }
  }
}])

.factory('AuthInterceptor', ['Auth', function(Auth) {
  return {
    request: function(config) {
      var token = Auth.getToken();
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  }
}])