// const numberOfPeople = 15;
// const distanceTraveled = 10;

// Output:
// $3.50

const numberOfPeople = 35;
const distanceTraveled = 5;

// Output:
// $2.50

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
	const basePrice = 1;
	const charge = 0.25;

	if (numberOfPeople < 30) {
		return `$${(distanceTraveled * charge + basePrice).toFixed(2)}`;
	} else if (numberOfPeople >= 30) {
		return `$${(distanceTraveled * charge + basePrice + charge).toFixed(2)}`;
	}
};

console.log(dynamicPricing(numberOfPeople, distanceTraveled));
