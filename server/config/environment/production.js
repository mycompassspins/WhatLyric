(function()
{
	'use strict';

	// Production specific configuration
	// =================================

	module.exports = Production();

	function Production()
	{
		var IProductionRepository =  {
			// Server IP
			ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

			// Server port
			port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080
		};

		return IProductionRepository;
	}

})();
