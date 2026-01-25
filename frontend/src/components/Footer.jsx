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
    <footer className="bg-slate-950 text-white relative">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">
                  Adelaide<span className="text-orange-400">ma</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-500">Driving School</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Your trusted local driving instructor in Southern Adelaide. Helping learners build confidence and achieve first-time passes since 2014. Fully accredited, patient approach, and flexible scheduling.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-xl hover:bg-orange-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-xl hover:bg-orange-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Sample Route', id: 'route' },
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Book Now', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-orange-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors break-all"
                >
                  <Mail className="w-5 h-5 text-orange-500" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Glenelg, Marion, Plympton & surrounds
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear > 2025 ? currentYear : 2026} Adelaide ma Driving. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-500">ABN: 12 345 678 901</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500">SA Accredited Instructor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
