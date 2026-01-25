import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { pricing } from '../data/mock';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Simple,{' '}
            <span className="text-teal-600">Transparent</span>{' '}
            Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Choose the option that works best for your learning journey. No hidden fees, just quality instruction.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'border-2 border-teal-500 shadow-2xl shadow-teal-500/10 scale-[1.02]'
                  : 'border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <CardHeader className="pb-4 pt-8">
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-slate-500">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-6">
                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-500 ml-2">/ {plan.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full mt-0.5 ${plan.popular ? 'bg-teal-100' : 'bg-slate-100'}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-teal-600' : 'text-slate-600'}`} />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-slate-800 hover:bg-slate-900 text-white'
                  }`}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            All prices include pick-up and drop-off within the Southern Adelaide area.
            <br />
            Custom packages available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
