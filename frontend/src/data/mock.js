// Mock data for Adelaide ma Driving landing page

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Glenelg",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "First time pass! The instructor knew every street corner in Glenelg. The mock test on Marion Road was exactly like my actual test. Can't recommend enough!",
    rating: 5,
    passedOn: "First attempt"
  },
  {
    id: 2,
    name: "James Thompson",
    location: "Brighton",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "As someone who was terrified of driving, the patient approach made all the difference. Now I'm confidently driving to work every day. Life-changing!",
    rating: 5,
    passedOn: "First attempt"
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Somerton Park",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    quote: "The test package was worth every dollar. Practiced the exact routes, learned all the tricky roundabouts near Marion. Passed with zero faults!",
    rating: 5,
    passedOn: "First attempt"
  }
];

export const services = [
  {
    id: 1,
    title: "Driving Lessons",
    description: "Build rock-solid driving skills with personalised one-on-one lessons tailored to your pace, goals, and learning style.",
    features: ["One-on-one expert instruction", "All skill levels from beginner to advanced", "Flexible scheduling that works for you", "Modern dual-control vehicle"]
  },
  {
    id: 2,
    title: "Test Preparation",
    description: "Master hazard perception and practical driving skills with our proven test prep program designed for first-time passes.",
    features: ["Full mock driving tests", "Hazard perception mastery", "Actual test route practice", "Pre-test confidence coaching"]
  }
];

export const whyUsFeatures = [
  {
    id: 1,
    title: "Glenelg Local Expert",
    description: "10+ years mastering every street, roundabout, and test route in Southern Adelaide.",
    stat: "500+",
    statLabel: "Local Students"
  },
  {
    id: 2,
    title: "95% First-Time Pass",
    description: "Our proven method gets results. Most students pass on their very first attempt.",
    stat: "95%",
    statLabel: "Pass Rate"
  },
  {
    id: 3,
    title: "Flexible & Convenient",
    description: "Pick-up from home, work, or school. 7 days a week. Your schedule, your choice.",
    stat: "7",
    statLabel: "Days/Week"
  }
];

export const pricing = [
  {
    id: 1,
    title: "Single Lesson",
    price: "$100",
    duration: "60 minutes",
    description: "Perfect for building skills at your own pace",
    features: ["60-minute focused lesson", "Personalised skill building", "Flexible scheduling", "Pick-up & drop-off included", "Progress tracking"],
    popular: false
  },
  {
    id: 2,
    title: "Test Success Package",
    price: "$450",
    duration: "5 lessons + mock test",
    description: "Complete preparation for first-time pass",
    features: ["5 x 60-minute lessons", "Full mock driving test", "Real test route practice", "Hazard perception training", "Test day strategy session", "Priority booking"],
    popular: true,
    savings: "Save $100"
  }
];

export const contactInfo = {
  phone: "0412 345 678",
  email: "lessons@adelaidemadriving.com.au",
  areas: ["Glenelg", "Brighton", "Marion", "Plympton", "Somerton Park", "Holdfast Bay"]
};

// Sample 1-hour circular driving route in Plympton/Marion/Glenelg area
export const drivingRoute = {
  name: "Southern Adelaide Mastery Route",
  duration: "60 minutes",
  distance: "22 km",
  description: "Master the most common test routes and challenging intersections",
  waypoints: [
    {
      id: 1,
      name: "Start: Plympton",
      coords: [-34.9558, 138.5536],
      type: "start",
      description: "Residential start - basic maneuvers",
      skills: ["Mirror checks", "Indicator use", "Speed control"]
    },
    {
      id: 2,
      name: "Marion Road South",
      coords: [-34.9750, 138.5561],
      type: "waypoint",
      description: "Main road driving",
      skills: ["Lane changes", "Traffic flow", "Speed limits"]
    },
    {
      id: 3,
      name: "Westfield Marion",
      coords: [-34.9889, 138.5561],
      type: "waypoint",
      description: "Complex intersections & parking",
      skills: ["Roundabouts", "Give way rules", "Parking"]
    },
    {
      id: 4,
      name: "Brighton Road",
      coords: [-34.9920, 138.5250],
      type: "waypoint",
      description: "Coastal road driving",
      skills: ["Merging", "Speed zones", "Pedestrians"]
    },
    {
      id: 5,
      name: "Glenelg Beach",
      coords: [-34.9817, 138.5150],
      type: "waypoint",
      description: "Beachside practice",
      skills: ["Parallel parking", "U-turns", "Observation"]
    },
    {
      id: 6,
      name: "Anzac Highway",
      coords: [-34.9600, 138.5300],
      type: "waypoint",
      description: "Multi-lane highway",
      skills: ["Highway merging", "Lane discipline", "Speed"]
    },
    {
      id: 7,
      name: "Return: Plympton",
      coords: [-34.9558, 138.5536],
      type: "end",
      description: "Complete the loop",
      skills: ["Final maneuvers", "Confidence check", "Debrief"]
    }
  ],
  // Detailed route path following actual roads (for realistic Uber-like display)
  routePath: [
    // Start at Plympton
    [-34.9558, 138.5536],
    // Head south on Marion Road
    [-34.9580, 138.5540],
    [-34.9620, 138.5550],
    [-34.9680, 138.5558],
    [-34.9750, 138.5561],
    // Continue to Westfield Marion
    [-34.9800, 138.5561],
    [-34.9850, 138.5561],
    [-34.9889, 138.5561],
    // Turn west on Sturt Road toward Brighton
    [-34.9889, 138.5500],
    [-34.9900, 138.5400],
    [-34.9920, 138.5300],
    [-34.9920, 138.5250],
    // Head north on Brighton Road to Glenelg
    [-34.9880, 138.5200],
    [-34.9850, 138.5170],
    [-34.9817, 138.5150],
    // Along Glenelg esplanade
    [-34.9780, 138.5140],
    [-34.9740, 138.5145],
    // Turn onto Anzac Highway heading east
    [-34.9700, 138.5180],
    [-34.9650, 138.5240],
    [-34.9600, 138.5300],
    // Continue on Anzac Highway
    [-34.9580, 138.5380],
    [-34.9570, 138.5450],
    // Return to Plympton
    [-34.9560, 138.5500],
    [-34.9558, 138.5536]
  ],
  highlights: [
    "Practice actual VORT test routes",
    "Master 6 different roundabout types",
    "Tackle peak hour traffic scenarios",
    "Perfect parallel & angle parking"
  ]
};
