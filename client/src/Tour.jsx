import React from "react";

export default function Tour(props) {
  return (
    <div className="mx-5">
      <img
        src={props.img}
        alt="card-1"
        className="w-[176px] h-[235px] top-[521px] left-[37px] radius-[9px]"
      />
      <div className="flex flex-col">
        <h1 className="text-lg">
          <b>{props.heading}</b>
        </h1>
        <p>{props.country}</p>
      </div>
    </div>
  );
}
