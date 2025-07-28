import Row from "./Row";
import { Link } from "react-router-dom";

function setBoard(n, squares, handleClick, highlightSq) {
    let divsArray = [];
    for (let i = 0; i < n; i++) {
        let sqs = <Row start={i * n} n={(i + 1) * n} squares={squares} handleClick={handleClick} highlightSq={highlightSq} />
        divsArray.push(sqs);
    }
    return divsArray;
}

function getWinSquares(n) {
    let winSquares = [];
    let temp = [];
    // Horizontal win points
    for (let i = 0; i < n; i++) {
        temp.push(i);
    }
    winSquares.push(temp);

    let iter = 1;
    while (winSquares.length < n) {
        temp = temp.map(element => { return element + (n * iter) });
        winSquares.push(temp);
    }

    // Vertical win points
    for (let i = 0; i < n; i++) {
        temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(winSquares[j][i])
        }
        winSquares.push(temp);
    }

    // top left to bottom right diagonal win points
    temp = [];
    for (let i = 0; i < n; i++) {
        temp.push((n + 1) * i)
    }
    winSquares.push(temp);

    // top right to bottom left diagonal win points
    temp = [];
    for (let i = 1; i <= n; i++) {
        temp.push((n - 1) * i)
    }
    winSquares.push(temp);


    return winSquares;
}
function calculateWinner(squares, n) {
    const winSquares = getWinSquares(n);
    outer:
    for (const line of winSquares) {
        if (squares[line[0]]) {
            let winner=squares[line[0]];
            for (let i = 0; i < n - 1; i++) {
                if (winner !== squares[line[i + 1]]) {
                    continue outer;
                }
            }
            return [winner,line];
        }
    }
    return null;
}

export default function Board({ n, xIsNext, squares, onPlay, currentMove, resetBoard }) {
    let highlight = Array(n*n).fill(false);
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares, n)) {
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

    function highlightSquares([...args]) {
        for(let i=0;i<args.length;i++){
            highlight[args[i]]=true;
        }
    }

    let winner = calculateWinner(squares, n);
    let status;

    if (winner) {
        status = `Winner : ${winner[0]}`;
        highlightSquares(winner[1]);
    } else if (currentMove === n * n) {
        status = "Draw ";
    } else {
        status = `Next player : ${xIsNext ? "X" : "O"}`;
    }

    return (
        <>
            <div className="status">{<Link to="/"><button>Select Menu</button></Link>}</div>
            <div className="status">{status}</div>
            <div className="board">{setBoard(n, squares, handleClick, highlight)}</div>
            <div className="status"> <button onClick={resetBoard}>Reset</button></div>
        </>
    );
}