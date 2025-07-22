function Product() {
    let products = [
        {
            id:'p1',
            product_name:"City Tour"
        },
        {
            id:'p2',
            product_name:"Forest Tour"
        }
    ];
    return (
        <div>
            <ul>
                {products.map(item=><li>{"Tour Type : "+item.product_name}</li>)}
            </ul>
        </div>
    );
}
export default Product;