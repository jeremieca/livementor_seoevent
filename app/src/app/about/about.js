angular.module('seoevent.about', [])

.config(function ($routeProvider) {

	$routeProvider.when('/about', {
		controller: 'AboutCtrl',
		templateUrl: '/assets/about/views/about.html'
	});
	
})

.controller('AboutCtrl', function ($scope) {

	$scope.dropdownDemoItems = [
		"The first choice!",
		"And another choice for you.",
		"but wait! A third!"
	];

});
