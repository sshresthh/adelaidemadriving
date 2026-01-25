import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { contactInfo } from '../data/mock';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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
    
    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'lesson', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ready to{' '}
            <span className="text-teal-600">Start Driving?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Book your first lesson today or get in touch with any questions. We're here to help you succeed!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-slate-600 text-center">
                    We've received your booking request. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="0400 000 000"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-md border border-input bg-transparent text-base focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="lesson">Driving Lesson ($100/60min)</option>
                      <option value="package">Test Package ($450)</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your experience level or any questions..."
                      className="w-full px-3 py-3 rounded-md border border-input bg-transparent text-base focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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

          {/* Contact info & map */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-teal-50 rounded-lg w-fit mb-4">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Call Us</div>
                <a href={`tel:${contactInfo.phone}`} className="text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-teal-50 rounded-lg w-fit mb-4">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Email Us</div>
                <a href={`mailto:${contactInfo.email}`} className="text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-teal-50 rounded-lg w-fit mb-4">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Service Area</div>
                <div className="text-lg font-semibold text-slate-800">
                  {contactInfo.areas.slice(0, 3).join(', ')}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-teal-50 rounded-lg w-fit mb-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Available</div>
                <div className="text-lg font-semibold text-slate-800">
                  7 Days a Week
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Glenelg Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26216.83098553891!2d138.49876896567384!3d-34.980485399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d8c38c8cb2c7%3A0x5033654628ec940!2sGlenelg%20SA%205045%2C%20Australia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
