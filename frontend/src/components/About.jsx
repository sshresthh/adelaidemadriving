import React from 'react';
import { instructor, siteInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-orange-700 text-sm font-semibold">About Us</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-stone-600">
            Experienced, patient, and dedicated to your success on the road.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Instructor Card */}
          <div className="lg:col-span-2">
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 sticky top-28">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-28 h-28 rounded-2xl object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mt-4">{instructor.name}</h3>
                <p className="text-orange-600 font-medium">{instructor.title}</p>
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed text-center mb-6">
                {instructor.bio}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">10+</div>
                  <div className="text-xs text-stone-500">Years Experience</div>
                </div>
                <div className="text-center p-3 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-xs text-stone-500">Students Taught</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Qualifications */}
            <div>
              <h4 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </span>
                Qualifications & Certifications
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {instructor.qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200 hover:border-orange-200 transition-colors">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-stone-700 text-sm font-medium">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {instructor.specialties.map((specialty, index) => (
                  <span key={index} className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-medium rounded-full border border-orange-200">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Why learn with us */}
            <div>
              <h4 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </span>
                Why Learn With Us
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Personalised Learning', desc: 'Every lesson is tailored to your skill level, learning style, and goals.' },
                  { title: 'Patient & Supportive', desc: 'Calm, encouraging approach - perfect for nervous or anxious learners.' },
                  { title: 'Local Expertise', desc: 'We know every test route and tricky intersection in Southern Adelaide.' },
                  { title: 'Modern Vehicle', desc: 'Learn in a well-maintained, dual-control automatic with all safety features.' }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl border border-stone-200 hover:border-orange-200 hover:shadow-md transition-all premium-hover">
                    <h5 className="font-semibold text-stone-800 mb-1">{item.title}</h5>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
