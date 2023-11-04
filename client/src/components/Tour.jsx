import React from "react";

export default function Tour({ title, location, thumbnail }) {
  return (
    <div>
      <img
        src={thumbnail}
        alt="card-1"
        className="aspect-video object-cover object-top h-[150px] top-[521px] left-[37px] radius-[9px] rounded"
      />
      <div className="flex flex-col">
        <h1 className="text-lg">
          <b>{title}</b>
        </h1>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
}
