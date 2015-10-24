(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.controller('SearchFormController', ['SearchService', '$timeout', SearchFormController]);

	function SearchFormController(SearchService, $timeout)
	{
		// ViewModel
		var vm = {

			// Bound scope variables
			searchField: '',
			searchResults: [],
			resultsLoading: false,

			// Methods
			Search: search
		};

		return vm;

		// Implementation
		
		function search()
		{
			vm.searchResults = [];

			if (vm.searchField && vm.searchField.length > 2)
			{
				vm.resultsLoading = true;
				
				var params = {
					val: encodeURIComponent(vm.searchField)
				};

				SearchService.Search(params)

				.then(function parseResponse(res)
				{
					vm.resultsLoading = false;
					if (res.success) 
					{
						vm.searchResults = res.searchResults;
					}
				});
			}
			else
			{
				vm.searchResults = [];
			}
		}
	}

})();
