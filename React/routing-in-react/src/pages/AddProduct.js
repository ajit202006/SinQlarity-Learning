import AddProductForm from "../components/products/AddProductForm";
function AddProduct() {
    function addProductHandler(newProduct) {
        fetch("http://localhost:3002/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
    }
    return <AddProductForm addProductHandler={addProductHandler} />
}
export default AddProduct;