import React from 'react';
import { Award, Heart, Target, Users, CheckCircle, MapPin, Clock, Car } from 'lucide-react';
import { instructor, siteInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-slate-600">
            Experienced, patient, and dedicated to your success on the road.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Instructor Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{instructor.name}</h3>
                <p className="text-sky-600 font-medium">{instructor.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    ✓ Fully Accredited
                  </span>
                  <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full">
                    Since {siteInfo.established}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              {instructor.bio}
            </p>

            {/* Qualifications */}
            <div className="mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Qualifications</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {instructor.qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {instructor.specialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1 bg-white text-slate-600 text-sm rounded-full border border-slate-200">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Learn With Us?</h3>
            
            <div className="space-y-4">
              {[
                { 
                  icon: Target, 
                  title: 'Personalised Learning',
                  description: 'Every lesson is tailored to your skill level, learning style, and goals. No one-size-fits-all approach here.'
                },
                { 
                  icon: Heart, 
                  title: 'Patient & Supportive',
                  description: 'Nervous about driving? You\'re not alone. Our calm, encouraging approach helps anxious learners thrive.'
                },
                { 
                  icon: MapPin, 
                  title: 'Local Expertise',
                  description: 'We know every test route, tricky intersection, and examiner preference in the Southern Adelaide area.'
                },
                { 
                  icon: Car, 
                  title: 'Modern Vehicle',
                  description: 'Learn in a well-maintained, dual-control automatic vehicle with all modern safety features.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all"
                >
                  <div className="p-3 bg-sky-100 rounded-lg h-fit">
                    <item.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info quick */}
            <div className="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-200">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span className="text-sm text-slate-700">{siteInfo.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span className="text-sm text-slate-700">{siteInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
