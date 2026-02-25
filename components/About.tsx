"use client";

import { CldImage } from 'next-cloudinary';
import { instructor } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-black/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">About Us</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-white/50">
            Experienced, patient, and dedicated to your success on the road.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Instructor Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.06] rounded-3xl p-8 border border-white/10 sticky top-28">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <CldImage
                    src={instructor.image}
                    alt={instructor.name}
                    width={112}
                    height={112}
                    crop="fill"
                    gravity="face"
                    className="w-28 h-28 rounded-full object-cover mx-auto shadow-lg ring-2 ring-white/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{instructor.name}</h3>
                <p className="text-primary font-medium">{instructor.title}</p>
              </div>

              <p className="text-white/50 text-sm leading-relaxed text-center mb-6">
                {instructor.bio}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/[0.06] rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-white/40">Years Experience</div>
                </div>
                <div className="text-center p-3 bg-white/[0.06] rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-xs text-white/40">Students Taught</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Why learn with us */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <div key={index} className="p-4 bg-white/[0.04] rounded-xl border border-white/10 hover:border-primary/30 hover:bg-white/[0.07] transition-all">
                    <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                    <p className="text-white/45 text-sm">{item.desc}</p>
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
