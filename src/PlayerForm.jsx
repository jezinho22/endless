import { useState } from "react";

export default function PlayerForm({ setPlayers }) {
	const [form, setForm] = useState({});

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		setPlayers({ ...form, playerOneScore: 0, playerTwoScore: 0 });
	}

	return (
		<div>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div id="playerForm">
					<input name="playerOne" placeholder="Player One" type="text" />
					<input name="playerTwo" placeholder="Player Two" type="text" />
					<input name="playerThree" placeholder="Player Three" type="text" />
					<input name="playerFour" placeholder="Player Four" type="text" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
