function Box(props){
    return <div className="box" id={props.id}>{props.check?props.value:""}</div>
}

export default Box;