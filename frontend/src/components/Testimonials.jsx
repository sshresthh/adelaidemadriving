import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { testimonials } from '../data/mock';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            What Our Students{' '}
            <span className="text-teal-600">Say</span>
          </h2>
          <p className="text-lg text-slate-600">
            Real stories from real learners who found their driving confidence with us.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 p-3 bg-teal-100 rounded-xl">
                  <Quote className="w-6 h-6 text-teal-600" />
                </div>

                {/* Testimonial content */}
                <div
                  className={`transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
                >
                  <div className="pt-8 md:pt-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-teal-50 hover:border-teal-300 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-teal-50 hover:border-teal-300 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
