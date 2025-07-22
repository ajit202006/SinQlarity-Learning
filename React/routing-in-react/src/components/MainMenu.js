import { Link } from "react-router-dom";
import MainMenuStyle from "./MainMenu.module.css";
function MainMenu(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/about"><button>About</button></Link></li>
                    <li><Link to="/contact"><button>Contact</button></Link></li>
                    <li><Link to="/product"><button>Product</button></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainMenu;