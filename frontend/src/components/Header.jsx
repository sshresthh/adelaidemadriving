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
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-stone-900' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}>
                Adelaide<span className="text-[#D97756]">ma</span> Driving
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:0412345678" 
              className={`flex items-center gap-2 text-sm font-medium transition-all ${
                isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>0412 345 678</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D97756] hover:bg-[#C4684A] text-white px-5 py-2 text-sm font-medium border-0"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-xl shadow-lg p-4 border border-stone-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-stone-100 my-2" />
              <a 
                href="tel:0412345678" 
                className="flex items-center gap-2 px-4 py-3 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>0412 345 678</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mt-2 bg-[#D97756] hover:bg-[#C4684A] text-white"
              >
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
