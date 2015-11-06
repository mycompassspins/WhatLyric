(function()
{
	'use strict';

	var apiKey = require('../../config/environment').lyricsNMusicApiKey;
	var request = require('request');
	var async = require('async');

	module.exports = SearchController();

	function SearchController()
	{
		// Interface
		var controller = {
			Search: search
		};

		return controller;

		// Implementation

		//
		// GET: /search
		function search(req, res)
		{
			var params = req.query,
				apiUrl = _constructUrl(params);

			request.get(apiUrl, function callBack(err, response, body)
			{
				if (err || response.statusCode !== 200) return res.json({ success: 0 });

				var searchResults = [];
				var results = JSON.parse(response.body);

				async.each(results, function (result, next)
				{
					if (result)
					{
						result.linkFriendlyTitle = _formatString(result.title);
						result.linkFriendlyArtistName = _formatString(result.artist.name);
						searchResults.push(result);
					}

					next();

				}, function (err)
				{
					if (err || !searchResults.length) return res.json({ success: 0 });
					return res.json({ success: 1, searchResults: searchResults });
				});
			});
		}

		/*
		* Private Methods
		*/

		function _constructUrl(params)
		{
			var apiUrl = 'http://api.lyricsnmusic.com/songs?api_key=' + apiKey;

			// User is searching with no filter - general query
			if (params.searchType === 'both') return apiUrl += '&q=' + params.val;

			// We have an artist name and a song title
			if (params.searchType === 'artistAndSong') return apiUrl += '&artist=' + params.artist + '&track=' + params.track;

			// Otherwise, we know that params.searchType will be either 'artist' or 'track'
			return apiUrl += '&' + params.searchType + '=' + params.val;
		}

		function _formatString(str)
		{
			// e.g, Paul Simon => paul-simon
			return str.replace(/[^a-zA-Z ]/g, '')
				.replace(/\s/g, '-')
				.toLowerCase();
		}
	}

})();
