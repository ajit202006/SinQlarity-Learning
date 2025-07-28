import Square from "./Square";

function Row({ start, n, squares, handleClick, highlightSq }) {
    let sqs = [];
    for (let j = start; j < n; j++) {
        let sq = <Square value={squares[j]} onSquareClick={() => handleClick(j)} highlight={highlightSq[j]} />
        sqs.push(sq);
    }
    return <div className="board-row">{sqs}</div>;
}

export default Row;