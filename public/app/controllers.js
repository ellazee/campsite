angular.module("HippoCtrls", ['HippoServices'])

// .controller('HomeCtrl', ['$scope', function($scope) {
// 	$scope.toggle = false;

// 	$scope.toggleSwitch = function() {
// 		$scope.toggle = !$scope.toggle;
// 	}

// }])

.controller('HomeCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
   $http.post('/api/auth', $scope.user).then(function success(res) {
    Auth.saveToken(res.data.token);
    $location.path('/')
   }, function error(res) {
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
	//signup w/o tokens
	// $scope.userSignup = function() {
	// 	$http.post('api/users', $scope.user).then(function success(res) {
	// 		$location.path('/');
	// 	}, function error(res) {
	// 		console.log(res);
	// 	});
	// } 
	//tryign to get signup to post to db with tokens
	$scope.userSignup = function() {
		$http.post('/api/users', $scope.user).then(function success(res) {
			$location.path('/');
		}, function error(res) {
			console.log(res);
		});
	}
}]);

