import React, { useState, useEffect } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-transparent z-10 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className={`p-4 flex justify-between items-center`}>
        <div className={`flex items-center space-x-2 text-white`}>
          <FlightTakeoffIcon className="text-2xl" />
          <h1 className="text-xl font-semibold">headout</h1>
        </div>
        <div className={`flex items-center space-x-2 text-white`}>
          <h2 className="text-sm">English/INR</h2>
          <HelpOutlineIcon className="text-xl" />
          <h2 className="text-sm">Help</h2>
          <h2 className="text-sm border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:text-blue-500">
            Sign in
          </h2>
        </div>
      </div>
    </div>
  );
}
