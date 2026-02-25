"use client";

const beginnerLessons = [
  { duration: "60 min", price: "120", note: "Single lesson" },
  { duration: "90 min", price: "170", note: "Extended session" },
  { duration: "5 × 90 min", price: "800", note: "Save $50" },
  { duration: "10 × 90 min", price: "1,500", note: "Best value" },
];

const vortPackages = [
  {
    title: "Vort Assessment",
    duration: "60 min",
    details: ["Assessment lesson to gauge readiness"],
    price: "150",
  },
  {
    title: "Lesson + Vort",
    duration: "120 min same day",
    details: ["60 min lesson + Vort"],
    price: "600",
  },
  {
    title: "Extended Lesson + Vort",
    duration: "180 min same day",
    details: ["120 min lesson + Vort"],
    price: "700",
  },
  {
    title: "Premium Vort Prep",
    duration: "3 sessions",
    details: [
      "2 × 60 min lessons on a different day",
      "60 min lesson + Vort on final day",
    ],
    price: "900",
    popular: true,
  },
  {
    title: "One Day Vort",
    duration: "6 hours total",
    details: [
      "5-hour pre-vort intensive session",
      "Vort test included",
    ],
    price: "1,000",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-black/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">Packages & Pricing</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Invest in Your Driving Future
          </h2>
          <p className="text-lg text-white/45">
            Pickup & drop-off included with every lesson. No hidden fees.
          </p>
        </div>

        {/* ── BEGINNER LESSONS ── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Beginner Learner Lessons</h3>
              <p className="text-white/35 text-sm">Build your skills at your own pace</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {beginnerLessons.map((lesson, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-primary/30 rounded-2xl p-6 transition-all duration-300"
              >
                <p className="text-white/35 text-xs uppercase tracking-widest mb-3 font-medium">
                  {lesson.note}
                </p>
                <p className="text-white font-semibold text-sm mb-4">
                  {lesson.duration}
                </p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-white/40 text-lg">$</span>
                  <span className="text-3xl font-extrabold text-white group-hover:text-primary transition-colors">
                    {lesson.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── VORT TEST PACKAGES ── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                <path d="M9 14l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Vort Test Packages</h3>
              <p className="text-white/35 text-sm">Preparation & test day packages</p>
            </div>
          </div>

          <div className="space-y-3">
            {vortPackages.map((pkg, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary/[0.08] border-2 border-primary/40 shadow-[0_0_40px_-12px_rgba(242,107,79,0.2)]"
                    : "bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full tracking-wide uppercase">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h4 className={`font-bold text-lg ${pkg.popular ? "text-white" : "text-white/90"}`}>
                        {pkg.title}
                      </h4>
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/30 text-xs font-medium">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {pkg.details.map((detail, j) => (
                        <span key={j} className="text-white/40 text-sm flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0.5 flex-shrink-0">
                    <span className="text-white/40 text-lg">$</span>
                    <span className={`text-3xl font-extrabold ${pkg.popular ? "text-primary" : "text-white"}`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FULL DRIVING PACKAGE ── */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Border gradient effect */}
          <div className="absolute inset-0 rounded-3xl border border-primary/30" />

          <div className="relative bg-white/[0.04] backdrop-blur-sm px-8 py-10 sm:px-12 sm:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-primary/15 border border-primary/25 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-5">
                  Complete Package
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                  Full Driving<br />Package
                </h3>
                <ul className="space-y-4">
                  {[
                    "75-hour logbook completion",
                    "Unlimited Vort attempts",
                    "We train you until you pass",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-white/70 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right flex-shrink-0">
                <div className="flex items-baseline justify-center lg:justify-end gap-1">
                  <span className="text-white/40 text-2xl font-medium">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-white">5,000</span>
                </div>
                <p className="text-white/30 text-sm mt-3 tracking-wide">
                  Everything you need. One price.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-white/35">
            {[
              "Pickup & drop-off included",
              "Modern dual-control vehicle",
              "Flexible scheduling",
            ].map((label, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
