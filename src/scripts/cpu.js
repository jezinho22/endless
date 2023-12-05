export default function CPUTurn(fixedLetterArray) {
	const choices = wordlist.filter((word) => word.includes(fixedLetterArray));
	console.log(choices.length);

	const worstChoices = choices.filter((word) => {
		return word.length == fixedLetterArray.length;
	});
	console.log(worstChoices.length);

	let wordIdea;
	// pick best choices of words, starting with 1 letter longer
	if (bestChoices.length > 0) {
		const bestChoices = choices.filter((word) => {
			return word.length === fixedLetterArray.length + 1;
		});
		console.log(bestChoices.length);
		bestChoices[randomIndex(bestChoices.length)];
		// then 3 letters longer
		// switch the filter into the condition so filtering
		// only happens if it needs to
	} else if (nextBestChoices.length > 0) {
		const nextBestChoices = choices.filter((word) => {
			return word.length > fixedLetterArray.length + 3;
		});
		console.log(nextBestChoices.length);
		nextBestChoices[randomIndex(nextBestChoices.length)];
		// then any word
	} else {
		console.log("Any word will do at this point");
	}
	// make a string from the letters
	let fixedLetterString = fixedLetterArray.join("");
	// find the srting in the selected word
	let y = fixedLetterString.indexOf(wordIdea);
	let z = wordIdea.length;

	// work out whether to add a letter to the start or the end
	let cpuTurn;
	// add to start?
	if (fixedLetterString[y - 1]) {
		cpuTurn = fixedLetterString[y - 1] + wordIdea;
		// add to end?
	} else if (fixedLetterString[y + z]) {
		cpuTurn = wordIdea + fixedLetterString[y + z];
	}

	console.log(cpuTurn);
}
