import ProductList from "../components/products/ProductList";
import { useEffect, useState } from "react";
function Product() {
    let [products, setProducts] = useState([]);
    let [isDataFetching, setIsDataFetching] = useState(true);
    useEffect(() => {
        setIsDataFetching(true);
        fetch("http://localhost:3002/product")
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
                setIsDataFetching(false);
            })
            .catch(err => console.log(err));
    }, []);

    if (isDataFetching) {
        return <div>Data is loading...</div>
    }
    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}
export default Product;