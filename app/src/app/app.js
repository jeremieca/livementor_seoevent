angular.module('seoevent', [
	'ngRoute',
	'ui.bootstrap',

	'seoevent.home',
	'seoevent.about'
])

.config(function ($routeProvider) {
	$routeProvider.otherwise('/home');
})

.run( function () {
	
})

.controller('AppCtrl', function () {

});