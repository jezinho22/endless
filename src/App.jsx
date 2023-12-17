import { useState } from "react";

import "./reset.css";
import "./App.css";
import "./game.css";

import Game from "./Components/Game";
import PlayerForm from "./Components/PlayerForm";
import Players from "./Components/Players";
import Header from "./Components/Header";

function App() {
	const [players, setPlayers] = useState([]);

	return (
		<>
		<Header/>
		<PlayerForm setPlayers={setPlayers} />

		</>
	);
}

export default App;
