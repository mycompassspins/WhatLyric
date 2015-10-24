(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.controller('SearchFormController', [SearchFormController]);

	function SearchFormController()
	{
		// ViewModel
		var vm = {
			searchField: '',
			Search: search
		};

		return vm;

		// Implementation
		
		function search()
		{
			
		}
	}

})();
