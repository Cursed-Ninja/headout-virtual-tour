import React from "react";
import Tour from "./Tour";

export default function Tours() {
  return (
    <div className="container mx-[90px]">
      <h1 className="my-10 text-3xl">
        <b>Explore Our Virtual Tours</b>
      </h1>
      <div className="flex flex-row">
        <Tour
          img="TajMahal.jpg"
          heading="Virtual Tour of Taj Mahal"
          country="India"
        />
      </div>
    </div>
  );
}
