import React, { useState, useEffect } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useUserContext } from "../store/Context";

export default function Navbar({ isHomePage = true }) {
  const navigate = useNavigate();
  const { state } = useUserContext();
  const { user, isLoggedIn } = state;

  return (
    <div className={`absolute top-0 left-0 w-full z-10`}>
      <div className={`p-4 flex justify-between items-center`}>
        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            isHomePage ? "text-white" : "text-black"
          }`}
          onClick={() => navigate("/")}
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
          <Link to="/playground" className="hover:underline text-lg mx-2">
            Playground
          </Link>
          <Link to="/upload" className="hover:underline text-lg mx-2">
            Upload
          </Link>
          {!isLoggedIn ? (
            <h2
              className={`text-sm border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:text-blue-500 ${
                isHomePage ? "text-white" : "text-black"
              }`}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign in
            </h2>
          ) : user?.firstName && user?.lastName ? (
            <Avatar sx={{ bgcolor: "#8000FF" }}>
              {user?.firstName[0]}
              {user?.lastName[0]}
            </Avatar>
          ) : (
            <Avatar sx={{ bgcolor: "#8000FF" }}>OP</Avatar>
          )}
        </div>
      </div>
    </div>
  );
}
