import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-teal-600 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Adelaide<span className="text-teal-400">ma</span> Driving
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Your trusted local driving instructor in Southern Adelaide. Helping learners build confidence and pass their driving tests since 2014.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-teal-500" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors break-all"
                >
                  <Mail className="w-5 h-5 text-teal-500" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Serving Glenelg, Brighton, Marion & surrounds
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear > 2025 ? currentYear : 2026} Adelaide ma Driving. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Proudly serving Southern Adelaide learners
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
