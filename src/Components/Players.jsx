export default function Players({ players }) {
	return (
		<div id="player-display">
			<p>Player One: {players.playerOne}</p>
			<p>Player Two: {players.playerTwo}</p>
			{/* <p>Player Three: {players.playerThree}</p>
			<p>Player Four: {players.playerFour}</p> */}
		</div>
	);
}
