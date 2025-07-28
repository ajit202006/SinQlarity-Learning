import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Game from "./pages/Game";


export default function App() {
  const [gridLength, setGridLength] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu setGridLength={setGridLength}/>}/>
        <Route path="/game" element={<Game n={gridLength} />}/>
      </Routes>
    </>
  );
}