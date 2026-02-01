"use client";

import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { pricing } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">Pricing</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. Pick-up and drop-off included in all packages.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricing.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-primary shadow-2xl shadow-[0_22px_50px_-24px_rgba(242,107,79,0.4)] scale-[1.02]'
                  : 'border border-border hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-sm font-bold py-2 text-center">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && !plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/25 text-foreground text-xs font-bold rounded-full">
                    {plan.savings}
                  </span>
                </div>
              )}

              <CardHeader className={`${plan.popular ? 'pt-14' : 'pt-8'}`}>
                <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-foreground">{plan.currency}{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.duration}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        <svg className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6 pb-8">
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-5 font-semibold rounded-xl group transition-all ${
                    plan.popular
                      ? 'bg-primary hover:bg-[#ec5f43] text-white shadow-lg shadow-[0_18px_38px_-22px_rgba(242,107,79,0.55)]'
                      : 'bg-white border border-primary/30 text-foreground hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {[
              { icon: '✓', label: 'Pick-up & drop-off included' },
              { icon: '✓', label: 'Modern dual-control vehicle' },
              { icon: '✓', label: 'Flexible scheduling' }
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-5 h-5 bg-accent/25 text-foreground rounded-full flex items-center justify-center text-xs font-bold">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
