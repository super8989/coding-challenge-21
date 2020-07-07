const spots = [
	// COLUMNS ARE X
	//0    1    2    3    4    5
	['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
	// ['s', 'M', 's', 'S', 'R', 'M'], // 1
	// ['s', 'M', 's', 'S', 'R', 'm'], // 2
	// ['S', 'r', 's', 'm', 'R', 'M'], // 3
	// ['S', 'r', 's', 'm', 'R', 'M'], // 4
	// ['S', 'r', 'S', 'M', 'M', 'S'], // 5
];

const vehicle = 'small'; // possible options are 'regular' -> R, 'small' -> RS, or 'motorcycle' -> RSM

const whereCanIPark = (spots, vehicle) => {
	let space = [];

	for (let x = 0; x < spots.length; x++) {
		for (let y = 0; y < spots[x].length; y++) {
			if (vehicle === 'regular') {
				if (spots[x][y] === 'R') {
					space.push(y);
					space.push(x);

					return space;
				}
			}
			if (vehicle === 'small') {
				if (spots[x][y] === 'R' || spots[x][y] === 'S') {
					space.push(y);
					space.push(x);

					return space;
				}
			}
			if (vehicle === 'motorcycle') {
				if (spots[x][y] === 'R' || spots[x][y] === 'S' || spots[x][y] === 'M') {
					space.push(y);
					space.push(x);

					return space;
				}
			}
		}
	}
	return false;
};

console.log(whereCanIPark(spots, vehicle));

// Output: [4, 0] => spots[x], spots[x][y]

// //
// const whereCanIPark = (spots, vehicle) => {
// 	for (let x = 0; x < spots.length; x++) {
// 		for (let y = 0; y < spots[x].length; y++) {
// 			const spot = spots[x][y];

// 			if (vehicle === 'regular') {
// 				if (spot === 'R') {
// 					return [y, x];
// 				}
// 			}
// 			if (vehicle === 'small') {
// 				if (spot === 'R' || spot === 'S') {
// 					return [y, x];
// 				}
// 			}
// 			if (vehicle === 'motorcycle') {
// 				if (spot === 'R' || spot === 'S' || spot === 'M') {
// 					return [y, x];
// 				}
// 			}
// 		}
// 	}
// 	return false;
// };

// console.log(whereCanIPark(spots, vehicle));
