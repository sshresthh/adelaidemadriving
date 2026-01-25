import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { services } from '../data/mock';
import { GraduationCap, ClipboardCheck, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const icons = [GraduationCap, ClipboardCheck];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Driving Success,{' '}
            <span className="text-teal-600">Your Way</span>
          </h2>
          <p className="text-lg text-slate-600">
            From your first time behind the wheel to test day confidence, we've got you covered with personalised instruction.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-4 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <span className="text-6xl font-bold text-slate-100 group-hover:text-teal-50 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 mt-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="p-1 bg-teal-100 rounded-full">
                          <Check className="w-3 h-3 text-teal-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-slate-800 hover:bg-teal-600 text-white group/btn transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
