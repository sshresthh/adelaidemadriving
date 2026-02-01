import React from 'react';
import { ChevronUp } from 'lucide-react';
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
    <footer className="bg-stone-950">
      {/* Back to top */}
      <div className="flex justify-center -mt-6">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center hover:bg-orange-600 hover:-translate-y-1 transition-all"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Adelaide ma Driving</span>
                <span className="block text-xs text-orange-400 font-semibold">DRIVING SCHOOL</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              {siteInfo.tagline}. Trusted by 500+ students in Southern Adelaide since {siteInfo.established}.
            </p>
            <div className="flex gap-2">
              {[
                { href: siteInfo.socialLinks.facebook, icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { href: siteInfo.socialLinks.instagram, icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { href: siteInfo.socialLinks.google, icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-stone-800 rounded-lg hover:bg-orange-500 transition-colors text-stone-400 hover:text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Why Us', id: 'why-us' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Book Now', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-stone-400 hover:text-orange-400 transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.filter(a => a.popular).map((area, i) => (
                <li key={i} className="text-stone-400 text-sm">{area.name}</li>
              ))}
              <li className="text-stone-500 text-sm italic">+ {serviceAreas.filter(a => !a.popular).length} more suburbs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-stone-400 hover:text-orange-400 transition-colors text-sm">
                  <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-2 text-stone-400 hover:text-orange-400 transition-colors text-sm">
                  <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {siteInfo.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation */}
        <div className="bg-stone-900 rounded-2xl p-5 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">SA Government Accredited</div>
                <div className="text-stone-400 text-sm">License: {siteInfo.licenseNumber}</div>
              </div>
            </div>
            <div className="text-stone-500 text-sm">
              ABN: {siteInfo.abn}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {currentYear > 2025 ? currentYear : 2026} Adelaide ma Driving School. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-stone-500 text-sm">
              <span>Est. {siteInfo.established}</span>
              <span className="text-stone-700">•</span>
              <span>Proudly South Australian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
