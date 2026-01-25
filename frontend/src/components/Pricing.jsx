import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { pricing } from '../data/mock';
import { Check, Sparkles, ArrowRight, Gift } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 text-sm font-semibold uppercase tracking-wider">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6">
            Transparent Pricing,
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">No Surprises</span>
          </h2>
          <p className="text-lg text-slate-600">
            Choose the option that fits your needs. All prices include pick-up and drop-off in Southern Adelaide.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-500 rounded-3xl premium-card ${
                plan.popular
                  ? 'border-2 border-orange-400 shadow-2xl shadow-orange-500/20 scale-[1.02] bg-white'
                  : 'border border-slate-200 shadow-lg bg-white hover:border-orange-200'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-6 py-1.5 rounded-b-xl flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    BEST VALUE
                  </div>
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                    <Gift className="w-3 h-3" />
                    {plan.savings}
                  </div>
                </div>
              )}

              <CardHeader className={`pb-0 ${plan.popular ? 'pt-10' : 'pt-8'}`}>
                <div className="mb-2">
                  <span className="text-slate-500 text-sm font-medium">{plan.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {plan.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="py-8">
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-slate-800">{plan.price}</span>
                    <span className="text-slate-500">AUD</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full mt-0.5 ${
                        plan.popular ? 'bg-orange-100' : 'bg-slate-100'
                      }`}>
                        <Check className={`w-3.5 h-3.5 ${
                          plan.popular ? 'text-orange-600' : 'text-slate-600'
                        }`} />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 pb-8 px-6">
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.popular ? 'Get Started Now' : 'Book Single Lesson'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 max-w-xl mx-auto">
            All lessons include pick-up & drop-off within Southern Adelaide. 
            Custom packages available for intensive courses or unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
