(function()
{	
	'use strict';

	angular.module('WhatLyricApp', 
	[
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ui.router'
	])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', Config]);

	function Config($stateProvider, $urlRouterProvider, $locationProvider) 
	{
		$urlRouterProvider

		.otherwise('/');

		$locationProvider.html5Mode(true);
	}

})();
