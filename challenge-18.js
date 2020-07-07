// for bestOdds() function
const tickets = ['red', 'red', 'green', 'blue', 'green'];

const raffleEntries = {
	red: 10,
	green: 30,
	blue: 15,
};

// Output: 'You have the best odds of winning the red raffle.';

// for countTickets() helper function
// const tickets = [
//   'red',
//   'red',
//   'green',
//   'blue',
//   'green'
// ]

// Output:

// {
//   red: 2,
//   green: 2,
//   blue: 1
// }

const countTickets = (tickets) => {
	let total = { red: 0, green: 0, blue: 0 };

	for (let ticket of tickets) {
		if (ticket === 'red') {
			total.red += 1;
		}
		if (ticket === 'green') {
			total.green += 1;
		}
		if (ticket === 'blue') {
			total.blue += 1;
		}
	}
	// console.log(total);
	return total;
};

countTickets(tickets);

const bestOdds = (tickets, raffleEntries) => {
	let total = countTickets(tickets);
	let odds = {
		red: (total.red / raffleEntries.red) * 100,
		green: (total.green / raffleEntries.green) * 100,
		blue: (total.blue / raffleEntries.blue) * 100,
	};

	let bestOdd = 0;
	let bestTicket;

	for (let color in odds) {
		if (odds[color] > bestOdd) {
			bestOdd = odds[color];
			bestTicket = color;
		}
	}

	return `You have the best odds of winning the ${bestTicket} raffle.`;

	console.log(odds);
	console.log(bestOdd);
	console.log(bestTicket);
};

console.log(bestOdds(tickets, raffleEntries));
