"use client";

import Header from "@/components/Header";
import PhotoBackground from "@/components/PhotoBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PhotoBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}
