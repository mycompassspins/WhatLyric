(function()
{
	'use strict';

	describe('Controller: MainController', function()
	{

		beforeEach(module('WhatLyricApp'));

		var MainController;

		beforeEach(inject(function ($controller)
    	{
			MainController = $controller('MainController',{});
		}));

		it('should have a Search method, a ChangeSearchBy method and a searchResults array', function()
		{
			expect(MainController).toBeDefined();
			expect(MainController.Search).toBeDefined();
			expect(MainController.searchResults).toEqual([]);
			expect(MainController.ChangeSearchBy).toBeDefined();

			var params = {
				val: encodeURIComponent('paul simon you can call me al'),
				searchType: 'both'
			};

			console.log(MainController.SearchService.Search(params));

		});
	});

})();
