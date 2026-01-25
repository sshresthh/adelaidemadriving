import React from 'react';
import { Award, Heart, Target, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side with overlapping elements */}
          <div className="relative order-2 lg:order-1">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Driving lesson in Adelaide"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-slate-800">10+</div>
                  <div className="text-slate-500 text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Students badge */}
            <div className="absolute -top-4 -left-4 md:left-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">500+</div>
                  <div className="text-slate-500 text-xs">Happy Students</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-100 rounded-full -z-10 opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-100 rounded-full -z-10 opacity-60" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-700 text-sm font-semibold uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              Your Local
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Southern Adelaide</span>
              Driving Expert
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              G'day! I'm your local accredited driving instructor, born and raised in Adelaide. For over a decade, I've been helping nervous beginners and test-takers become confident, safe drivers on our Southern Adelaide roads.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Target, text: 'Personalised lessons tailored to YOUR learning style' },
                { icon: Heart, text: 'Patient, calm approach - perfect for anxious learners' },
                { icon: Users, text: 'Know every test route in Marion, Glenelg & surrounds' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 group"
                >
                  <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-slate-700 font-medium pt-1">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Accreditation */}
            <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <div>
                <div className="font-semibold text-slate-800">Fully Accredited Instructor</div>
                <div className="text-sm text-slate-500">SA Government Licensed • Dual Control Vehicle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
