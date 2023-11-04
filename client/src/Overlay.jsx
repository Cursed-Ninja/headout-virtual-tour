import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Background from "./Background"; // Import your Background component
import Navbar from "./Navbar";

export default function Overlay() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <div className="text-white text-2xl">
          <b>The world's best experiences curated just for you</b>
        </div>
        <div className="relative mt-4 flex">
          <input
            type="text"
            className="border-2 bg-white text-black placeholder-black py-2 pl-10 pr-4 rounded-lg w-1/4 "
            placeholder="Search for experiences and cities"
          />
          <SearchIcon className="absolute left-3 top-3" />
        </div>
      </div>
    </div>
  );
}
