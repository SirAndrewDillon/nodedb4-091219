exports.seed = function(knex, Promise) {
	return knex('recipe_ingredients').insert([
		{ recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: 'tablespoon' },
		{ recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: 'pint' },
		{ recipe_id: 1, ingredient_id: 3, quantity: 1 },
		{ recipe_id: 1, ingredient_id: 4, quantity: 1 },
		{ recipe_id: 1, ingredient_id: 5, quantity: 4 },
		{ recipe_id: 1, ingredient_id: 6, quantity: 1.25, measurement: 'cup' },
		{ recipe_id: 1, ingredient_id: 10, quantity: 1, measurement: '12inches' },
		{ recipe_id: 1, ingredient_id: 11, quantity: 1, measurement: 'ounces' },
		{ recipe_id: 2, ingredient_id: 7, quantity: 2, measurement: 'pieces' },
		{ recipe_id: 2, ingredient_id: 3, quantity: 1 },
		{ recipe_id: 2, ingredient_id: 4, quantity: 1 },
		{ recipe_id: 2, ingredient_id: 8, quantity: 1 },
		{ recipe_id: 2, ingredient_id: 9, quantity: 1.5, measurement: 'cups' },
		{ recipe_id: 2, ingredient_id: 10, quantity: 1, measurement: '12 inches' },
		{ recipe_id: 2, ingredient_id: 11, quantity: 1.5, measurement: 'ounces' },
		{ recipe_id: 3, ingredient_id: 8, quantity: 8, measurement: 'wedges' },
		{ recipe_id: 3, ingredient_id: 2, quantity: 1, measurement: 'pint' },
		{ recipe_id: 3, ingredient_id: 1, quantity: 1, measurement: 'tablespoon' },
		{ recipe_id: 3, ingredient_id: 3, quantity: 1 },
		{ recipe_id: 3, ingredient_id: 4, quantity: 1 },
		{ recipe_id: 3, ingredient_id: 13, quantity: 1, measurement: '15 ounces' },
		{ recipe_id: 3, ingredient_id: 6, quantity: 1.25, measurement: 'cup ' },
		{ recipe_id: 3, ingredient_id: 11, quantity: 2, measurement: 'ounces ' }
	])
}
