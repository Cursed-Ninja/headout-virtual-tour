import React from "react";

const Background = () => {
  return (
    <div className="relative h-[500px]">
      <video
        autoPlay
        loop
        muted
        className="background-video object-cover w-full h-full"
      >
        <source src="waterfall.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
