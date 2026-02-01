import React from 'react';
import { Button } from './ui/button';
import { ChevronDown, MapPin, Shield, Clock, ArrowRight, Star } from 'lucide-react';

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
      className="relative min-h-screen flex items-center overflow-hidden bg-stone-900"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D97756] text-[#D97756]" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">Rated 5/5 by 500+ students</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your License.
            <br />
            <span className="text-[#D97756]">First Time.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            Expert driving instruction in Glenelg, Marion & Plympton. 
            Join 500+ successful students who passed on their first attempt.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="group bg-[#D97756] hover:bg-[#C4684A] text-white px-8 py-6 text-base font-semibold border-0"
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
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Shield className="w-5 h-5 text-[#D97756]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">95% Pass Rate</div>
                <div className="text-white/50 text-xs">First attempt</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#D97756]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Southern Adelaide</div>
                <div className="text-white/50 text-xs">Local expertise</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#D97756]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">7 Days a Week</div>
                <div className="text-white/50 text-xs">Flexible times</div>
              </div>
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
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
