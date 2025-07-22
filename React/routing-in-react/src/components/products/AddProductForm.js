import {useRef} from "react";
import CustomWrapper from "./CustomWrapper";


function AddProductForm() {
    const product_name_ref=useRef();
    const image_ref=useRef();
    const price_ref=useRef();
    const description_ref=useRef();

    function submitHandler(event){
        event.preventDefault();
        const product_name=product_name_ref.current.value;
        const image=image_ref.current.value;
        const price=price_ref.current.value;
        const description=description_ref.current.value;
        const product={
            product_name,
            image,
            description,
            price
        };
        console.log(product);
        
    }
    return (
        <CustomWrapper>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="product_name">Enter Product Name :</label>
                    <input type="text" id="product_name" ref={product_name_ref}/>
                </div>
                <div>
                    <label htmlFor="image">Enter image url :</label>
                    <input type="text" id="image" ref={image_ref}/>
                </div>
                <div>
                    <label htmlFor="price">Enter price :</label>
                    <input type="text" id="price" ref={price_ref}/>
                </div>
                <div>
                    <label htmlFor="description">Enter Product description :</label>
                    <textarea rows="5" id="description" ref={description_ref}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </CustomWrapper>
    );
}
export default AddProductForm;