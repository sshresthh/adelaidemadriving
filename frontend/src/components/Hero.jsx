import React from 'react';
import { Button } from './ui/button';
import { ChevronDown, MapPin, Award, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-euj2ec05cc2c?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-teal-900/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8 border border-white/20">
            <MapPin className="w-4 h-4 text-teal-400" />
            <span>Glenelg & Southern Adelaide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ace Your Driving Test{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              in Adelaide!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert driving lessons & test preparation near Glenelg.
            <br className="hidden sm:block" />
            Book now for your path to driving success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Lesson
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              Test Preparation
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-white/70">
              <Award className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium">Accredited Instructor</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium">Local Expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
