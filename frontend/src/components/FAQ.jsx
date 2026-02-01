import React, { useState } from 'react';
import { faqs } from '../data/mock';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Got questions? We've got answers. If you don't see your question here, feel free to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all ${
                openIndex === index ? 'border-sky-300 shadow-md' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${
                    openIndex === index ? 'bg-sky-100' : 'bg-slate-100'
                  }`}>
                    <HelpCircle className={`w-4 h-4 ${
                      openIndex === index ? 'text-sky-600' : 'text-slate-500'
                    }`} />
                  </div>
                  <span className={`font-semibold ${
                    openIndex === index ? 'text-sky-700' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-5 pt-0">
                  <div className="pl-11">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-semibold text-slate-800 mb-2">Still have questions?</h3>
          <p className="text-slate-600 text-sm mb-4">
            Can't find the answer you're looking for? Please contact us directly.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
