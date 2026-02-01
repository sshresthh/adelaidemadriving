import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mock';
import { Quote, Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Student Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-slate-600">
            Real feedback from real students who passed their test with us.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-slate-200 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-sky-100 rounded-lg">
                  <Quote className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className={`transition-opacity duration-400 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-sky-100"
                    />
                    <div>
                      <div className="font-bold text-slate-800">
                        {currentTestimonial.name}, {currentTestimonial.age}
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <MapPin className="w-3 h-3" />
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                      ✓ Passed {currentTestimonial.passedOn}
                    </span>
                    <span className="text-slate-400 text-xs">{currentTestimonial.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 400);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-sky-500'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* All testimonials preview */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 400);
                }}
                className={`p-3 rounded-lg border transition-all ${
                  index === currentIndex
                    ? 'border-sky-300 bg-sky-50'
                    : 'border-slate-200 bg-white hover:border-sky-200'
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mx-auto object-cover"
                />
                <div className="text-xs font-medium text-slate-700 mt-2 truncate">{t.name}</div>
                <div className="text-xs text-slate-400 truncate">{t.location}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
