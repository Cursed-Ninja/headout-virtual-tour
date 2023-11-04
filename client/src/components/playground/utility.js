const createCollisionBox = ({x, y, z, size, newScene, isVisible = true}) => {
  let box = new BABYLON.MeshBuilder.CreateBox(
    "crate",
    { size: size },
    newScene
  );
  box.checkCollisions = true;
  box.position = new BABYLON.Vector3(x, y, z);
  if (!isVisible) {
    const material = new BABYLON.StandardMaterial("transparentMaterial", newScene);
    material.alpha = 0.0;
    box.material = material;
  }
};

const renderMesh = ({x, y, z, scale, folder, file, newScene}) => {
    BABYLON.SceneLoader.ImportMesh(
        "",
        `${folder}`,
        `${file}`,
        newScene,
        function (newMeshes, particleSystems, skeletons, animationGroups) {
          const mesh = newMeshes[0];
          mesh.position = new BABYLON.Vector3(x, y, z);
          mesh.scaling.scaleInPlace(scale);
          mesh.checkCollisions = true;
        }
    );
}

export { createCollisionBox, renderMesh };
