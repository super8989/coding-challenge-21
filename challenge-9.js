const cars = [
	{
		time: 1568329654807,
		speed: 40,
	},
	{
		time: 1568329821632,
		speed: 42,
	},
	{
		time: 1568331115463,
		speed: 35,
	},
];

const speed = 38;

const carPassing = (cars, speed) => {
	newObject = {
		time: Date.now(),
		speed: speed,
	};

	console.log(newObject);

	cars.push(newObject);

	return cars;
};

console.log(carPassing(cars, speed));

// Output: [
// 	{
// 		time: 1568329654807,
// 		speed: 40,
// 	},
// 	{
// 		time: 1568329821632,
// 		speed: 42,
// 	},
// 	{
// 		time: 1568331115463,
// 		speed: 35,
// 	},
// 	{
// 		time: 1568431216417,
// 		speed: 38,
// 	},
// ];
