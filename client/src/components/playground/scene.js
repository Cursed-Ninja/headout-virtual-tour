import { createCollisionBox, renderMesh } from "./utility";
import { initHero } from "./hero";
import { meshes } from "./meshes";
import { collisionBoxes, isVisible } from "./collisionBoxes";

export const createScene = (engine, canvasRef) => {
  engine.enableOfflineSupport = false;
  const newScene = new BABYLON.Scene(engine);

  const camera1 = new BABYLON.ArcRotateCamera(
    "camera1",
    0,
    0,
    2.5,
    new BABYLON.Vector3(0, 0, 0),
    newScene
  );
  newScene.activeCamera = camera1;
  newScene.activeCamera.attachControl(canvasRef.current, true);
  camera1.lowerRadiusLimit = 2.5;
  camera1.upperRadiusLimit = 2.5;
  camera1.wheelDeltaPercentage = 0.01;

  // Lights
  let light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    newScene
  );
  light.intensity = 0.6;
  light.specular = BABYLON.Color3.Black();

//   let light2 = new BABYLON.DirectionalLight(
//     "dir01",
//     new BABYLON.Vector3(0, -0.5, -1.0),
//     newScene
//   );
//   light2.position = new BABYLON.Vector3(0, 5, 5);

  // Skybox
  let skybox = BABYLON.MeshBuilder.CreateBox(
    "skyBox",
    { size: 1000.0 },
    newScene
  );
  let skyboxMaterial = new BABYLON.StandardMaterial("skyBox", newScene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
    "https://assets.babylonjs.com/skyboxes/skybox2/skybox2",
    newScene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = BABYLON.Color3.Black();
  skyboxMaterial.specularColor = BABYLON.Color3.Black();
  skybox.material = skyboxMaterial;

  // Keyboard events
  let inputMap = {};
  newScene.actionManager = new BABYLON.ActionManager(newScene);
  newScene.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnKeyDownTrigger,
      function (evt) {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
      }
    )
  );
  newScene.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnKeyUpTrigger,
      function (evt) {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
      }
    )
  );

//   createCollisionBox(0, 1, 10, 2, newScene);
  for(const collisonBox of collisionBoxes) {
    createCollisionBox({ ...collisonBox, newScene, isVisible})
  }
  for(const mesh of meshes) {
    renderMesh({ ...mesh, newScene})
  }
  initHero(camera1, newScene, inputMap);

  return newScene;
};
