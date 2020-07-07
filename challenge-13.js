// for lightsOff() function
const lights = [
	{
		id: 1,
		on: true,
	},
	{
		id: 2,
		on: true,
	},
	{
		id: 3,
		on: true,
	},
	{
		id: 4,
		on: true,
	},
	{
		id: 5,
		on: true,
	},
];

// Output:
// [
//   {
//       id: 1,
//       on: false
//   },
//   {
//       id: 2,
//       on: false
//   },
//   {
//       id: 3,
//       on: false
//   },
//   {
//       id: 4,
//       on: false
//   },
//   {
//       id: 5,
//       on: false
//   }
// ]

// for lightsOn() function
// const lights = [
//   {
//       id: 1,
//       on: false
//   },
//   {
//       id: 2,
//       on: false
//   },
//   {
//       id: 3,
//       on: false
//   },
//   {
//       id: 4,
//       on: false
//   },
//   {
//       id: 5,
//       on: false
//   }
// ]

// Output: [
// 	{
// 		id: 1,
// 		on: true,
// 	},
// 	{
// 		id: 2,
// 		on: true,
// 	},
// 	{
// 		id: 3,
// 		on: true,
// 	},
// 	{
// 		id: 4,
// 		on: true,
// 	},
// 	{
// 		id: 5,
// 		on: true,
// 	},
// ];

// for toggleLights() function
// const lights = [
//   {
//       id: 1,
//       on: true
//   },
//   {
//       id: 2,
//       on: true
//   },
//   {
//       id: 3,
//       on: true
//   },
//   {
//       id: 4,
//       on: true
//   },
//   {
//       id: 5,
//       on: true
//   }
// ]

const lightsAreOn = false;

// Output: [
// 	{
// 		id: 1,
// 		on: false,
// 	},
// 	{
// 		id: 2,
// 		on: false,
// 	},
// 	{
// 		id: 3,
// 		on: false,
// 	},
// 	{
// 		id: 4,
// 		on: false,
// 	},
// 	{
// 		id: 5,
// 		on: false,
// 	},
// ];

// Tip: Work on one of these functions at a time.

console.log(lights);

const lightsOn = function (lights) {
	// console.log(lights[0].on);

	for (let light of lights) {
		light.on = true;
	}
	return lights;
};

const lightsOff = function (lights) {
	for (let light of lights) {
		if (light.on === true) {
			light.on = false;
		}
	}
	return lights;
};

const toggleLights = function (lights, lightsAreOn) {
	if (lightsAreOn === true) {
		for (let light of lights) {
			light.on = false;
		}
		// return LightsOff(lights);
	} else {
		for (let light of lights) {
			light.on = true;
		}
	}

	return lights;
};

console.log(lightsOn(lights));
console.log(lightsOff(lights));
console.log(toggleLights(lights, lightsAreOn));
