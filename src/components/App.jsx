import React, {useState} from "react"
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import "../index.css";

function App() {

  const [mode,setMode] = useState(0)

  function HandleMode(){
    setMode(!mode);
  }

  return (

    
    <div style={mode ? {height:"100vh", background:"black"} : {}}>
      <Navbar mode={mode} HandleMode={HandleMode} />
      <TextBox mode={mode} />
    </div>
  );
}

export default App;
