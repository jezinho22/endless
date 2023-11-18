import { useState } from "react";
import Letter from "./Letter.jsx";
import wordlist from "./assets/wordlist.json";

export default function Game() {
	const [fixedLetters, setFixedLetters] = useState([]);
	const [form, setForm] = useState({});

	function handleChange(event) {
		console.log(event.target.name);
		setForm({ [event.target.name]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		// add the letter to the fixedletters
		const v = Object.keys(form)[0];
		console.log(v);
		if (v === "lastLetter") {
			setFixedLetters([...fixedLetters, form[v]]);
		} else if (v === "firstLetter") {
			console.log(form[v]);
			setFixedLetters([form[v], ...fixedLetters]);
		}
		console.log(fixedLetters);
		event.target[v].value = "";

		wordCheck();
	}

	function wordCheck() {
		const words = "howdy";
		console.log(words);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} onChange={handleChange}>
				{fixedLetters.length > 0 && (
					<input
						type="text"
						className="letter"
						name="firstLetter"
						maxLength={1}
					/>
				)}
				{fixedLetters.length > 0 &&
					fixedLetters.map((letter, index) => {
						return <Letter fixedLetter={letter} key={"L" + index} />;
					})}
				<input type="text" className="letter" name="lastLetter" maxLength={1} />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
// start with one letter
// each time a letter is added it goes onto the start or end and new input boxes appear at start and end
// means knwoing which one was submitted, and using unshift or push
// and not allowing both to have text entered - using handleChange and useState
