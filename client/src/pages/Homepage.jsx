import React from "react";
import Overlay from "../components/Overlay";
import Valuelist from "../components/Valuelist";
import Footer from "../components/Footer";
import Tours from "../components/Tours";
import VideoPlayer from "./Tourdetails";

function Homepage() {
  return (
    <div>
      <Overlay />
      <Valuelist />
      <Tours />
      <VideoPlayer
        videoLink="https://raw.githubusercontent.com/Pierrinho/elephant/master/elephant.mp4"
        posterLink="https://raw.githubusercontent.com/Pierrinho/elephant/master/elephant.jpg"
      />
      <Footer />
    </div>
  );
}

export default Homepage;
