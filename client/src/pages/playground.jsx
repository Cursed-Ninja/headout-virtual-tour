import React, { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";

const BabylonScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    var engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      disableWebGL2Support: false,
    });

    var scene = new BABYLON.Scene(engine);

    // Rest of your Babylon.js scene setup code here...

    engine.runRenderLoop(function () {
      if (scene && scene.activeCamera) {
        scene.render();
      }
    });

    window.addEventListener("resize", function () {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <div id="canvasZone">
      <canvas ref={canvasRef} id="renderCanvas"></canvas>
    </div>
  );
};

export default BabylonScene;
