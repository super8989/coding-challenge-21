const bins = {
	waste: 4,
	recycling: 2,
	compost: 5,
};

const trash = 'recycling';

const smartGarbage = (trash, bins) => {
	console.log(bins);

	if (trash === 'waste') {
		bins.waste += 1;
	}
	if (trash === 'recycling') {
		bins['recycling'] += 1;
	}
	if (trash === 'compost') {
		bins.compost += 1;
	}

	return bins;
};

console.log(smartGarbage(trash, bins));

// Output
// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }
