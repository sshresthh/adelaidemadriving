"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mock';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-orange-700 text-sm font-semibold">Student Stories</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-stone-600">
            Real feedback from real students who passed their test with us.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                {/* Quote icon */}
                <div className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/30">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-orange-400 fill-orange-400" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-400 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-10 font-medium">
                  "{current.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-orange-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <div className="font-bold text-stone-800 text-lg">
                        {current.name}, {current.age}
                      </div>
                      <div className="flex items-center gap-1 text-stone-500 text-sm">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {current.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Passed {current.passedOn}
                    </span>
                    <span className="text-stone-400 text-sm">{current.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-stone-600 hover:text-orange-500 hover:shadow-xl transition-all border border-orange-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Thumbnails */}
            <div className="flex items-center gap-3">
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 400);
                  }}
                  className={`transition-all duration-300 rounded-full overflow-hidden border-2 ${
                    index === currentIndex
                      ? 'w-14 h-14 border-orange-500 shadow-lg'
                      : 'w-10 h-10 border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-stone-600 hover:text-orange-500 hover:shadow-xl transition-all border border-orange-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
