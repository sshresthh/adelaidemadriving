import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Car, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Route', id: 'route' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className={`relative p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <Car className="w-6 h-6 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Adelaide<span className="text-orange-500">ma</span>
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${
                isScrolled ? 'text-slate-400' : 'text-white/60'
              }`}>
                Driving School
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-orange-600 hover:bg-orange-50' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:0412345678" 
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isScrolled 
                  ? 'text-slate-600 hover:text-orange-600' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>0412 345 678</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2.5 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 border-0"
            >
              Book Lesson
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl p-4 border border-slate-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-slate-100 my-2" />
              <a 
                href="tel:0412345678" 
                className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>0412 345 678</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mt-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
              >
                Book Your Lesson
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
