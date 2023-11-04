import { Box, Button, Icon, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useParams } from "react-router";

const TourDetails = () => {
  const containerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [videoUrl, setVideoUrl] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      console.log(id);
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/media/one?id=${id}`
      );
      const data = await res.json();
      setVideoUrl(data.videos);
    })();
  }, []);

  const updateWindowDimensions = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    if (videoUrl === null) return;
    const scene = new THREE.Scene();
    const width = windowDimensions.width;
    const height = windowDimensions.height;
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const videoElement = document.createElement("video");
    videoElement.src = videoUrl;
    videoElement.loop = true;
    videoElement.muted = false;
    videoElement.playsInline = true;
    videoElement.crossOrigin = "anonymous";
    // videoElement.play();
    const videoPlay = () => {
      videoElement.play();
      setIsPlaying(true);
    };
    containerRef.current.addEventListener("click", videoPlay);

    const texture = new THREE.VideoTexture(videoElement);

    const material = new THREE.MeshBasicMaterial({ map: texture });
    material.side = THREE.BackSide;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.setAnimationLoop(() => renderer.render(scene, camera));

    const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
    const handleWheel = (e) => {
      camera.fov = clamp(camera.fov + e.deltaY / 10, 10, 120);
      camera.updateProjectionMatrix();
    };
    renderer.domElement.addEventListener("wheel", handleWheel);

    let mouseDown = false;
    const handleMouseDown = (e) => {
      if (e.button === 0) mouseDown = true;
    };
    renderer.domElement.addEventListener("mousedown", handleMouseDown);

    const handleMouseUp = (e) => {
      if (e.button === 0) mouseDown = false;
    };
    window.addEventListener("mouseup", handleMouseUp);

    let pitch = 0;
    let yaw = 0;
    const handleMouseMove = (e) => {
      if (!mouseDown) return;

      const { movementX, movementY } = e;
      const sensitivity = 0.01;

      yaw -= movementX * sensitivity;
      pitch += movementY * sensitivity;
      pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));

      const target = new THREE.Vector3(
        Math.cos(yaw) * Math.cos(pitch),
        Math.sin(pitch),
        Math.sin(yaw) * Math.cos(pitch)
      );

      camera.position.set(0, 0, 0);
      camera.lookAt(target);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const newWidth = windowDimensions.width;
      const newHeight = windowDimensions.height;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener("wheel", handleWheel);
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", videoPlay);
      renderer.dispose();
      videoElement.pause();
    };
  }, [videoUrl]);

  return (
    <div ref={containerRef} className="tourdetails">
      {isPlaying ? null : (
        <Box
          sx={{
            background: "black",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0%",
            left: "0%",
            opacity: "40%",
          }}
        >
          <Button
            sx={{
              zIndex: "10",
              background: "red",
              position: "absolute",
              top: "45%",
              left: "50%",
              color: "white",
            }}
          >
            <PlayCircleOutlineIcon />
          </Button>
        </Box>
      )}
    </div>
  );
};

export default TourDetails;
