import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Footer() {
  return (
    <div>
      <section className="bg-white text-gray-900 py-8 border-t-2 mt-10">
        <div className="container mx-auto flex flex-wrap justify-evenly items-start">
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-4 text-left">
            <div className="flex gap-2">
              <FlightTakeoffIcon style={{ color: "#7B1FA2", fontSize: 40 }} />
              <h6 className="text-2xl text-purple-700 font-semibold mb-4">
                <b>Headout</b>
              </h6>
            </div>
            <p className="text-left my-2">
              Headout is building the future of how we experience our cities.
            </p>
            <p className="text-left my-2 mt-5">Made with ❤️ all over the 🌎</p>
            <h3 className="text-sm text-left my-2 mt-10">Headout Inc.</h3>
            <h3 className="text-sm text-left my-2">
              82 Nassau St #60351 New York, NY 10038
            </h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-4">
            <h6 className="text-xl font-semibold mb-4">Cities</h6>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                New York
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Las Vegas
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Rome
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Paris
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                London
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Dubai
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Barcelona
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                +125 more
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-4">
            <h6 className="text-xl font-semibold mb-4">Headout</h6>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                About Us
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Help
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Careers
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Travel Blog
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Company Blog
              </a>
            </p>
            <p className="my-2">
              <a href="#!" className="text-gray-600 hover:text-gray-800">
                Creator Partnerships
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
