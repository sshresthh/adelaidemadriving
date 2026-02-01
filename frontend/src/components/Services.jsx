import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { services } from '../data/mock';
import { GraduationCap, ClipboardCheck, Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const icons = [GraduationCap, ClipboardCheck];
  const [expandedService, setExpandedService] = useState(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Driving Lessons & Test Prep
          </h2>
          <p className="text-lg text-slate-600">
            Whether you're just starting out or ready for your test, we have the perfect program for you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            const isExpanded = expandedService === service.id;
            
            return (
              <Card
                key={service.id}
                className="bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-sky-100 rounded-xl">
                      <Icon className="w-7 h-7 text-sky-600" />
                    </div>
                    <span className="text-5xl font-bold text-slate-100">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-sky-600 font-medium">{service.subtitle}</span>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 mt-2">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="p-1 bg-emerald-100 rounded-full">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand/Collapse */}
                  {service.features.length > 4 && (
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="flex items-center gap-1 text-sky-600 text-sm font-medium mb-4 hover:text-sky-700"
                    >
                      {isExpanded ? (
                        <>Show less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Show more <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  )}

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600 mb-3">{service.longDescription}</p>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ideal for:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {service.idealFor.map((item, i) => (
                            <span key={i} className="px-2 py-1 bg-white text-slate-600 text-xs rounded-full border border-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-5 font-semibold group"
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
