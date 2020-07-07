const color1 = 100;

// Output: [250, 310];

const festivalColours = (color1) => {
	let x = 0;
	let y = 0;
	let complementary = [];

	x = color1 + 150;
	y = color1 + 210;

	complementary = [x, y];

	console.log(typeof x);
	return complementary;

	// return [color1 + 210, color1 + 150];
};

console.log(festivalColours(color1));

// [360 - Math.abs(H0 + 150 - 360), 360 - Math.abs(H0 + 210 - 360)];
