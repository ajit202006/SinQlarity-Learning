import { useRef, useState } from 'react';
import Box from './components/Box';
import Button from './components/Button';
function App() {
  const text = useRef();
  const [value, setValue] = useState("");
  const [addDisabled, setAddDisabled] = useState(false);
  const [delDisabled, setDeleteDisabled] = useState(true);
  const [isRed, checkRed] = useState(true);
  const [isGreen, checkGreen] = useState(false);
  const [isYellow, checkYellow] = useState(false);
  const [isBlue, checkBlue] = useState(false);
  // Adding an element
  function addEvent() {
    setValue(text.current.value);
    setAddDisabled(true);
    setDeleteDisabled(false);
  }
  // Deleting an element
  function deleteEvent() {
    setValue("");
    setFalse(1);
    setAddDisabled(false);
    setDeleteDisabled(true);
  }
  function setFalse(a=0,b=0,c=0,d=0){
    checkRed(a);
    checkGreen(b);
    checkYellow(c);
    checkBlue(d);
  }
  function moveToRed() {
    setFalse(1);
  }
  function moveToGreen() {
    setFalse(0,1);
  }
  function moveToYellow() {
    setFalse(0,0,1);
  }
  function moveToBlue() {
    setFalse(0,0,0,1);
  }


  return (
    <div className="main">
      <Box id="box1" value={value} check={isRed} />
      <Box id="box2" value={value} check={isGreen} />
      <Box id="box3" value={value} check={isYellow} />
      <Box id="box4" value={value} check={isBlue} />
      <input type="text" className="btn" id="element" ref={text} />
      <div className='control'>
        <Button id="add" innerHTML="Add Element" onClick={addEvent} disabled={addDisabled}/>
        <Button id="del" innerHTML="Delete Element" onClick={deleteEvent} disabled={delDisabled}/>
        <Button id="toRed" innerHTML="Move to RED" onClick={moveToRed} disabled={delDisabled}/>
        <Button id="toGreen" innerHTML="Move to GREEN" onClick={moveToGreen} disabled={delDisabled}/>
        <Button id="toYellow" innerHTML="Move to YELLOW" onClick={moveToYellow} disabled={delDisabled}/>
        <Button id="toBlue" innerHTML="Move to BLUE" onClick={moveToBlue} disabled={delDisabled}/>
      </div>
    </div>
  );
}

export default App;