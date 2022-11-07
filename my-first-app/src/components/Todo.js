import Modal from "./Modal";
import Backdrop from "./Backdrop";
import {useState} from 'react';
function Todo(props)
{
  const [isModalopen,setModalstate]=useState(false);
  function deletehandler()
  {
   setModalstate(true);
  }
  function closeModalhandler()
  {
    setModalstate(false);
  }
    return(
        
        <div className="card">
          <h1>{props.text}</h1>
          <div className="actions">
            <button className="btn" onClick={deletehandler}>Delete</button>
          </div>
          {isModalopen && <Modal onCancel={closeModalhandler} onConfirm={closeModalhandler} />}
          {isModalopen && <Backdrop onCancel={closeModalhandler}/> }
          </div>
       
    );
    
}
export default Todo;