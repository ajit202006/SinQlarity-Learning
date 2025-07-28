import { useState } from "react";
import Board from "../components/Board";

export default function Game({ n }) {
  const [history, setHistory] = useState([Array(n * n).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(false);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const [row, setRow] = useState([]);
  const [column, setColumn] = useState([]);

  function handlePlay(nextSquares, i) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    let tempRow = row.slice();
    let tempColumn = column.slice();
    tempRow.push(Math.floor(i / n) + 1);
    tempColumn.push(i % n + 1);
    setRow(tempRow);
    setColumn(tempColumn);
  }

  function jumpsTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetBoard() {
    setCurrentMove(0);
    setHistory([Array(n * n).fill(null)]);
  }

  const moves = !currentMove ? null : history.map((squares, move) => {
    let description = `(${row[move - 1]}, ${column[move - 1]})`;
    if (move === history.length - 1) {
      description = `Current move ${description}`;
    } else if (move > 0) {
      description = `Move #${move} ${description}`;
    } else {
      return null;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpsTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game-board">
        <Board
          n={n}
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          currentMove={currentMove}
          resetBoard={resetBoard}
        />
      </div>
      <div className={currentMove ? "game-info" : "display-none"}>
        <div className="status">History</div>
        <ul>{isIncreasing ? moves : moves?.reverse()}</ul>
        <button id="order" onClick={() => { setIsIncreasing(!isIncreasing) }}>{isIncreasing ? "Increasing" : "Decreasing"}</button>
      </div>
    </>
  );
}