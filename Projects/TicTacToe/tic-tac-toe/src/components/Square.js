function Square({ n, value, onSquareClick, highlight }) {
  return <button className={`square ${highlight ? "highlight" : ""}`} onClick={onSquareClick}>{value}</button>
}

export default Square;