const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

// Output: [-1, 4];

const finalPosition = (moves) => {
	let x = 0;
	let y = 0;
	let position = [x, y];

	for (let move of moves) {
		if (move === 'east') {
			x += 1;
		}
		if (move === 'west') {
			x -= 1;
		}
		if (move === 'north') {
			y += 1;
		}
		if (move === 'south') {
			y -= 1;
		}
	}

	console.log(x);
	console.log(y);
	return (position = [x, y]);
};

console.log(finalPosition(moves));
