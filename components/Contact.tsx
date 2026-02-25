"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { siteInfo, serviceAreas } from '../data/mock';

type FormData = {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  service: "single" | "five" | "test";
  experience: string;
  message: string;
  preferredDay: string;
  preferredTime: string;
};

type ContactItem = {
  icon: ReactNode;
  label: string;
  value: string;
  subtext: string;
  href: string | null;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: 'single',
    experience: '',
    message: '',
    preferredDay: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;
    setFormData(prev => ({ ...prev, [field]: value } as FormData));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', suburb: '', service: 'single', experience: '', message: '', preferredDay: '', preferredTime: '' });
    }, 5000);
  };

  const contactItems: ContactItem[] = [
    { 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      label: 'Call Us', 
      value: siteInfo.phone, 
      subtext: 'Call or text anytime',
      href: `tel:${siteInfo.phone.replace(/\s/g, '')}` 
    },
    { 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      label: 'Email Us', 
      value: siteInfo.email, 
      subtext: 'We reply within 24 hours',
      href: `mailto:${siteInfo.email}` 
    },
    { 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: 'Hours', 
      value: siteInfo.hours, 
      subtext: 'Including public holidays',
      href: null 
    },
    { 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Location', 
      value: 'Southern Adelaide', 
      subtext: 'Glenelg, Marion, Plympton',
      href: null 
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-[#fff8ef] via-[#fff2d6] to-[#ffe7b8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-white">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">Book Now</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Ready to Start Driving?
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form and we'll contact you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="bg-white border-0 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-20 h-20 bg-accent/25 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Booking Received!</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Thanks for getting in touch. We'll call you within 24 hours to confirm.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1 */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                        <span className="font-semibold text-foreground">Your Details</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                          <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Sarah Mitchell" className="h-12 rounded-xl" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                          <Input name="phone" value={formData.phone} onChange={handleChange} required placeholder="0412 345 678" className="h-12 rounded-xl" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                          <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="sarah@example.com" className="h-12 rounded-xl" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Suburb *</label>
                          <select name="suburb" value={formData.suburb} onChange={handleChange} required className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <option value="">Select suburb</option>
                            {serviceAreas.map((area, i) => <option key={i} value={area.name}>{area.name}</option>)}
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                        <span className="font-semibold text-foreground">Lesson Preferences</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Package *</label>
                          <select name="service" value={formData.service} onChange={handleChange} required className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <option value="single">Single Lesson ($100)</option>
                            <option value="five">5 Lessons ($450)</option>
                            <option value="test">Test Ready ($550)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Experience</label>
                          <select name="experience" value={formData.experience} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <option value="">Select level</option>
                            <option value="beginner">Complete Beginner</option>
                            <option value="learner">Some Experience</option>
                            <option value="test-ready">Ready for Test</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Preferred Day</label>
                          <select name="preferredDay" value={formData.preferredDay} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <option value="">Any day</option>
                            <option value="weekday">Weekdays</option>
                            <option value="weekend">Weekends</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                          <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <option value="">Any time</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Any special requirements or questions..." className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-[#ec5f43] text-white py-6 font-semibold rounded-xl shadow-lg shadow-[0_18px_36px_-22px_rgba(242,107,79,0.5)] disabled:opacity-70">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                          Submit Booking Request
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, index) => (
              <div key={index} className="bg-white border border-border rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl text-white">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-semibold hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-foreground font-semibold">{item.value}</div>
                    )}
                    <div className="text-muted-foreground text-sm mt-0.5">{item.subtext}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Service areas */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
              <h4 className="text-foreground font-semibold mb-4">Areas We Service</h4>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.filter(a => a.popular).map((area, i) => (
                  <span key={i} className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full font-medium border border-border">{area.name}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {serviceAreas.filter(a => !a.popular).slice(0, 4).map((area, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white text-muted-foreground text-sm rounded-full border border-border">{area.name}</span>
                ))}
                <span className="px-3 py-1.5 text-muted-foreground text-sm">+ more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
