const buses = {
	pickadilly: {
		distance: 10,
		speed: 5,
	},
	uptown: {
		distance: 13,
		speed: 10,
	},
};

const busTimes = (buses) => {
	// newObject = {
	// 	pickadilly: buses.pickadilly.distance / buses.pickadilly.speed,
	// 	uptown: buses.uptown.distance / buses.uptown.speed,
	// };

	// console.log(newObject);
	// return newObject;

	for (const bus in buses) {
		// console.log(`${bus}: ${buses[bus].distance}`);
		// console.log(`${bus}: ${buses[bus].distance / buses[bus].speed}`);
		// console.log(bus);
		// console.log(buses[bus]);
		// buses[bus] = buses[bus].distance / buses[bus.speed];
		// console.log(buses[bus].distance);
		// console.log(buses[bus].speed);

		let time = buses[bus].distance / buses[bus].speed;
		buses[bus] = time;
	}
	console.log(buses);
	return buses;
};

busTimes(buses);

// Output:

//     {
//       pickadilly: 2,
//       uptown: 1.3
//     }
