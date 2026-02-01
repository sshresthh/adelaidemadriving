import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { siteInfo, serviceAreas } from '../data/mock';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
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

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-sm font-semibold rounded-full mb-4">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Driving?
          </h2>
          <p className="text-lg text-slate-300">
            Fill out the form below and we'll get back to you within 24 hours to confirm your booking.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Booking form */}
          <div className="lg:col-span-3">
            <Card className="bg-white border-0">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Booking Request Received!</h3>
                    <p className="text-slate-600 text-center max-w-md">
                      Thanks for getting in touch. We'll call you within 24 hours to confirm your lesson.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Personal details */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full text-xs flex items-center justify-center font-bold">1</span>
                        Your Details
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Sarah Mitchell"
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="e.g., 0412 345 678"
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="e.g., sarah@example.com"
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Suburb *</label>
                          <select
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleChange}
                            required
                            className="w-full h-11 px-3 rounded-md border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                          >
                            <option value="">Select your suburb</option>
                            {serviceAreas.map((area, index) => (
                              <option key={index} value={area.name}>{area.name}</option>
                            ))}
                            <option value="other">Other (please specify)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Lesson details */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full text-xs flex items-center justify-center font-bold">2</span>
                        Lesson Details
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Package *</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full h-11 px-3 rounded-md border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                          >
                            <option value="single">Single Lesson ($100)</option>
                            <option value="five">5 Lesson Package ($450)</option>
                            <option value="test">Test Ready Package ($550)</option>
                            <option value="custom">Custom Package</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Experience Level</label>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full h-11 px-3 rounded-md border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                          >
                            <option value="">Select experience</option>
                            <option value="beginner">Complete Beginner</option>
                            <option value="learner">Learner (some experience)</option>
                            <option value="test-ready">Ready for Test</option>
                            <option value="refresher">Refresher Course</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Day</label>
                          <select
                            name="preferredDay"
                            value={formData.preferredDay}
                            onChange={handleChange}
                            className="w-full h-11 px-3 rounded-md border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                          >
                            <option value="">Any day</option>
                            <option value="weekday">Weekdays</option>
                            <option value="weekend">Weekends</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Time</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full h-11 px-3 rounded-md border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                          >
                            <option value="">Any time</option>
                            <option value="morning">Morning (7am-12pm)</option>
                            <option value="afternoon">Afternoon (12pm-5pm)</option>
                            <option value="evening">Evening (5pm-7pm)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Information</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about any specific goals, concerns, or questions you have..."
                        className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white py-5 font-semibold disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
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
            {[
              { icon: Phone, label: 'Call Us', value: siteInfo.phone, subtext: 'Call or text anytime', href: `tel:${siteInfo.phone.replace(/\s/g, '')}` },
              { icon: Mail, label: 'Email Us', value: siteInfo.email, subtext: 'We reply within 24 hours', href: `mailto:${siteInfo.email}` },
              { icon: Clock, label: 'Hours', value: siteInfo.hours, subtext: 'Including public holidays', href: null },
              { icon: MapPin, label: 'Service Area', value: 'Southern Adelaide', subtext: 'Glenelg, Marion, Plympton & more', href: null }
            ].map((item, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-500 rounded-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold hover:text-sky-300 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-semibold">{item.value}</div>
                    )}
                    <div className="text-slate-400 text-sm mt-0.5">{item.subtext}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Service areas */}
            <div className="bg-slate-700 rounded-xl p-5">
              <h4 className="text-white font-semibold mb-3">Areas We Service</h4>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.filter(a => a.popular).map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-sky-500/20 text-sky-300 text-sm rounded-full font-medium">
                    {area.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {serviceAreas.filter(a => !a.popular).map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-600 text-slate-300 text-sm rounded-full">
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
