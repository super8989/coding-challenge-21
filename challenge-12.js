const samples = [
	'clean',
	'clean',
	'dirty',
	'clean',
	'dirty',
	'clean',
	'clean',
	'dirty',
	'clean',
	'dirty',
];
const threshold = 0.3;

const checkAir = function (samples, threshold) {
	const totalSamples = samples.length;
	let dirty = 0;

	for (let sample of samples) {
		if (sample === 'dirty') {
			dirty += 1;
		}
	}

	// console.log(dirty);
	// console.log(totalSamples);

	if (dirty / totalSamples < threshold) {
		return 'Clean';
	} else {
		return 'Polluted';
	}
};

console.log(checkAir(samples, threshold));

// Output: Polluted;
