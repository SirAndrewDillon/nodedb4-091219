exports.seed = function(knex) {
	return knex('ingredients').insert([
		{ ingredient_name: 'worms' }, // 1
		{ ingredient_name: 'dirt' }, // 2
		{ ingredient_name: 'wax' }, // 3
		{ ingredient_name: 'oak leaves' }, // 4
		{ ingredient_name: 'pig spine' }, // 5
		{ ingredient_name: 'rodent milk' }, // 6
		{ ingredient_name: 'baby chickens ' }, // 7
		{ ingredient_name: 'eye of newt' }, // 8
		{ ingredient_name: 'worms' }, // 9
		{ ingredient_name: 'wheat pennies' }, // 10
		{ ingredient_name: 'toilet water' }, // 11
		{ ingredient_name: 'parrot feathers' }, // 12
		{ ingredient_name: 'fish eyes' } // 13
	])
}
