const initHero = (camera1, newScene, inputMap) => {
  BABYLON.SceneLoader.ImportMesh(
    "",
    "https://assets.babylonjs.com/meshes/",
    "HVGirl.glb",
    newScene,
    function (newMeshes, particleSystems, skeletons, animationGroups) {
      const hero1 = newMeshes[0];
      hero1.scaling.scaleInPlace(0.1);

      const headRef = new BABYLON.MeshBuilder.CreateBox(
        "crate",
        { size: 0.1 },
        newScene
      );
      headRef.setEnabled(false);
      headRef.position = new BABYLON.Vector3(-26, 2, -50);
      hero1.position = new BABYLON.Vector3(-26, 0, -50);

      camera1.target = headRef;

      let hero1Speed = 0.05;
      let hero1SpeedBackwards = 0.01;
      let hero1RotationSpeed = 0.1;

      let headDiam = 0.1;
      let bodyDiam = 0.01;
      let extra = 0.25;
      hero1.ellipsoid = new BABYLON.Vector3(
        0.5 * bodyDiam,
        0.5 * (headDiam + bodyDiam),
        0.5 * bodyDiam
      );
      hero1.ellipsoid.addInPlace(new BABYLON.Vector3(extra, extra, extra));
      let offsetY = 0.5 * (headDiam + bodyDiam) - hero1.position.y;
      hero1.ellipsoidOffset = new BABYLON.Vector3(0, offsetY, 0);

      let animating = true;

      let walkAnim = newScene.getAnimationGroupByName("Walking");
      let walkBackAnim = newScene.getAnimationGroupByName("WalkingBack");
      let idleAnim = newScene.getAnimationGroupByName("Idle");
      let sambaAnim = newScene.getAnimationGroupByName("Samba");

      newScene.onBeforeRenderObservable.add(() => {
        let keydown = false;
        if (inputMap["w"]) {
          hero1.moveWithCollisions(
            hero1.forward.scaleInPlace(hero1Speed)
          );
          headRef.moveWithCollisions(
            headRef.forward.scaleInPlace(hero1Speed)
          );
          keydown = true;
        }
        if (inputMap["s"]) {
          hero1.moveWithCollisions(
            hero1.forward.scaleInPlace(-hero1SpeedBackwards)
          );
          headRef.moveWithCollisions(
            headRef.forward.scaleInPlace(-hero1SpeedBackwards)
          );
          keydown = true;
        }
        if (inputMap["a"]) {
          hero1.rotate(BABYLON.Vector3.Up(), -hero1RotationSpeed);
          headRef.rotate(BABYLON.Vector3.Up(), -hero1RotationSpeed);
          keydown = true;
        }
        if (inputMap["d"]) {
          hero1.rotate(BABYLON.Vector3.Up(), hero1RotationSpeed);
          headRef.rotate(BABYLON.Vector3.Up(), hero1RotationSpeed);
          keydown = true;
        }
        if (inputMap["b"]) {
          keydown = true;
        }

        if (keydown) {
          if (!animating) {
            animating = true;
            if (inputMap["s"]) {
              walkBackAnim.start(
                true,
                1.0,
                walkBackAnim.from,
                walkBackAnim.to,
                false
              );
            } else if (inputMap["b"]) {
              sambaAnim.start(true, 1.0, sambaAnim.from, sambaAnim.to, false);
            } else {
              walkAnim.start(true, 1.0, walkAnim.from, walkAnim.to, false);
            }
          }
        } else {
          if (animating) {
            idleAnim.start(true, 1.0, idleAnim.from, idleAnim.to, false);
            sambaAnim.stop();
            walkAnim.stop();
            walkBackAnim.stop();
            animating = false;
          }
        }
      });
    }
  );
};

export { initHero };
