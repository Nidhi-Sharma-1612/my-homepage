import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Metrics from "./components/Metrics";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" min-h-screen">
      <Header />
      <HeroSection />
      <Metrics />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
