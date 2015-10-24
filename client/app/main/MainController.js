(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.controller('MainController', ['SearchService', MainController]);

	function MainController(SearchService)
	{
		// ViewModel
		var vm = {

			// Bound scope variables
			searchField: '',
			focusSearchField: true,
			searchResults: [],
			searchBy: 'both',
			resultsLoading: false,

			// Methods
			Search: search,
			ChangeSearchBy: changeSearchBy
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
					val: encodeURIComponent(vm.searchField),
					searchType: vm.searchBy
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

		function changeSearchBy(searchType)
		{
			vm.searchBy = searchType;
			vm.focusSearchField = true;
			vm.Search();
		}
	}

})();
