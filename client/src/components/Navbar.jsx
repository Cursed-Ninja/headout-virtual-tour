import React, { useState, useEffect } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Avatar } from "@mui/material";
import { useUserContext } from "../store/Context";

export default function Navbar({ isHomePage = true }) {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const { state } = useUserContext();
  const { user, isLoggedIn, isSeller } = state;

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
    <div className={`fixed top-0 left-0 w-full z-10`}>
      <div className={`p-4 flex justify-between items-center`}>
        <div
          className={`flex items-center space-x-2 ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <FlightTakeoffIcon className="text-2xl" />
          <h1
            className={`${isHomePage ? "text-xl" : "text-3xl"} font-semibold`}
          >
            headout
          </h1>
        </div>
        <div
          className={`flex items-center space-x-2 ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <h2 className="text-sm">English/INR</h2>
          <HelpOutlineIcon className="text-xl" />
          <h2 className="text-sm">Help</h2>
          {!isLoggedIn ? (
            <h2
              className={`text-sm border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:text-blue-500 ${
                isHomePage ? "text-white" : "text-black"
              }`}
            >
              Sign in
            </h2>
          ) : user?.firstName && user?.lastName ? (
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{user?.firstName[0]}{user?.lastName[0]}</Avatar>
          ) : (
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          )}
        </div>
      </div>
    </div>
  );
}
