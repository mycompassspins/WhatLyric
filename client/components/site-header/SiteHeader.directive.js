(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.directive('siteHeader', function()
	{
		return {
			restrict: 'E',
			templateUrl: 'components/site-header/site-header.html',
		};
	});
	
})();
