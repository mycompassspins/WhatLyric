(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.config(['$stateProvider', Config]);

	function Config($stateProvider) 
	{
		$stateProvider

		.state('main', 
		{
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm'
		});
	}

})();
