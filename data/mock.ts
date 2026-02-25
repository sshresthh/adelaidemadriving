// Comprehensive sample data for Adelaide ma Driving School

export type SiteInfo = {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  abn: string;
  licenseNumber: string;
  established: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    google: string;
  };
};

export type Instructor = {
  name: string;
  title: string;
  image: string;
  bio: string;
  specialties: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
  quote: string;
  rating: number;
  passedOn: string;
  date: string;
};

export type Service = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  idealFor: string[];
};

export type WhyUsFeature = {
  id: number;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  details: string;
};

export type PricingPlan = {
  id: number;
  title: string;
  price: string;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  savings?: string;
};

export type ServiceArea = {
  name: string;
  popular: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: string;
  label: string;
  description: string;
};

export const siteInfo: SiteInfo = {
  name: "Adelaide ma Driving School",
  tagline: "Your Path to Driving Confidence",
  phone: "0425448259",
  email: "info@adelaidedriving.com",
  address: "Southern Adelaide, SA",
  hours: "Mon-Fri, 7am - 6 pm",
  abn: "12 345 678 901",
  licenseNumber: "",
  established: "2013",
  socialLinks: {
    facebook: "https://facebook.com/adelaidemadriving",
    instagram: "https://instagram.com/adelaidemadriving",
    google: "https://g.page/adelaidemadriving"
  }
};

export const instructor: Instructor = {
  name: "Mr. Chhabilal Lamichhane",
  title: "Main Driving Instructor",
  image: "chhabi-dai-dp_l1j17l",
  bio: "Mr. Chhabilal Lamichhane is the main driving instructor at Adelaide MaDriving, known for calm, practical coaching that builds real confidence on the road.",
  specialties: [
    "Nervous & anxious learners",
    "Test preparation specialist",
    "Automatic & manual vehicles",
    "Refresher courses for returning drivers"
  ]
};


export const services: Service[] = [
  {
    id: 1,
    title: "Driving Lessons",
    subtitle: "Build Your Foundation",
    description: "Comprehensive one-on-one driving lessons tailored to your skill level and learning pace. From complete beginners to those needing a refresher.",
    longDescription: "Our driving lessons are designed to build your confidence and skills progressively. We start with the basics in quiet streets, then gradually introduce more challenging situations as you improve. Each lesson is customised to your specific needs and goals.",
    features: [
      "One-on-one personalised instruction",
      "Modern dual-control vehicle",
      "Flexible scheduling to suit you",
      "Pick-up & drop-off included",
      "Progress tracking & feedback",
      "All skill levels welcome"
    ],
    idealFor: ["Complete beginners", "Learner permit holders", "Those wanting to build confidence", "Refresher courses"]
  },
  {
    id: 2,
    title: "Test Preparation",
    subtitle: "Pass First Time",
    description: "Intensive test preparation program designed to give you the best chance of passing your VORT driving test on the first attempt.",
    longDescription: "Our test preparation program is specifically designed around the SA VORT (Vehicle On Road Test) requirements. We practice on actual test routes, cover all assessment criteria, and ensure you're completely prepared for test day.",
    features: [
      "Practice on actual test routes",
      "Mock driving tests included",
      "Hazard perception training",
      "Manoeuvres & parking practice",
      "Test day tips & strategies",
      "Pre-test confidence session"
    ],
    idealFor: ["Those ready for their test", "Failed test previously", "Want guaranteed preparation", "Test anxiety sufferers"]
  }
];

export const whyUsFeatures: WhyUsFeature[] = [
  {
    id: 1,
    title: "Local Expertise",
    description: "10+ years mastering every street, roundabout, and test route in Glenelg, Marion, Plympton and surrounding suburbs.",
    stat: "500+",
    statLabel: "Local Students",
    details: "We know exactly where the examiners take students, the tricky intersections, and the common mistakes to avoid."
  },
  {
    id: 2,
    title: "High Pass Rate",
    description: "Our proven teaching method and thorough preparation results in an exceptional first-time pass rate.",
    stat: "95%",
    statLabel: "Pass Rate",
    details: "Compared to the SA average of around 65%, our students are significantly more likely to pass first time."
  },
  {
    id: 3,
    title: "Flexible & Convenient",
    description: "We work around your schedule with pick-up from home, work, or school. 7 days a week availability.",
    stat: "7",
    statLabel: "Days/Week",
    details: "Early morning, after school, weekends - we'll find a time that works for you."
  },
  {
    id: 4,
    title: "Patient Teaching",
    description: "Calm, supportive instruction that builds confidence. Perfect for nervous or anxious learners.",
    stat: "100%",
    statLabel: "Supportive",
    details: "No yelling, no stress. Just patient, professional instruction at your pace."
  }
];

export const pricing: PricingPlan[] = [
  {
    id: 1,
    title: "Single Lesson",
    price: "100",
    currency: "$",
    duration: "60 minutes",
    description: "Perfect for building skills at your own pace",
    features: [
      "60-minute focused lesson",
      "Personalised skill building",
      "Flexible scheduling",
      "Pick-up & drop-off included",
      "Progress tracking",
      "Lesson notes provided"
    ],
    popular: false,
    buttonText: "Book Single Lesson"
  },
  {
    id: 2,
    title: "5 Lesson Package",
    price: "450",
    currency: "$",
    duration: "5 x 60 minutes",
    description: "Great value for consistent learning",
    features: [
      "5 x 60-minute lessons",
      "Save $50 vs single lessons",
      "Flexible scheduling",
      "Pick-up & drop-off included",
      "Progress tracking",
      "Priority booking"
    ],
    popular: false,
    savings: "Save $50",
    buttonText: "Book 5 Lessons"
  },
  {
    id: 3,
    title: "Test Ready Package",
    price: "550",
    currency: "$",
    duration: "5 lessons + test prep",
    description: "Complete preparation for first-time pass",
    features: [
      "5 x 60-minute lessons",
      "Actual test route practice",
      "Hazard perception training",
      "Test day strategy session",
      "Priority booking",
      "Pass guarantee support"
    ],
    popular: true,
    savings: "Best Value",
    buttonText: "Get Test Ready"
  }
];

export const serviceAreas: ServiceArea[] = [
  { name: "Glenelg", popular: true },
  { name: "Brighton", popular: true },
  { name: "Marion", popular: true },
  { name: "Plympton", popular: true },
  { name: "Somerton Park", popular: false },
  { name: "Glenelg North", popular: false },
  { name: "Glenelg South", popular: false },
  { name: "Holdfast Bay", popular: false },
  { name: "Morphettville", popular: false },
  { name: "Camden Park", popular: false },
  { name: "Novar Gardens", popular: false },
  { name: "Warradale", popular: false }
];

export const faqs: FAQ[] = [
  {
    question: "How many lessons will I need before my test?",
    answer: "This varies for each learner. On average, complete beginners need 20-30 hours of professional instruction plus practice with a supervising driver. We'll assess your skills and give you an honest estimate."
  },
  {
    question: "Do you provide the car for the driving test?",
    answer: "Yes! You can use our modern, dual-control vehicle for your driving test at no extra charge when you book a lesson for test day."
  },
  {
    question: "What areas do you cover?",
    answer: "We service all of Southern Adelaide including Glenelg, Brighton, Marion, Plympton, Somerton Park, and surrounding suburbs. Pick-up and drop-off is included in all lessons."
  },
  {
    question: "Do you teach manual or automatic?",
    answer: "We currently teach in an automatic vehicle. Learning in an automatic allows you to focus on road skills without worrying about gear changes. You can always learn manual later!"
  },
  {
    question: "What if I need to cancel a lesson?",
    answer: "We understand plans change. Please give us at least 24 hours notice to reschedule without charge. Late cancellations may incur a fee."
  },
  {
    question: "I'm a nervous driver. Can you help?",
    answer: "Absolutely! Many of our students start out nervous or anxious. Mr. Lamichhane specialises in helping nervous learners build confidence with patient, supportive instruction. No pressure, no stress."
  }
];

export const stats: StatItem[] = [
  { value: "500+", label: "Students Taught", description: "Happy learners on the road" },
  { value: "95%", label: "First-Time Pass", description: "Above SA average of 65%" },
  { value: "10+", label: "Years Experience", description: "Teaching in Adelaide" },
  { value: "4.9★", label: "Google Rating", description: "From 200+ reviews" }
];
