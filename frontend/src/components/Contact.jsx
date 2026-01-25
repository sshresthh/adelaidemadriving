import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { contactInfo } from '../data/mock';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'lesson',
    message: ''
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'lesson', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-300 text-sm font-semibold uppercase tracking-wider">Book Your Lesson</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready to Get
            <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Behind the Wheel?</span>
          </h2>
          <p className="text-lg text-slate-400">
            Book your first lesson today. We'll get back to you within 24 hours to confirm your booking.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Booking Received!</h3>
                    <p className="text-slate-600 text-center max-w-md">
                      Thanks for reaching out. We'll call you within 24 hours to confirm your lesson booking.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Sarah Mitchell"
                          className="h-12 rounded-xl border-slate-200 focus:border-orange-400 focus:ring-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="0412 345 678"
                          className="h-12 rounded-xl border-slate-200 focus:border-orange-400 focus:ring-orange-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="sarah@example.com"
                        className="h-12 rounded-xl border-slate-200 focus:border-orange-400 focus:ring-orange-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        What are you interested in?
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                      >
                        <option value="lesson">Single Driving Lesson ($100)</option>
                        <option value="package">Test Success Package ($450)</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your experience level, any specific goals, or preferred times..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-6 text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300 rounded-xl disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Book Your Lesson
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <div className="grid gap-4">
              {[
                { icon: Phone, label: 'Call Us', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: 'Email Us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: MapPin, label: 'Service Area', value: 'Glenelg, Marion, Plympton & more', href: null },
                { icon: Clock, label: 'Available', value: '7 Days a Week, 7am - 7pm', href: null }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-white font-semibold hover:text-orange-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52433.66197109516!2d138.49876896567384!3d-34.980485399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d8c38c8cb2c7%3A0x5033654628ec940!2sGlenelg%20SA%205045%2C%20Australia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Areas served */}
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-6 border border-orange-500/20">
              <h4 className="text-white font-bold mb-3">Areas We Cover</h4>
              <div className="flex flex-wrap gap-2">
                {contactInfo.areas.map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                    {area}
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
