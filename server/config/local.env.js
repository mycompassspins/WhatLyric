(function()
{	
	'use strict';

	module.exports = Env();

	function Env()
	{
		var IEnvironmentVariables = {
			DOMAIN: 'http://localhost:9000',
			LYRICS_N_MUSIC_API_KEY: 'd080d8c396683719a0ccd6957e457b',

			// Control debug level for modules using visionmedia/debug
			DEBUG: ''
		};

		return IEnvironmentVariables;
	}
	
})();
