(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.directive('siteFooter', SiteFooter);

	function SiteFooter()
	{
		return {
			templateUrl: 'components/site-footer/site-footer.html',
			restrict: 'E'
		};
	}
	
})();
