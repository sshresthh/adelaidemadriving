import React from 'react';
import { CheckCircle, ShieldCheck, Heart, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: ShieldCheck, text: 'Fully accredited & licensed' },
    { icon: Heart, text: 'Patient & supportive approach' },
    { icon: Target, text: 'Tailored to your goals' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"
                alt="Driving instruction in Adelaide"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
              <div className="text-4xl font-bold text-teal-600 mb-1">10+</div>
              <div className="text-slate-600 text-sm">Years helping Adelaide drivers succeed</div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Your Local
              <span className="text-teal-600"> Glenelg </span>
              Driving Expert
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Welcome to Adelaide ma Driving! As a locally accredited driving instructor based in the Glenelg area, I'm dedicated to helping learners of all ages build confidence behind the wheel.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you're a complete beginner or preparing for your driving test, my tailored lessons focus on developing safe driving habits that will last a lifetime. I know the Southern Adelaide roads inside out, including all the test routes and tricky spots.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-teal-50 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
