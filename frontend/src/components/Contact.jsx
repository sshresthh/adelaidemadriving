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
    <section id="contact" className="py-20 md:py-28 bg-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-[#D97756]/20 text-[#D97756] text-sm font-semibold rounded-full mb-4">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Behind the Wheel?
          </h2>
          <p className="text-lg text-stone-400">
            Book your first lesson today. We'll confirm within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="border-0 bg-white">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">Booking Received!</h3>
                    <p className="text-stone-600 text-center max-w-md">
                      Thanks for reaching out. We'll call you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Sarah Mitchell"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="0412 345 678"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="sarah@example.com"
                        className="h-11"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-11 px-3 rounded-md border border-stone-200 bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97756]/20 focus:border-[#D97756]"
                      >
                        <option value="lesson">Single Lesson ($100)</option>
                        <option value="package">Test Success Package ($450)</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your experience level or preferred times..."
                        className="w-full px-3 py-2 rounded-md border border-stone-200 bg-white text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D97756]/20 focus:border-[#D97756] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#D97756] hover:bg-[#C4684A] text-white py-5 font-semibold border-0 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
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
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: 'Call Us', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
              { icon: Mail, label: 'Email Us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MapPin, label: 'Service Area', value: 'Glenelg, Marion, Plympton', href: null },
              { icon: Clock, label: 'Available', value: '7 Days, 7am - 7pm', href: null }
            ].map((item, index) => (
              <div key={index} className="bg-stone-800 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#D97756] rounded-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-stone-400 text-xs uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-[#D97756] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Areas served */}
            <div className="bg-stone-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">Areas We Cover</h4>
              <div className="flex flex-wrap gap-2">
                {contactInfo.areas.map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-stone-700 text-stone-300 text-sm rounded-full">
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
