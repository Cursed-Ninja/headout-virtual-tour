import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import PaidIcon from "@mui/icons-material/Paid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoodIcon from "@mui/icons-material/Mood";

const Values = [
  {
    id: 1,
    icon: <DiamondIcon />,
    heading: "Only the finest",
    para: "At Headout, you only find the best. We do the hard work so you don't have to.",
  },
  {
    id: 2,
    icon: <PaidIcon />,
    heading: "Greed is good",
    para: "With quality, you also get lowest prices, last-minute availability and 24x7 support.",
  },
  {
    id: 3,
    icon: <FavoriteIcon />,
    heading: "Experience every flavour",
    para: "Offbeat or mainstream, a tour or a show, a game or a museum - we have ‘em all.",
  },
  {
    id: 4,
    icon: <MoodIcon />,
    heading: "No pain,only gain",
    para: "Didn’t love it? We’ll give you your money back. Not cocky, just confident.",
  },
];

export default Values;
