import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { pricing } from '../data/mock';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-[#D97756]/10 text-[#D97756] text-sm font-semibold rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-stone-600">
            No hidden fees. All prices include pick-up and drop-off in Southern Adelaide.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricing.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-[#D97756] shadow-lg'
                  : 'border border-stone-200 hover:border-stone-300 hover:shadow-md'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#D97756] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                    BEST VALUE
                  </div>
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && (
                <div className="absolute top-4 left-4">
                  <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                    {plan.savings}
                  </div>
                </div>
              )}

              <CardHeader className={`pb-0 ${plan.popular ? 'pt-10' : 'pt-8'}`}>
                <div className="mb-1">
                  <span className="text-stone-500 text-sm">{plan.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">
                  {plan.title}
                </h3>
                <p className="text-stone-500 text-sm">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="py-6">
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-stone-900">{plan.price}</span>
                  <span className="text-stone-500 ml-1">AUD</span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full mt-0.5 ${
                        plan.popular ? 'bg-[#D97756]/10' : 'bg-stone-100'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-[#D97756]' : 'text-stone-600'
                        }`} />
                      </div>
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 pb-6 px-6">
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-5 font-semibold group ${
                    plan.popular
                      ? 'bg-[#D97756] hover:bg-[#C4684A] text-white border-0'
                      : 'bg-stone-900 hover:bg-stone-800 text-white border-0'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Book Lesson'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-stone-500 text-sm mt-8">
          Custom packages available for intensive courses. Contact us for details.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
