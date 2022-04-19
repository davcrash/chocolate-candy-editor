import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { Navbar, Container } from "react-bootstrap";
import { CanvasContext } from "./CanvasContext";
import Steper from "./components/Steper";

const App = () => {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    //TODO: create responsive design
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      backgroundColor: "#a98360",
      height: 600,
      width: 600,
    });

  return (
    <CanvasContext.Provider value={canvas}>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chocolate Candy Creator</Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <div className="container-fluid">
          <div className="row" style={{ minHeight: "calc(100vh - 56px)" }}>
            <div className="col d-flex justify-content-center align-items-center">
              <canvas id="canvas" style={{ borderRadius: "0.7rem" }} />
            </div>
            <div className="col-4 bg-light">
              <Steper />
            </div>
          </div>
        </div>
      </div>
    </CanvasContext.Provider>
  );
};

export default App;
