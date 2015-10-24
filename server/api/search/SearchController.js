(function()
{
	'use strict';

	var apiKey = require('../../config/environment').lyricsNMusicApiKey;
	var request = require('request');
	var async = require('async');
	var prettyJson = require('prettyjson');

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
				songUrl = 'http://api.lyricsnmusic.com/songs?api_key=' + apiKey + '&q=' + params.val,
				lyricsUrl = 'http://api.lyricsnmusic.com/songs?api_key=' + apiKey + '&q=' + params.val;

			request.get(songUrl, function callBack(err, response, body)
			{
				if (!err && response.statusCode === 200)
				{
					var searchResults = [];
					var json = JSON.parse(response.body);

					async.each(json, function (result, next)
					{
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