import React from 'react';
import { whyUsFeatures } from '../data/mock';
import { MapPin, TrendingUp, Car } from 'lucide-react';

const WhyUs = () => {
  const icons = [MapPin, TrendingUp, Car];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            The Adelaide ma{' '}
            <span className="text-teal-600">Difference</span>
          </h2>
          <p className="text-lg text-slate-600">
            Experience the benefits of learning with a dedicated local instructor who knows Southern Adelaide inside out.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {whyUsFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-teal-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">500+</div>
              <div className="text-slate-400 text-sm">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">95%</div>
              <div className="text-slate-400 text-sm">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">10+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">5/5</div>
              <div className="text-slate-400 text-sm">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
