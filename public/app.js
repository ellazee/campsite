var app = angular.module('HippoApp', ['ui.router', 'HippoCtrls']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/404');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'app/views/signup.html',
			controller: 'SignupCtrl'
		})
		.state('gallery', {
			url: '/photos',
			templateUrl: 'app/views/gallery.html'
		})
		.state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    });
    
    $locationProvider.html5Mode(true)
	}]);

// app.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// }]);
