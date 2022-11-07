function Modal(props)
{
    
   // function confirmHandler(){}
    return (
        
        <div className="modal">
            <p>Are you Sure?</p>
            <button className="btn btn--alt" >Cancel</button>
            <button className="btn" onClick={props.onConfirm}>Delete</button>
        </div>
        
    )

}
export default Modal;