"use client";

import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black/50">
      <div className="text-center px-4 sm:px-6 max-w-3xl mx-auto pt-16">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/15">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-amber-400 fill-amber-400"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">
            4.9 Rating · 200+ Reviews
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
          5000+ Students
          <br />
          <span className="text-primary">Taught & Counting</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
          Adelaide&apos;s most trusted driving school in Southern Adelaide.
          Expert instruction with a 95% first-time pass rate.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-10">
          <Button
            onClick={() => scrollToSection("pricing")}
            size="lg"
            className="group bg-primary hover:bg-[#ec5f43] text-white px-8 py-6 text-base font-semibold rounded-full shadow-[0_20px_40px_-15px_rgba(242,107,79,0.5)]"
          >
            View Pricing
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          {["95% Pass Rate", "15+ Years Experience", "Pick-up Included"].map(
            (label, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
              >
                <svg
                  className="w-4 h-4 text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-white/90 text-sm font-medium">
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white/50 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
