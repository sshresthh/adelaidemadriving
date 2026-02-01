import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, ChevronUp, Clock, ExternalLink } from 'lucide-react';
import { siteInfo, serviceAreas } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900">
      {/* Back to top button */}
      <div className="flex justify-center -mt-5">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-sky-500 rounded-full shadow-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-sky-500 rounded-lg">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Adelaide ma Driving</span>
                <span className="block text-xs text-sky-400">School</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {siteInfo.tagline}. Trusted by 500+ students in Southern Adelaide since {siteInfo.established}.
            </p>
            <div className="flex gap-2">
              <a
                href={siteInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-sky-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-sky-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteInfo.socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-sky-500 transition-colors"
                aria-label="Google Reviews"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Why Choose Us', id: 'why-us' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Book Now', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.filter(a => a.popular).map((area, index) => (
                <li key={index} className="text-slate-400 text-sm">
                  {area.name}
                </li>
              ))}
              <li className="text-slate-500 text-sm italic">+ {serviceAreas.filter(a => !a.popular).length} more suburbs</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-sky-500" />
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-sky-500" />
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-sky-500 mt-0.5" />
                <span>{siteInfo.hours}</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-sky-500 mt-0.5" />
                <span>{siteInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation banner */}
        <div className="bg-slate-800 rounded-xl p-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <span className="text-emerald-400 text-lg">✓</span>
              </div>
              <div>
                <div className="text-white font-medium text-sm">SA Government Accredited</div>
                <div className="text-slate-400 text-xs">License: {siteInfo.licenseNumber}</div>
              </div>
            </div>
            <div className="text-slate-400 text-xs">
              ABN: {siteInfo.abn}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear > 2025 ? currentYear : 2026} Adelaide ma Driving School. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-xs">
              <span>Established {siteInfo.established}</span>
              <span>•</span>
              <span>Proudly South Australian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
