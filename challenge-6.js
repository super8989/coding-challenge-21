const voter_signatures = [
	'Bill Billiamson',
	'Kate Etak',
	'Brandon Brandonus',

	'Jane Janesford',
];

const voter_ids = [
	'Bill Billiamson',
	'Kate Etak',
	'Brandon Brandonus',

	'Jane Janesford',
];

const voterTurnout = (voter_signatures, voter_ids) => {
	// Code here!
	if (voter_signatures.length === voter_ids.length) {
    for (let x = 0; x < voter_ids.length; x++) {
			if (voter_signatures[x] !== voter_ids[x]) {
				return 'FRAUD!';
			}
		}
		return 'All clear, we can count the votes!';
	} else {
		return false;
	}
};

console.log(voterTurnout(voter_signatures, voter_ids));