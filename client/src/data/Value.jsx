import React from "react";

export default function Value(props) {
  return (
    <div>
      {props.icon}
      <h1>
        <b>{props.heading}</b>
      </h1>
      <p className="w-[200px] text-left">{props.para}</p>
    </div>
  );
}
