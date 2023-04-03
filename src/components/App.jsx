import React, { useState } from "react";
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import About from "./About";
import "../index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState(0);

  function HandleMode() {
    setMode(!mode);
  }

  return (
    <>
    <Router>
      <div style={mode ? { height: "100vh", background: "black" } : {}}>
        <Navbar mode={mode} HandleMode={HandleMode} />
        <Routes>
          <Route exact path="/" element={<TextBox />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
