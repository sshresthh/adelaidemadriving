import React from 'react';
import { whyUsFeatures } from '../data/mock';
import { MapPin, TrendingUp, Calendar, Sparkles } from 'lucide-react';

const WhyUs = () => {
  const icons = [MapPin, TrendingUp, Calendar];

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6">
            The Adelaide ma
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Difference</span>
          </h2>
          <p className="text-lg text-slate-600">
            Three reasons why students choose us and pass their tests first time.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyUsFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200 premium-card"
              >
                {/* Stat badge */}
                <div className="absolute -top-4 right-8 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg shadow-orange-500/30">
                  <span className="text-white font-bold">{feature.stat}</span>
                  <span className="text-white/80 text-sm ml-1">{feature.statLabel}</span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Stats banner */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12">
            {[
              { value: '500+', label: 'Students Taught' },
              { value: '95%', label: 'First-Time Pass' },
              { value: '10+', label: 'Years Teaching' },
              { value: '4.9', label: 'Google Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
