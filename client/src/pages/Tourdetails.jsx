import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function TourDetails(props) {
  // const { videoLink, posterLink } = props;
  // var options = {
  //   plugins: {
  //     panorama: {
  //       clickAndDrag: true,
  //       clickToToggle: true,
  //       autoMobileOrientation: true,
  //       backToVerticalCenter: false,
  //       backToHorizonCenter: false
  //     }
  //   }
  // };
  // var player = videojs('player', options, function() {
  // });

  return <></>;

  return (
    <div className="player-wrapper">
      <video
        id="player"
        className="player video-js vjs-default-skin vjs-big-play-centered"
        crossorigin="anonymous"
        preload="metadata"
        autoplay
        controls
      >
        <source poster={posterLink} src={videoLink} />
      </video>
    </div>
  );
}
