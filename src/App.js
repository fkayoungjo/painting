import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';
import Playground from './Playground.js'

function App() {
  const [color, setColor] = useState(null);


  return (
    <div >
      <SketchPicker color={ color }
      onChangeComplete={ handleChangeComplete }/>
    </div>
  );
}

export default App;
