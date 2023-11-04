import React from "react";
import { useNavigate } from "react-router-dom";

export default function Tour({ id, title, location, thumbnail }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/tour/${id}`)} className="cursor-pointer w-[250px]">
      <img
        src={thumbnail}
        alt="card-1"
        className="aspect-video object-cover object-center w-[250px] top-[521px] left-[37px] radius-[9px] rounded"
      />
      <div className="flex flex-col">
        <h1 className="text-lg break-words">
          <b>{title}</b>
        </h1>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
}
