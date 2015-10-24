(function()
{	
	'use strict';

	angular.module('WhatLyricApp')

	.config(['$stateProvider', Config]);

	function Config($stateProvider) 
	{
		$stateProvider

		.state('lyrics', 
		{
			url: '/lyrics/:artist/:title',
			templateUrl: 'app/lyrics/lyrics.html',
			controller: 'LyricsController',
			controllerAs: 'vm',
			params: {
				snippet: '',
				fullTitle: '',
				fullArtistName: '',
				lyricsLink: '',
				artistLink: ''
			}
		});
	}

})();
