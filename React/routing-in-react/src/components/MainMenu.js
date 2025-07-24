import { Link } from "react-router-dom";
import Style from "./MainMenu.module.css";
import FavouriteContext from "./store/contextFavourite";
import { useContext } from "react";
function MainMenu(){
    const favouriteContext=useContext(FavouriteContext);
    const totalFavouriteItems=favouriteContext.favouriteItems.length;
    return (
        <header className={Style.header}>
            <nav>
                <ul>
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/about"><button>About</button></Link></li>
                    <li><Link to="/contact"><button>Contact</button></Link></li>
                    <li><Link to="/product"><button>Product</button></Link></li>
                    <li><Link to="/product/add"><button>Add Product</button></Link></li>
                    <li><Link to="/product/favourite"><button>{totalFavouriteItems}</button></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainMenu;