import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { pricing } from '../data/mock';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            No hidden fees. All prices include pick-up and drop-off in Southern Adelaide.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all ${
                plan.popular
                  ? 'border-2 border-sky-500 shadow-xl scale-[1.02]'
                  : 'border border-slate-200 hover:border-sky-300 hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-sky-500 text-white text-xs font-bold py-1.5 text-center">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  MOST POPULAR
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && !plan.popular && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                    {plan.savings}
                  </span>
                </div>
              )}

              <CardHeader className={`${plan.popular ? 'pt-10' : 'pt-6'}`}>
                <h3 className="text-xl font-bold text-slate-800">{plan.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.currency}{plan.price}</span>
                  <span className="text-slate-500 ml-2">/ {plan.duration}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full mt-0.5 ${
                        plan.popular ? 'bg-sky-100' : 'bg-slate-100'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-sky-600' : 'text-slate-600'
                        }`} />
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 pb-6">
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-5 font-semibold group ${
                    plan.popular
                      ? 'bg-sky-500 hover:bg-sky-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-900 text-white'
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
        <div className="mt-10 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" />
              Pick-up & drop-off included
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" />
              Flexible scheduling
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" />
              Modern dual-control vehicle
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Need a custom package? <button onClick={scrollToContact} className="text-sky-600 hover:underline font-medium">Contact us</button> for tailored options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
