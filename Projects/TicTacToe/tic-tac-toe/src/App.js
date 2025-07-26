import { useState } from "react"; 

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],//Winning horizontally
    [0, 3, 6], [1, 4, 7], [2, 5, 8],// Winning vertically
    [0, 4, 8], [2, 4, 6],// Winning diagonally
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return [squares[a], a, b, c];
    }
  }
  return null;
}

function Square({ value, onSquareClick, highlight }) {
  return <button className={`square ${highlight ? " highlight" : ""}`} onClick={onSquareClick}>{value}</button>
}

function Board({ xIsNext, squares, onPlay, currentMove, resetBoard }) {
  let highlight = Array(9).fill(false);
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  }

  function highlightSquares(a, b, c) {
    highlight[a] = true
    highlight[b] = true
    highlight[c] = true;
  }

  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner : ${winner[0]}`;
    highlightSquares(winner[1], winner[2], winner[3]);
  } else if (currentMove === 9) {
    status = "Draw ";
  } else {
    status = `Next player : ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} highlight={highlight[0]} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} highlight={highlight[1]} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} highlight={highlight[2]} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} highlight={highlight[3]} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} highlight={highlight[4]} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} highlight={highlight[5]} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} highlight={highlight[6]} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} highlight={highlight[7]} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} highlight={highlight[8]} />
        </div>
      </div>
      <div className="status"> <button onClick={resetBoard}>Reset</button></div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
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
    tempRow.push(Math.floor(i / 3) + 1);
    tempColumn.push(i % 3 + 1);
    setRow(tempRow);
    setColumn(tempColumn);
  }

  function jumpsTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetBoard() {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  }

  const moves = !currentMove ? null : history.map((squares, move) => {
    let description = `(${row[move-1]}, ${column[move-1]})`;
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