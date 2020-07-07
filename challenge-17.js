const vegetables = [
	{
		submitter: 'Old Man Franklin',
		redness: 10,
		plumpness: 5,
	},
	{
		submitter: 'Sally Tomato-Grower',
		redness: 2,
		plumpness: 8,
	},
	{
		submitter: 'Hamid Hamidson',
		redness: 4,
		plumpness: 3,
	},
];

const metric = 'redness';

// Output:
// Old Man Franklin

/* let winner;

const judgeVegetable = (vegetables, metric) => {
	for (let x = 0; x < vegetables.length; x++) {
		// console.log(`x: ${x} ${vegetables[x].redness}`);

		for (let y = x + 1; y < vegetables.length - 1; y++) {
			if (metric === 'redness') {
				if (vegetables[x].redness > vegetables[y].redness) {
					winner = vegetables[x];
				}
			}
		}
	}
	console.log(winner);
	console.log(winner.submitter);
	return winner.submitter;
};

judgeVegetable(vegetables, metric); */

const judgeVegetable = (vegetables, metric) => {
	let winner = 0;
	let index;

	for (let x = 0; x < vegetables.length; x++) {
		if (vegetables[x][metric] > winner) {
			winner = vegetables[x][metric];
			index = x;
		}
	}
	return vegetables[index].submitter;
};

console.log(judgeVegetable(vegetables, metric));
