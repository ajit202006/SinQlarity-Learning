
function FirstComponent(props) {
    return (
        <div className="modal">
            <h1>{props.owner} application</h1>
            <p>This is an application</p>
            <button onClick={props.closeModal}>Close</button>
        </div>
    );
}
export default FirstComponent;