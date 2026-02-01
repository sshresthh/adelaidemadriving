"use client";

import { Button } from './ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { stats } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-stone-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-stone-900/90 to-orange-950/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400 fill-orange-400" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">500+ Happy Students</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Learn to Drive
              <br />
              <span className="text-orange-400">With Confidence</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-stone-300 mb-10 leading-relaxed max-w-lg">
              Adelaide's most trusted driving school in Southern Adelaide. 
              Expert instruction in Glenelg, Marion & Plympton with a 95% first-time pass rate.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all"
              >
                Book Your First Lesson
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('pricing')}
                variant="outline"
                size="lg"
                className="border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm rounded-full transition-all"
              >
                View Pricing
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: '✓', label: '95% Pass Rate', sublabel: 'First attempt' },
                { icon: '✓', label: '10+ Years', sublabel: 'Experience' },
                { icon: '✓', label: 'Pick-up', sublabel: 'Included' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.label}</div>
                    <div className="text-stone-400 text-xs">{item.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-stone-800">Why Students Choose Us</h3>
                <p className="text-stone-500 text-sm mt-1">Numbers that speak for themselves</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-5 bg-orange-50 rounded-2xl border border-orange-100">
                    <div className="text-3xl font-extrabold text-orange-500 mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-stone-800">{stat.label}</div>
                    <div className="text-xs text-stone-500 mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-6 bg-stone-900 hover:bg-stone-800 text-white py-5 font-semibold rounded-xl"
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
