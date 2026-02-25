"use client";

import { useState, type ReactNode } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { services } from '../data/mock';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceIcons: ReactNode[] = [
    // Steering wheel icon
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v7"/>
      <path d="M12 15v7"/>
      <path d="M2 12h7"/>
      <path d="M15 12h7"/>
    </svg>,
    // Clipboard/checklist icon
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M9 14l2 2 4-4"/>
    </svg>
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Driving Lessons & Test Prep
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your path to becoming a confident, safe driver.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedService === service.id;
            
            return (
              <Card
                key={service.id}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-3xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 bg-primary rounded-2xl text-white shadow-lg shadow-[0_18px_36px_-22px_rgba(242,107,79,0.5)]">
                      {serviceIcons[index]}
                    </div>
                    <span className="text-6xl font-extrabold text-primary/20">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <span className="text-primary text-sm font-semibold">{service.subtitle}</span>
                    <h3 className="text-2xl font-bold text-foreground mt-1">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mt-3">{service.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="w-5 h-5 bg-accent/25 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand toggle */}
                  {service.features.length > 4 && (
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="flex items-center gap-1 text-primary text-sm font-semibold mb-4 hover:text-[#ec5f43]"
                    >
                      {isExpanded ? (
                        <>Show less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Show all features <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  )}

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="mb-4 p-4 bg-secondary rounded-xl border border-border">
                      <p className="text-sm text-muted-foreground mb-3">{service.longDescription}</p>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ideal for:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {service.idealFor.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-white text-muted-foreground text-xs rounded-full border border-border">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-[#ec5f43] text-white py-5 font-semibold rounded-xl group transition-colors"
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
