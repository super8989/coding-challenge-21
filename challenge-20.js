const sphere = {
	type: 'sphere',
	radius: 2,
};
// Output: 33.5102;

// const cone = {
// 	type: 'cone',
// 	radius: 3,
// 	height: 5,
// };
// // Output: 47.12385;

const prism = {
	type: 'prism',
	height: 3,
	width: 4,
	depth: 5,
};
// Output: 60;

const largeSphere = {
	type: 'sphere',
	radius: 40,
};

const smallSphere = {
	type: 'sphere',
	radius: 10,
};

const cone = {
	type: 'cone',
	radius: 3,
	height: 5,
};

const duck = [largeSphere, smallSphere, cone];

// Output: 272318.257;

//
//
// Use the value below whenever you need the value of Pi

const PI = 3.14159;

const sphereVolume = function (radius) {
	return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = function (radius, height) {
	return PI * Math.pow(radius, 2) * (height / 3);
};

const prismVolume = function (height, width, depth) {
	return height * width * depth;
};

const totalVolume = function (solids) {
	let total = 0;

	for (let item of solids) {
		if (item['type'] === 'sphere') {
			total = total + sphereVolume(item['radius']);
		}
		if (item['type'] === 'cone') {
			total = total + coneVolume(item['radius'], item['height']);
		}
		if (item['type'] === 'prism') {
			total = total + prismVolume(item['height'], item['width'], item['depth']);
		}
	}

	return total;

	//add all elements of duck
};

// console.log(sphereVolume(sphere.radius));
// console.log(coneVolume(cone.radius, cone.height));
// console.log(prismVolume(prism.height, prism.width, prism.depth));
console.log(totalVolume(duck));
