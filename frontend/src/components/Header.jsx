import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-orange-900/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            {/* Custom Logo Icon */}
            <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-orange-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
                <path d="M16.24 7.76l1.42-1.42"/>
                <path d="M18 12h2"/>
              </svg>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-stone-800' : 'text-white'
              }`}>
                Adelaide ma Driving
              </span>
              <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-orange-500' : 'text-orange-300'
              }`}>
                DRIVING SCHOOL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-600 hover:text-orange-600 hover:bg-orange-50' 
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
              href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
              className={`flex items-center gap-2 text-sm font-medium transition-all ${
                isScrolled ? 'text-stone-600 hover:text-orange-600' : 'text-white/80 hover:text-white'
              }`}
            >
              <div className={`p-1.5 rounded-full ${
                isScrolled ? 'bg-orange-100' : 'bg-white/20'
              }`}>
                <Phone className={`w-3.5 h-3.5 ${isScrolled ? 'text-orange-600' : 'text-white'}`} />
              </div>
              <span>{siteInfo.phone}</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
            >
              Book Lesson
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              isScrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-5 border border-orange-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 text-stone-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-orange-100 my-3" />
              <a 
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 text-stone-700 hover:bg-orange-50 rounded-xl font-medium"
              >
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <span>{siteInfo.phone}</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mt-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-semibold"
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
