const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
const bakeryB = ['milk', 'butter', 'cream cheese'];
const recipes = [
	{
		name: 'Coconut Sponge Cake',
		ingredients: ['coconut', 'cake base'],
	},
	{
		name: 'Persian Cheesecake',
		ingredients: ['saffron', 'cream cheese'],
	},
	{
		name: 'Custard Surprise',
		ingredients: ['custard', 'ground beef'],
	},
];

// const bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// const bakeryB = ['red bean', 'dijon mustard', 'apples'];
// const recipes = [
// 	{
// 		name: 'Potato Ganache',
// 		ingredients: ['potatoes', 'chocolate'],
// 	},
// 	{
// 		name: 'Sweet Fish',
// 		ingredients: ['anchovies', 'honey'],
// 	},
// 	{
// 		name: "Nima's Famous Dijon Raisins",
// 		ingredients: ['dijon mustard', 'raisins'],
// 	},
// ];

// Output: Persian Cheesecake

/* const chooseRecipe = function (bakeryA, bakeryB, recipes) {
	for (let x = 0; x < bakeryA.length; x++) {
		// console.log(bakeryA[x]);
		for (let recipe in recipes) {
			// console.log(recipes[recipe]['ingredients']);
			for (y = 0; y < recipes[recipe]['ingredients'].length; y++) {
				// console.log(recipes[recipe]['ingredients'][y]);
				if (bakeryA[x] === recipes[recipe]['ingredients'][y]) {
					
				}
      }
      
		}
	}
};
console.log(chooseRecipe(bakeryA, bakeryB, recipes)); */
/* 
const ingredientCheck = (bakery, recipes) => {
	// console.log(recipes);
	// console.log(bakery);

	for (let x = 0; x < bakery.length; x++) {
		// console.log(bakery[x]); --> saffron, eggs...
		for (let y = 0; y < recipes.length; y++) {
			// console.log(recipes[y].ingredients); --> ingredients array ['coconut', 'cake base']...
			for (let z = 0; z < recipes[y].ingredients.length; z++) {
				// console.log(recipes[y].ingredients[z]); --> coconut, cake base ...
				if (bakery[x] === recipes[y].ingredients[z]) {
					return recipes[y].name;
				}
			}
		}
	}
};

// console.log(ingredientCheck(bakeryA, recipes));
// console.log(ingredientCheck(bakeryB, recipes));

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
	let name1 = ingredientCheck(bakeryA, recipes);
	let name2 = ingredientCheck(bakeryB, recipes);

	if (name1 === name2) {
		return name1;
	}
};

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
 */

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
	let total = [];

	for (let i = 0; i < recipes.length; i++) {
		for (let j = 0; j < bakeryA.length; j++) {
			if (recipes[i].ingredients[0] === bakeryA[j]) {
				total.push('bakeryA');
			}

			if (recipes[i].ingredients[1] === bakeryA[j]) {
				total.push('bakeryA');
			}
		}

		for (let k = 0; k < bakeryB.length; k++) {
			if (recipes[i].ingredients[0] === bakeryB[k]) {
				total.push('bakeryB');
			}

			if (recipes[i].ingredients[1] === bakeryB[k]) {
				total.push('bakeryB');
			}
		}

		if (total.length === 2) {
			return recipes[i].name;
		} else {
			total = [];
		}
	}
};

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
