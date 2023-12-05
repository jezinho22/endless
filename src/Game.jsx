import { useState } from "react";
import Letter from "./Letter.jsx";
import wordlist from "./assets/wordlist.json";
import cpuTurn from "./scripts/cpu.js";

export default function Game() {
	const [fixedLetters, setFixedLetters] = useState([]);
	const [form, setForm] = useState({});
	const [moveResult, setMoveResult] = useState("");
	console.log("Running");

	cpuTurn();

	function randomIndex(arrayLength) {
		return Math.floor(Math.random() * arrayLength);
	}

	// switch inputs and clear what was in previous one
	function handleClick(event) {
		const formSet = Object.keys(form).length > 0;
		if (formSet && event.target.name === "firstLetter") {
			let ignoreInput = document.getElementsByName("lastLetter")[0];
			console.log(ignoreInput);
			ignoreInput.value = "";
		} else if (formSet && event.target.name === "lastLetter") {
			let ignoreInput = document.getElementsByName("firstLetter")[0];
			console.log(ignoreInput);
			ignoreInput.value = "";
		}
	}

	function handleChange(event) {
		console.log(event.target.name);
		setForm({ [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		// add the letter to the fixedletters
		const v = Object.keys(form)[0];
		// add the letter to the array and check it against wordlist
		let letterArray = null;
		if (v === "lastLetter") {
			letterArray = [...fixedLetters, form[v]];
		} else if (v === "firstLetter") {
			letterArray = [form[v], ...fixedLetters];
		}
		setFixedLetters(letterArray);
		setMoveResult(wordCheck(letterArray));
		console.log(fixedLetters, wordCheck(letterArray));
		// reset inputs
		setForm({});
		event.target[v].value = "";
	}

	function wordCheck(fixedLetterArray) {
		const letterString = fixedLetterArray.join("");
		const filtered = wordlist.filter((word) => word.includes(letterString));
		let response = "";
		if (filtered.length === 0) {
			response = "Uh oh! There is no word you can now make with these letters";
		} else {
			const wholeWord = filtered.find((word) => word === letterString);
			response = wholeWord
				? "You finished the word: " + wholeWord
				: "Yep that's fine. Next player.";
		}
		return response;
	}

	return (
		<div>
			<div id="letter-string">
				{fixedLetters.length > 0 &&
					fixedLetters.map((letter, index) => {
						return <Letter fixedLetter={letter} key={"L" + index} />;
					})}
			</div>
			<form
				id="letter-form"
				onSubmit={handleSubmit}
				onChange={handleChange}
				onClick={handleClick}>
				<div>
					{fixedLetters.length > 0 && (
						<input type="text" name="firstLetter" maxLength={1} />
					)}

					<input type="text" name="lastLetter" maxLength={1} />
				</div>
				<input type="submit" value="Submit" />
				<button id="challenge-button">Challenge</button>
			</form>
			<h3>{moveResult}</h3>
		</div>
	);
}
// and not allowing both to have text entered - using handleChange and useState
