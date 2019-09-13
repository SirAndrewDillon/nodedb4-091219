exports.seed = function(knex, Promise) {
	return knex('steps').insert([
		{
			step_number: 1,
			instruction: 'Anim sint occaecat et veniam.',
			recipe_id: 1
		},
		{
			step_number: 2,
			instruction:
				'Ad duis tempor elit nostrud deserunt exercitation dolor ipsum adipisicing dolore ea officia.',
			recipe_id: 1
		},
		{
			step_number: 3,
			instruction:
				'Labore in mollit incididunt labore dolor ad velit ipsum dolore eu eu.',
			recipe_id: 1
		},
		{
			step_number: 4,
			instruction:
				'Elit minim minim ex quis sint est duis proident pariatur eiusmod adipisicing labore aliqua.',
			recipe_id: 1
		},
		{
			step_number: 5,
			instruction:
				'Elit incididunt cupidatat excepteur culpa ullamco ut aliqua deserunt sunt.',
			recipe_id: 1
		},
		{
			step_number: 6,
			instruction:
				'Incididunt tempor aute sit sint proident ullamco ipsum minim ullamco do ad sit anim.',
			recipe_id: 1
		},
		{
			step_number: 1,
			instruction:
				'Deserunt ad quis aute eiusmod laborum dolor commodo ex quis occaecat adipisicing nisi aliqua sint.',
			recipe_id: 2
		},
		{
			step_number: 2,
			instruction:
				'Amet laboris elit fugiat officia non Lorem nostrud mollit irure proident dolor laborum irure Lorem.',
			recipe_id: 2
		},
		{
			step_number: 3,
			instruction:
				'Non deserunt amet sit enim deserunt Lorem ut consequat nostrud ea magna ut duis officia.',
			recipe_id: 2
		},
		{
			step_number: 4,
			instruction:
				'Voluptate irure sit enim deserunt pariatur reprehenderit incididunt in esse incididunt mollit.',
			recipe_id: 2
		},
		{
			step_number: 5,
			instruction:
				'Consequat nisi eu pariatur enim excepteur esse sit veniam dolore adipisicing ullamco quis consequat.',
			recipe_id: 2
		},
		{
			step_number: 6,
			instruction:
				'Ut elit velit consectetur veniam cillum eu consequat fugiat sunt non laborum sint consequat.',
			recipe_id: 2
		},
		{
			step_number: 7,
			instruction: 'Officia do consequat commodo excepteur tempor voluptate.',
			recipe_id: 2
		},
		{
			step_number: 8,
			instruction: 'Eu aute adipisicing culpa tempor eu nulla.',
			recipe_id: 2
		},
		{
			step_number: 1,
			instruction:
				'Aliqua ullamco proident minim tempor dolor ullamco commodo fugiat ad aliquip laboris.',
			recipe_id: 3
		},
		{
			step_number: 2,
			instruction:
				'Reprehenderit voluptate pariatur cupidatat ea duis eiusmod eiusmod nisi.',
			recipe_id: 3
		},
		{
			step_number: 3,
			instruction: 'Incididunt duis irure elit deserunt.',
			recipe_id: 3
		},
		{
			step_number: 4,
			instruction: 'Id sunt culpa ullamco nisi nisi enim non.',
			recipe_id: 3
		}
	])
}
