import { useState } from "react";

export default function PlayerForm({ setPlayers }) {
	const [form, setForm] = useState({});

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();

		setPlayers({ ...form, playerOneScore: 0, playerTwoScore: 0 });
		console.log(form)
	}

	return (
		<div>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div id="playerForm">
					<input className="playerInput" name="playerOne" placeholder="Player One" type="text" />
					<input className="playerInput" name="playerTwo" placeholder="Player Two" type="text" />
					<button type="submit">Submit</button>				
				</div>

			</form>
		</div>
	);
}
