import "./App.css";
import Game from "./Game";
import "./game.css";
import UserProfile from "./UserProfile";
import PlayerForm from "./PlayerForm";
import { useState } from "react";
import Players from "./Players";

function App() {
	const [players, setPlayers] = useState({});

	return (
		<>
			<PlayerForm setPlayers={setPlayers} />
			<Players players={players} />
			<Game />
		</>
	);
}

export default App;
