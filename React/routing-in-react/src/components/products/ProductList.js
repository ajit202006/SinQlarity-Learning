import ProductItem from "./ProductItem";
function ProductList(props) {
    return (
        <ul>
            {props.products.map((item) => {
                return <ProductItem key={item._id} id={item._id} item={item} />
            })}
        </ul>
    )
}
export default ProductList;