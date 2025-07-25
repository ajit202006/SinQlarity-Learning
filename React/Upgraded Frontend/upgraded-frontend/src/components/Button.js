function Button(props){
    return <button className="btn" id={props.id} onClick={props.onClick} disabled={props.disabled}>{props.innerHTML}</button>
}
export default Button;
