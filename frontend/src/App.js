import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import DrivingRouteMap from "./components/DrivingRouteMap";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Subtle noise texture overlay */}
      <div className="noise-texture" />
      
      <Header />
      <main>
        <Hero />
        <About />
        <DrivingRouteMap />
        <Services />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
