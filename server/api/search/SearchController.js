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
		}

		return controller;

		// Implementation

		//
		// GET: /search
		function search(req, res)
		{
			var params = req.query,
				apiUrl = 'http://api.lyricsnmusic.com/songs?api_key=' + apiKey;

			// User is searching with no filter - general query
			if (params.searchType === 'both')
			{
				apiUrl += '&q=' + params.val;
			}
			// We have an artist name and a song title
			else if (params.searchType === 'artistAndSong')
			{
				apiUrl += '&artist=' + params.artist + '&track=' + params.track;
			}
			// Otherwise, we know that params.searchType will be either 'artist' or 'track'
			else
			{
				apiUrl += '&' + params.searchType + '=' + params.val
			}

			request.get(apiUrl, function callBack(err, response, body)
			{
				if (!err && response.statusCode === 200)
				{
					var searchResults = [];
					var json = JSON.parse(response.body);

					async.each(json, function (result, next)
					{
						result.linkFriendlyTitle = result.title
							.replace(/[^a-zA-Z ]/g, '')
							.replace(/\s/g, '-')
							.toLowerCase();

						result.linkFriendlyArtistName = result.artist.name
							.replace(/[^a-zA-Z ]/g, '')
							.replace(/\s/g, '-')
							.toLowerCase();

						searchResults.push(result);
						next();

					}, function (err)
					{
						if (err) console.log(err);

						if (!searchResults.length) 
						{
							return res.json({ success: 0 });
						}

						return res.json({ success: 1, searchResults: searchResults });
					});
				}
				else
				{
					return res.json({ success: 0 });
				}
			})
		}
	}

})();