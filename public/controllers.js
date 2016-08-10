angular.module("HippoCtrls", [])

.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.toggle = false;

	$scope.toggleSwitch = function() {
		$scope.toggle = !$scope.toggle;
	}

}]);