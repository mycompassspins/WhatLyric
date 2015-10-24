(function()
{
	'use strict';

	angular.module('WhatLyricApp')

	.factory('SearchService', ['$http', '$q', Search]);

	function Search($http, $q)
	{
		// Interface
		var service = {
			Search: search
		};

		return service;

		// Implementation
		function search(params)
		{
			var def = $q.defer();

			$http.get('/api/search', { params: params })

			.success(function parseResponse(res)
			{
				def.resolve(res);
			})

			.error(function rejectResponse(res)
			{
				def.reject('Something went wrong. Try again.');
			});

			return def.promise;
		}
	}

})();