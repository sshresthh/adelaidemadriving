import React from 'react';
import { Award, Heart, Target, Users, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Driving lesson in Adelaide"
                className="w-full h-[450px] object-cover"
              />
            </div>
            
            {/* Experience card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-xl shadow-lg p-5 border border-stone-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#D97756] rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-stone-900">10+</div>
                  <div className="text-stone-500 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Students card */}
            <div className="absolute -top-4 -left-4 md:left-6 bg-white rounded-xl shadow-lg p-4 border border-stone-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop" alt="Student" className="w-9 h-9 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" alt="Student" className="w-9 h-9 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" alt="Student" className="w-9 h-9 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-stone-900">500+</div>
                  <div className="text-stone-500 text-xs">Happy Students</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block px-3 py-1 bg-[#D97756]/10 text-[#D97756] text-sm font-semibold rounded-full mb-4">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
              Your Local Southern Adelaide Driving Expert
            </h2>

            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              G'day! I'm your local accredited driving instructor, born and raised in Adelaide. For over a decade, I've been helping nervous beginners and test-takers become confident, safe drivers.
            </p>

            <p className="text-stone-600 mb-8 leading-relaxed">
              I know the Southern Adelaide roads inside out — every test route, tricky roundabout, and challenging intersection in Glenelg, Marion, and Plympton.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                { icon: Target, text: 'Personalised lessons tailored to YOUR learning style' },
                { icon: Heart, text: 'Patient, calm approach - perfect for anxious learners' },
                { icon: Users, text: 'Know every test route in Marion, Glenelg & surrounds' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-stone-200 hover:border-[#D97756]/30 transition-colors"
                >
                  <div className="p-2 bg-[#D97756]/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-[#D97756]" />
                  </div>
                  <span className="text-stone-700 font-medium pt-1">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Accreditation */}
            <div className="flex items-center gap-3 mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="font-semibold text-stone-800">Fully Accredited Instructor</span>
                <span className="text-stone-500 text-sm ml-2">• SA Government Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
