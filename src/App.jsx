// src/App.js
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Innovation from "./component/Innovation";

function App() {
  return (
    <ParallaxProvider>
      <div className="font-sans bg-gray-50 relative overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Innovation />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
