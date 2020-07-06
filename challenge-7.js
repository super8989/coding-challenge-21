const interviews = [
	'smart city',
	'rebuild the lighthouse',
	'arts funding',
	'transportation',
	'arts funding',
	'rebuild the lighthouse',
	'sports funding',
	'tax cuts',
	'smart city',
	'arts funding',
	'smart city',
];

const termTopics = function(interviews) {
  let mentions = [0, 0, 0];

  let smartCity = 0;
  let artsFunding = 0;
  let transportation = 0;

  // for (let interview of interviews) {
  //   if (interview === 'smart city') {
  //     mentions[0] += 1;
  //   }
  //   if (interview === 'arts funding') {
	// 		mentions[1] += 1;
  //   }
  //   if (interview === 'transportation') {
	// 		mentions[2] += 1;
	// 	}

  // }
  
    for (let interview of interviews) {
    if (interview === 'smart city') {
      smartCity += 1;
    }
    if (interview === 'arts funding') {
			artsFunding += 1;
    }
    if (interview === 'transportation') {
			transportation += 1;
		}

  }

  mentions[0] = smartCity;
  mentions[1] = artsFunding;
  mentions[2] = transportation;

  return mentions;
}

console.log(termTopics(interviews));



// Output
// [
//   3, // smart city
//   3, // arts funding
//   1, // transportation
// ];