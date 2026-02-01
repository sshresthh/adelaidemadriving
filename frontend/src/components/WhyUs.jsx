import React from 'react';
import { whyUsFeatures, stats } from '../data/mock';

const WhyUs = () => {
  const featureIcons = [
    // Location/Map icon
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>,
    // Trophy icon
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>,
    // Calendar icon
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 18h.01"/>
      <path d="M12 18h.01"/>
      <path d="M16 18h.01"/>
    </svg>,
    // Heart icon
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-orange-700 text-sm font-semibold">Why Choose Us</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            The Adelaide ma Difference
          </h2>
          <p className="text-lg text-stone-600">
            What sets us apart from other driving schools.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyUsFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 premium-hover group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {featureIcons[index]}
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-orange-500">{feature.stat}</span>
                  <span className="text-stone-400 text-xs ml-1">{feature.statLabel}</span>
                </div>
              </div>

              <h3 className="font-bold text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-3">
                {feature.description}
              </p>
              <p className="text-stone-400 text-xs italic">
                {feature.details}
              </p>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="bg-orange-500 rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Our Track Record</h3>
            <p className="text-orange-100">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-orange-100 text-sm font-medium">{stat.label}</div>
                <div className="text-orange-200/70 text-xs mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
