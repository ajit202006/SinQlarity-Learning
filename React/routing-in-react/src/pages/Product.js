import ProductList from "../components/products/ProductList";
function Product() {
    let products = [
        {
            id: 'p1',
            product_name: "City Tour",
            image: 'https://cdn.pixabay.com/photo/2022/05/03/10/29/prague-7171444_1280.jpg',
            description: "Its a city tour",
            price: "20000"
        },
        {
            id: 'p2',
            product_name: "Forest Tour",
            image: 'https://cdn.pixabay.com/photo/2022/07/09/18/14/forest-7311484_1280.jpg',
            description: "Its a forest tour",
            price: "50000"
        }
    ];
    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}
export default Product;