import React from 'react';
import { Button } from './ui/button';
import { ChevronDown, MapPin, Shield, Clock, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { siteInfo, stats } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">Rated 4.9/5 by 500+ students</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Learn to Drive with
              <span className="text-sky-400"> Confidence</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
              Adelaide's trusted driving school in Glenelg, Marion & Plympton. 
              Join 500+ successful students who passed their test first time with our expert instruction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="group bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-base font-semibold"
              >
                Book Your First Lesson
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('pricing')}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-base font-semibold"
              >
                View Pricing
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">95% First-Time Pass Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">Pick-up Included</span>
              </div>
            </div>
          </div>

          {/* Right column - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Why Students Choose Us</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-sky-600 mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-slate-800">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-6 bg-sky-500 hover:bg-sky-600 text-white py-5 font-semibold"
              >
                Start Learning Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
