// src/components/Hero.js
import React from "react";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white relative overflow-hidden">
      <Parallax speed={-20}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-center">
          Seamless Transactions, Anytime
        </h1>
      </Parallax>
      <Parallax speed={10}>
        <p className="text-xl md:text-2xl mt-4 text-center">
          Fast, secure, and reliable financial solutions.
        </p>
      </Parallax>
    </section>
  );
};

export default Hero;
