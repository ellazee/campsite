angular.module("HippoCtrls", ['HippoServices'])

// .controller('HomeCtrl', ['$scope', function($scope) {
// 	$scope.toggle = false;

// 	$scope.toggleSwitch = function() {
// 		$scope.toggle = !$scope.toggle;
// 	}

// }])

.controller('NavCtrl', ['$scope', '$http', '$location', 'Auth', '$state', 'User', function($scope, $http, $location, Auth, $state, User) {
  $scope.hideOnLoggedIn = true;
  $scope.user = {
    email: '',
    password: ''
  };
  

  $scope.userLogin = function() {
   $http.post('/api/auth', $scope.user).then(function success(res) {
    Auth.saveToken(res.data.token);
    	User = res.data.user;
    	$scope.username = User.username;
			console.log(User.username);
			// localStorage.setItem('username', User.username);
			// localStorage.setItem('useremail', User.email);
    // console.log($scope.user);
    $location.path('/')
   }, function error(res) {
    $location.path('/signup');
    console.log(res);
   })
  };


  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    $state.reload();
    console.log('My token:', Auth.getToken());
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
.controller('HomeCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    $state.reload();
    console.log('My token:', Auth.getToken());
  }
}]);

