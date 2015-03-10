/* jshint devel:true */
// ui.router is another dependency
angular.module('app', ['app.controllers', 'ui.router'])
// provider is 3 types of services
// can only use providers inside of .config
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
    // chaining .state(name, { config object about this route });
    // another anular method, just like .controller or .factory
	.state('home', {
        // name in url, what will appear in browser appended to url
		url: "/home",
        // passing in template file path, could write it in on ln 10 if you wanted
		templateUrl: "templates/home.html",
        // specify what controller to use
		controller: "HomeCtrl"
	})
	.state('game', {
		url: "/game",
		templateUrl: "templates/game.html",
		controller: "GameCtrl"
	})
	.state('settings', {
		url: "/settings",
		templateUrl: "templates/settings.html",
		controller: "SettingsCtrl"
	})
	.state('leader', {
		url: "/leader",
		templateUrl: "templates/leader.html",
		controller: "LeaderCtrl"
	});
// specifies what the defualt page is
	$urlRouterProvider.otherwise("/home");
});