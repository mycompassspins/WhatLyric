(function()
{
	'use strict';

	angular.module('WhatLyricApp')

	.directive('focusMe', ['$timeout', '$parse', FocusMe]);

	function FocusMe($timeout, $parse)
	{
		return {
			//scope: true,   // optionally create a child scope
			link: function(scope, element, attrs)
			{
				var model = $parse(attrs.focusMe);
				scope.$watch(model, function (value)
				{
					if (value)
					{
						$timeout(function()
						{
							element[0].focus();
						});
					}
				});

				element.bind('blur', function()
				{
					scope.$apply(model.assign(scope, false));
				});
			}
		};
	}

})();
