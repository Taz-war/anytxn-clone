// src/components/Hero.js
import React from "react";
import { Parallax } from "react-scroll-parallax";
import WaveLinesDesktop from "../assets/WaveLinesDesktop1.svg";
import MobileWaveLines from "../assets/ctaMobileWaveLines.svg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Embrace the <br />
            future of finance
          </h1>
          <p className="mt-4 text-lg">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-lg transition-transform transform hover:-translate-y-1">
            Reach Out to Us
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative z-20">
          <img
            src="https://via.placeholder.com/500x500" // Replace with actual image
            alt="Finance Professional"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Parallax Foreground Elements */}
      <Parallax speed={-20}>
        <img
          src={WaveLinesDesktop}
          alt="Wave Lines Desktop"
          className="absolute top-10 left-0 w-full h-auto opacity-60 z-30 pointer-events-none"
        />
      </Parallax>

      <Parallax speed={15}>
        <img
          src={MobileWaveLines}
          alt="Mobile Wave Lines"
          className="absolute bottom-0 right-0 w-1/2 h-auto opacity-80 z-30 pointer-events-none"
        />
      </Parallax>
    </section>
  );
};

export default Hero;
