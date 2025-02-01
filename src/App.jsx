// src/App.js
import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Footer from "./component/Footer";

function App() {
  return (
    <ParallaxProvider>
      <div className="font-sans">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
