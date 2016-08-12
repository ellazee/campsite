angular.module("HippoCtrls", ['HippoServices'])

// .controller('HomeCtrl', ['$scope', function($scope) {
// 	$scope.toggle = false;

// 	$scope.toggleSwitch = function() {
// 		$scope.toggle = !$scope.toggle;
// 	}

// }])

.controller('HomeCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.hideOnLoggedIn = true;
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
   $http.post('/api/auth', $scope.user).then(function success(res) {
    Auth.saveToken(res.data.token);
    console.log('user logged in');
    $location.path('/gallery')
   }, function error(res) {
    $location.path('/signup');
    console.log(res);
   })
  }
}])
.controller('SignupCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.user = {
		username: '',
		email: '',
		password: ''
	};
	$scope.userSignup = function() {
		$http.post('api/users', $scope.user).then(function success(res) {
			$location.path('/');
		}, function error(res) {
			console.log(res);
		});
	} 
}])
.controller('NavCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    $state.reload();
    console.log('My token:', Auth.getToken());
  }
}]);

