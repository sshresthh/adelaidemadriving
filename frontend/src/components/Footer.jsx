import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, ChevronUp } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-white">
      {/* Back to top */}
      <div className="flex justify-center -mt-5">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-[#D97756] rounded-full shadow-lg flex items-center justify-center hover:bg-[#C4684A] transition-colors"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-stone-800 rounded-lg">
                <Car className="w-5 h-5 text-[#D97756]" />
              </div>
              <span className="text-lg font-bold">
                Adelaide<span className="text-[#D97756]">ma</span> Driving
              </span>
            </div>
            <p className="text-stone-400 mb-6 max-w-sm text-sm leading-relaxed">
              Your trusted local driving instructor in Southern Adelaide. Helping learners build confidence and achieve first-time passes since 2014.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="p-2 bg-stone-800 rounded-lg hover:bg-[#D97756] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-stone-800 rounded-lg hover:bg-[#D97756] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Book Now', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-stone-400 hover:text-[#D97756] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-stone-400 hover:text-[#D97756] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#D97756]" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-stone-400 hover:text-[#D97756] transition-colors text-sm break-all"
                >
                  <Mail className="w-4 h-4 text-[#D97756]" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-stone-400 text-sm">
                  <MapPin className="w-4 h-4 text-[#D97756] mt-0.5" />
                  <span>Glenelg, Marion, Plympton</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {currentYear > 2025 ? currentYear : 2026} Adelaide ma Driving. All rights reserved.
            </p>
            <p className="text-stone-600 text-sm">
              SA Accredited Instructor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
