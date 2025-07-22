import CustomWrapper from "./CustomWrapper";
function AddProductForm() {
    return (
        <CustomWrapper>
            <form>
                <div>
                    <label htmlFor="product_name">Enter Product Name :</label>
                    <input type="text" id="product_name" />
                </div>
                <div>
                    <label htmlFor="image">Enter image url :</label>
                    <input type="text" id="image" />
                </div>
                <div>
                    <label htmlFor="price">Enter price :</label>
                    <input type="text" id="price" />
                </div>
                <div>
                    <label htmlFor="description">Enter Product description :</label>
                    <textarea rows="5" id="description" />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </CustomWrapper>
    );
}
export default AddProductForm;