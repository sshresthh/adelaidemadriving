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
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-[#D97756]/10 text-[#D97756] text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Two Paths to Driving Success
          </h2>
          <p className="text-lg text-stone-600">
            Whether you're starting from scratch or ready for your test, we've got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            const isDark = index === 1;
            
            return (
              <Card
                key={service.id}
                className={`overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                  isDark 
                    ? 'bg-stone-900 border-stone-800' 
                    : 'bg-white border-stone-200'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${
                      isDark ? 'bg-[#D97756]' : 'bg-[#D97756]/10'
                    }`}>
                      <Icon className={`w-7 h-7 ${isDark ? 'text-white' : 'text-[#D97756]'}`} />
                    </div>
                    <span className={`text-6xl font-bold ${
                      isDark ? 'text-stone-800' : 'text-stone-100'
                    }`}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold mt-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-3 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        <div className={`p-1 rounded-full ${
                          isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'
                        }`}>
                          <Check className={`w-3 h-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-5 font-semibold group ${
                      isDark 
                        ? 'bg-[#D97756] hover:bg-[#C4684A] text-white border-0' 
                        : 'bg-stone-900 hover:bg-stone-800 text-white border-0'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
