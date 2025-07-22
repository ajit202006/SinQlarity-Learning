import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
function App() {
  const [modalOpen,setModalOpen] =useState(true);
  const modalCloseHandler=()=>{setModalOpen(false);}
  const modalOpenHandler=()=>{setModalOpen(true);}
  return (
    <div>
      {modalOpen?<FirstComponent owner="Azhar" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop/>:null}
      <button onClick={modalOpenHandler}>Open</button>
      
    </div>
  );
}

export default App;
