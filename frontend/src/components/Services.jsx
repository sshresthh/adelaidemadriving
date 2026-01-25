import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { services } from '../data/mock';
import { GraduationCap, ClipboardCheck, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const icons = [GraduationCap, ClipboardCheck];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6">
            Two Paths to
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Driving Success</span>
          </h2>
          <p className="text-lg text-slate-600">
            Whether you're starting from scratch or ready for your test, we've got the perfect program for you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = icons[index];
            const isFirst = index === 0;
            
            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 premium-card ${
                  isFirst ? 'bg-white' : 'bg-gradient-to-br from-slate-800 to-slate-900'
                }`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" />
                
                {/* Decorative circle */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${
                  isFirst ? 'bg-orange-50' : 'bg-orange-500/10'
                } group-hover:scale-150 transition-transform duration-700`} />
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl ${
                      isFirst 
                        ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30' 
                        : 'bg-white/10'
                    }`}>
                      <Icon className={`w-8 h-8 ${isFirst ? 'text-white' : 'text-orange-400'}`} />
                    </div>
                    <span className={`text-7xl font-extrabold ${
                      isFirst ? 'text-slate-100' : 'text-white/5'
                    } group-hover:text-orange-100 transition-colors`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold mt-6 ${isFirst ? 'text-slate-800' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2 leading-relaxed ${isFirst ? 'text-slate-600' : 'text-slate-300'}`}>
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-3 ${isFirst ? 'text-slate-700' : 'text-slate-200'}`}>
                        <div className={`p-1 rounded-full ${
                          isFirst ? 'bg-emerald-100' : 'bg-emerald-500/20'
                        }`}>
                          <Check className={`w-4 h-4 ${isFirst ? 'text-emerald-600' : 'text-emerald-400'}`} />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 group/btn ${
                      isFirst 
                        ? 'bg-slate-900 hover:bg-slate-800 text-white' 
                        : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/30'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
