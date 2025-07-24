import Styles from "./ProductItem.module.css";
import CustomWrapper from "./CustomWrapper";
import { useContext } from "react";
import FavouriteContext from "../store/contextFavourite";

function ProductItem(props) {

    const favouriteContext=useContext(FavouriteContext);

    const isFavourite= favouriteContext.isFavouriteItem(props.item._id);
    const toggleFavourite=()=>{
        if (isFavourite){
            favouriteContext.removeFavouriteItem(props.item._id);
            console.log(favouriteContext.favouriteItems);
        }else{
            favouriteContext.addFavouriteItem({...props.item});
            console.log(favouriteContext.favouriteItems);
        }
    }
    return (
        <li className={Styles.li}>
            <CustomWrapper>
                <img src={props.item.image} alt="Not found" />
                <h1>{props.item.product_name}</h1>
                <p>{props.item.description}</p>
                <h4>{props.item.price}</h4>
                <button>Purchase</button>
                <button onClick={toggleFavourite}>Favourite</button>
            </CustomWrapper>
        </li>
    )
}
export default ProductItem;