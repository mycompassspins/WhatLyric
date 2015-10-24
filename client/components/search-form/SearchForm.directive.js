(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.directive('searchForm', function()
	{
		return {
			restrict: 'E',
			templateUrl: 'components/search-form/search-form.html',
			controller: 'MainController',
			controllerAs: 'vm',
			link: function(scope, elem, attrs)
			{
				elem.addClass('search-form');
			}
		};
	});
	
})();
