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