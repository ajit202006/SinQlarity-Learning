import { Link } from "react-router-dom";

function MainMenu(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/about"><button>About</button></Link></li>
                    <li><Link to="/contact"><button>Contact</button></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainMenu;