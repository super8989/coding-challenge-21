const money = 9;

// Output: [1, 1, 1, 48];

/* const pumpkinSpice = (money) => {
	let moneyLeft;
	let items = [];
	let pie;
	let lattes;
	let macarons;
	let grams;

	pie = Math.floor(money / 5);
	moneyLeft = money % 5;

	console.log('moneyLeft' + moneyLeft);

	lattes = Math.floor(moneyLeft / 3);
	moneyLeft = moneyLeft % 3;

	console.log('moneyLeft' + moneyLeft);

	macarons = Math.floor(moneyLeft / 1);

	grams = pie * 30 + lattes * 15 + macarons * 3;

	return (items = [pie, lattes, macarons, grams]);

	console.log('pie:' + pie);
	console.log('lattes' + lattes);
	console.log('macarons' + macarons);
	console.log(items);
};

pumpkinSpice(money); */

const pumpkinSpice = (money) => {
	let spiceGrams = 0;

	let treats = {
		pie: {
			cost: 5,
			grams: 30,
			qty: 0,
		},
		lattes: {
			cost: 3,
			grams: 15,
			qty: 0,
		},
		macarons: {
			cost: 1,
			grams: 3,
			qty: 0,
		},
	};

	console.log(treats);

	for (let treat in treats) {
		// console.log(treat);
		// console.log(treats[treat]);
		// console.log(treats[treat]['cost']);

		while (money >= treats[treat]['cost']) {
			treats[treat]['qty'] += 1;
			spiceGrams += treats[treat]['grams'];
			console.log(money);
			money = money - treats[treat]['cost'];
			console.log(money);
		}
	}
	console.log(treats);
	console.log(spiceGrams);

	return [treats.pie.qty, treats.lattes.qty, treats.macarons.qty, spiceGrams];
};

console.log(pumpkinSpice(money));
