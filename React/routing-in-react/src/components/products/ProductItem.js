import Styles from "./ProductItem.module.css";
import CustomWrapper from "./CustomWrapper";
function ProductItem(props) {
    return (
        <li className={Styles.li}>
            <CustomWrapper>
                <img src={props.item.image} alt="Not found" />
                <h1>{props.item.product_name}</h1>
                <p>{props.item.description}</p>
                <h4>{props.item.price}</h4>
                <button>Purchase</button>
            </CustomWrapper>
        </li>
    )
}
export default ProductItem;