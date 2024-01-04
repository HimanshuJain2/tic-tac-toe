import React, {  useState } from "react";
import Board from "./Board";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };
  const moves = history.map((squares, move) => {
    let details;
    if (move > 0) {
      details = "Go to move " + move;
    } else {
      details = "Go to game start";
    }
    return (
      <li key={move}>
        <button
        className="moveButton"
          onClick={() => {
            jumpTo(move);
          }}
        >
          {details}
        </button>
      </li>
    );
  });
  const resetBoard=()=>{
    setXIsNext(true)
    setCurrentMove(0)
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
      <h1>TIC_TAC_TOE</h1>

          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
            <button className="resetButton" onClick={resetBoard}>Reset Board</button>
          <ul>{moves}</ul>
        </div>
      </div>
    </>
  );
}

export default Game;
