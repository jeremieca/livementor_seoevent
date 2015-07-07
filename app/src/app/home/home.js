angular.module('seoevent.home', [])

.config(function ($routeProvider) {

	$routeProvider.when('/home', {
		controller: 'HomeCtrl',
		templateUrl: 'assets/home/views/home.html'
	});
	
})

.controller('HomeCtrl', function ($scope) {
	
});