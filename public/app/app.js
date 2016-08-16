var app = angular.module('HippoApp', ['ui.router', 'HippoCtrls', 'navbar']);

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
		.state('profile', {
			url: '/profile',
			templateUrl: 'app/views/profile.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html'
		})
		.state('2016', {
			url: '/hippocamp2016',
			templateUrl: 'app/views/2016.html'
		})
		.state('dinners', {
			url: '/dinners',
			templateUrl: 'app/views/dinners.html'
		})
		.state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    });
    
    $locationProvider.html5Mode(true)
	}]);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);
