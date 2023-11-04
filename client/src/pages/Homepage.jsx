import React from "react";
import Overlay from "../components/Overlay";
import Valuelist from "../components/Valuelist";
import Footer from "../components/Footer";
import Tours from "../components/Tours";

function Homepage() {
  return (
    <div>
      <Overlay />
      <Valuelist />
      <Tours />
      <Footer />
    </div>
  );
}

export default Homepage;
