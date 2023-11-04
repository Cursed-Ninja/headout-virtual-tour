import React, { useEffect, useRef } from "react";
import { createScene } from "../components/playground/scene";

const BabylonJSScene = () => {
  const canvasRef = useRef(null);
  let engine = null;
  let scene = null;
  let sceneToRender = null;

  useEffect(() => {
    const asyncEngineCreation = async () => {
      try {
        return createDefaultEngine();
      } catch (e) {
        console.log(
          "The available createEngine function failed. Creating the default engine instead."
        );
        return createDefaultEngine();
      }
    };

    const startRenderLoop = (engine, canvas) => {
      engine.runRenderLoop(() => {
        if (sceneToRender && sceneToRender.activeCamera) {
          sceneToRender.render();
        }
      });
    };

    const createDefaultEngine = () => {
      return new BABYLON.Engine(canvasRef.current, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false,
      });
    };

    asyncEngineCreation().then(async (createdEngine) => {
      engine = createdEngine;

      if (!engine) throw "Engine should not be null.";
      startRenderLoop(engine, canvasRef.current);
      scene = createScene(engine, canvasRef);
      sceneToRender = scene;
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      if (scene) {
        scene.dispose();
      }
      if (engine) {
        engine.dispose();
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <canvas
        id="renderCanvas"
        ref={canvasRef}
        style={{ width: "100%", height: "100%", touchAction: "none" }}
      ></canvas>
    </div>
  );
};

export default BabylonJSScene;
