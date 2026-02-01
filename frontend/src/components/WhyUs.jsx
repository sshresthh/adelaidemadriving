import React from 'react';
import { whyUsFeatures, stats } from '../data/mock';
import { MapPin, TrendingUp, Calendar, Heart, ChevronRight } from 'lucide-react';

const WhyUs = () => {
  const icons = [MapPin, TrendingUp, Calendar, Heart];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            The Adelaide ma Difference
          </h2>
          <p className="text-lg text-slate-600">
            What sets us apart from other driving schools in Adelaide.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyUsFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-sky-100 rounded-lg group-hover:bg-sky-500 transition-colors">
                    <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-sky-600">{feature.stat}</span>
                    <span className="text-slate-500 text-xs ml-1">{feature.statLabel}</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-slate-500 text-xs italic">
                  {feature.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats banner */}
        <div className="bg-sky-600 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Our Track Record Speaks for Itself</h3>
            <p className="text-sky-100">Numbers that demonstrate our commitment to your success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sky-100 text-sm font-medium">{stat.label}</div>
                <div className="text-sky-200 text-xs mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
