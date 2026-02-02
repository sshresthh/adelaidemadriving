"use client";

import { useState, useEffect } from 'react';
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks: Array<{ label: string; id: string }> = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-[0_16px_40px_-28px_rgba(242,107,79,0.5)] py-3'
          : 'bg-transparent py-5'
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
              isScrolled ? 'bg-primary' : 'bg-white/70 backdrop-blur-sm ring-1 ring-primary/20'
            }`}>
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
                <path d="M16.24 7.76l1.42-1.42"/>
                <path d="M18 12h2"/>
              </svg>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-tight transition-colors duration-300 font-display ${
                isScrolled ? 'text-foreground' : 'text-foreground'
              }`}>
                Adelaide ma Driving
              </span>
              <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary'
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
                    ? 'text-foreground/70 hover:text-primary hover:bg-primary/10' 
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
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
                isScrolled ? 'text-foreground/70 hover:text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <div className={`p-1.5 rounded-full ${
                isScrolled ? 'bg-primary/10' : 'bg-primary/10'
              }`}>
                <Phone className={`w-3.5 h-3.5 ${isScrolled ? 'text-primary' : 'text-primary'}`} />
              </div>
              <span>{siteInfo.phone}</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-[#ec5f43] text-white px-6 py-2.5 text-sm font-semibold rounded-full shadow-[0_16px_30px_-18px_rgba(242,107,79,0.6)] hover:shadow-[0_18px_36px_-18px_rgba(242,107,79,0.7)] hover:-translate-y-0.5 transition-all"
            >
              Book Lesson
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              isScrolled ? 'text-foreground hover:bg-secondary' : 'text-foreground hover:bg-secondary'
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
          <div className="bg-white rounded-2xl shadow-xl p-5 border border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 text-foreground hover:bg-secondary hover:text-primary rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-border my-3" />
              <a 
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary rounded-xl font-medium"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>{siteInfo.phone}</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="mt-3 bg-primary hover:bg-[#ec5f43] text-white rounded-xl py-3 font-semibold"
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
