import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
const App = () => {
  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      backgroundColor: 'pink'
    })
  )
  return (
    <div>
      <h1>Candy Creator</h1>
      <div class="container bg-primary">
        <div class="row ">
          <div class="col">
            <canvas id="canvas" height={'100%'} width={'100%'} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
