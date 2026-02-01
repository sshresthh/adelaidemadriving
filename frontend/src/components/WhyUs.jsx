import React from 'react';
import { whyUsFeatures } from '../data/mock';
import { MapPin, TrendingUp, Calendar } from 'lucide-react';

const WhyUs = () => {
  const icons = [MapPin, TrendingUp, Calendar];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-[#D97756]/10 text-[#D97756] text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            The Adelaide ma Difference
          </h2>
          <p className="text-lg text-stone-600">
            Three reasons why students choose us and pass their tests first time.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {whyUsFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 border border-stone-200 hover:border-[#D97756]/30 hover:shadow-md transition-all duration-300"
              >
                {/* Stat badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#D97756]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#D97756]" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-stone-900">{feature.stat}</span>
                    <span className="text-stone-500 text-sm ml-1">{feature.statLabel}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats banner */}
        <div className="bg-stone-900 rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Students Taught' },
              { value: '95%', label: 'First-Time Pass' },
              { value: '10+', label: 'Years Teaching' },
              { value: '4.9', label: 'Google Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D97756] mb-1">
                  {stat.value}
                </div>
                <div className="text-stone-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
