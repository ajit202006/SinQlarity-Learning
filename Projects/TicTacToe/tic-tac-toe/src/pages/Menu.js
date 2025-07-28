import { Link } from "react-router-dom";
export default function Menu({ setGridLength }) {
    return (
        <div className="game-board" >
            <div className="status" >
                <Link to="/game"><button onClick={() => setGridLength(3)}>3 X 3</button></Link>
            </div>
            <div className="status">
                <Link to="/game"><button onClick={() => setGridLength(4)}>4 X 4</button></Link>
            </div>
        </div>
    );
}
