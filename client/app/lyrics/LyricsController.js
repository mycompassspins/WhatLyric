(function()
{
	'use strict';

	angular.module('WhatLyricApp')

	.controller('LyricsController', ['$stateParams', '$location', 'SearchService', LyricsController]);

	function LyricsController($stateParams, $location, SearchService)
	{
		// ViewModel
		var vm = {
			// Bound scope variables
			params: $stateParams,
			pageLoading: false,
			searchResults: [],
			noResults: false,

			// Methods
			Init: init
		};

		return vm;

		// Implementation
		function init()
		{
			if (vm.params.snippet === '')
			{
				vm.pageLoading = true;

				var searchString = $location.path().replace('/lyrics/', '').split('/'),
					artist = searchString[0],
					track = searchString[1],
					params = {
						artist: artist,
						track: track,
						searchType: 'artistAndSong'
					};
				
				SearchService.Search(params)

				.then(function parseResponse(res)
				{
					vm.pageLoading = false;

					if (res.success) 
					{
						var result = res.searchResults[0];

						vm.params = {
							fullArtistName: result.artist.name,
							fullTitle: result.title,
							snippet: result.snippet,
							lyricsLink: result.url,
							artistLink: result.artist.url
						};
					}
					else
					{
						vm.noResults = true;
					}
				})
			}
		}
	}

})();
