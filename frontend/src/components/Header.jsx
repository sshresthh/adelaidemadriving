import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Car, Phone } from 'lucide-react';
import { siteInfo } from '../data/mock';

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
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="p-2 bg-sky-500 rounded-lg">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800 leading-tight">
                Adelaide ma Driving
              </span>
              <span className="text-xs text-sky-600 font-medium -mt-0.5">School</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600"
            >
              <Phone className="w-4 h-4" />
              <span>{siteInfo.phone}</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 text-sm font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 text-slate-700 hover:bg-white rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-slate-200 my-2" />
              <a 
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-white rounded-lg font-medium"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>{siteInfo.phone}</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mt-2 bg-sky-500 hover:bg-sky-600 text-white"
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
