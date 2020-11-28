import React, { useState, useEffect, useRef } from "react";
import { SketchPicker } from 'react-color';


function App() {
  const [color, setColor] = useState('#000000');
  const [lineSize, setLineSize] = useState(7);
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  function handleChangeComplete(color)  {
    setColor(color.hex)
  };

  function handleLineSize(event) {
    setLineSize(event.target.value);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2,2)
    context.lineCap = "round"
    contextRef.current = context;
  }, [] )

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.strokeStyle = color
  }, [color] )

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.lineWidth = lineSize
  }, [lineSize] )

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
   contextRef.current.closePath()
   setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }else {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
  }



  return (
    <div >
      <SketchPicker color={ color }
      onChangeComplete={ handleChangeComplete }/>
      <label>
         <input
           id="typeinp"
           type="range"
           min="0" max="20"
           value={lineSize}
           onChange={handleLineSize}
           step="1"/>
         {lineSize}
       </label>
      <canvas

        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
