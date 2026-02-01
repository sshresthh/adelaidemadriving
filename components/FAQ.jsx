"use client";

import { useState } from 'react';
import { faqs } from '../data/mock';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">FAQ</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before booking.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'shadow-xl shadow-[0_18px_40px_-24px_rgba(242,107,79,0.35)] ring-1 ring-primary/20' 
                  : 'shadow-md hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-primary' : 'bg-primary/10'
                  }`}>
                    <svg className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-primary'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <span className={`font-semibold text-lg ${
                    openIndex === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-primary' : ''
                }`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary hover:bg-[#ec5f43] text-white font-semibold rounded-full shadow-lg shadow-[0_18px_36px_-22px_rgba(242,107,79,0.5)] transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
