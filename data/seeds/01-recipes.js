exports.seed = function(knex) {
	return knex('recipes').insert([
		{
			recipe_name: ' Shaking Beef'
		},
		{
			recipe_name: ' Spiny Lobster In Crazy Water'
		},
		{ recipe_name: 'Wacky Chocolate Cake' },
		{ recipe_name: 'Super Shrooms' },
		{ recipe_name: 'Spam Sushi' },
		{
			recipe_name: 'Carp Sandwich'
		},
		{ recipe_name: 'Ugly But Good Hazelnut Cookies' }
	])
}
