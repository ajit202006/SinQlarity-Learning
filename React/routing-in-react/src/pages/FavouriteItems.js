import ProductList from "../components/products/ProductList";
import FavouriteContext from "../components/store/contextFavourite";
import { useContext } from "react";
function FavouriteItems(){
    const favouriteContext=useContext(FavouriteContext);

    return <div>
        <ProductList products={favouriteContext.favouriteItems}/>
    </div>

}
export default FavouriteItems;