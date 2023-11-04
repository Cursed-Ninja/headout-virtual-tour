const createCollisionBox = ({x, y, z, size, newScene, isVisible = true}) => {
  let box = new BABYLON.MeshBuilder.CreateBox(
    "crate",
    { size: size },
    newScene
  );
  box.checkCollisions = true;
  box.position = new BABYLON.Vector3(x, y, z);
  box.setEnabled = false;
};

const renderMesh = ({x, y, z, scale, folder, file, newScene}) => {
    BABYLON.SceneLoader.ImportMesh(
        "",
        `${folder}`,
        `${file}`,
        newScene,
        function (newMeshes, particleSystems, skeletons, animationGroups) {
            console.log(folder, file)
          const mesh = newMeshes[0];
          mesh.position = new BABYLON.Vector3(x, y, z);
          mesh.scaling.scaleInPlace(scale);
        }
    );
}

export { createCollisionBox, renderMesh };
