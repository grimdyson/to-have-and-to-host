type NavItem = {
  id: "details" | "schedule" | "travel" | "dress-code" | "rsvp" | "faqs";
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
  link?: {
    href: string;
    label: string;
  };
};

type SiteMetadata = {
  language: string;
  title: string;
  description: string;
  siteUrl: string | null;
  image: string | null;
  robots: string;
};

const couple = {
  partnerOne: "Lauren",
  partnerTwo: "Ipsum",
  fullNames: "Lauren Example and Ipsum Example",
  displayName: "Lauren & Ipsum"
} as const;

const date = {
  display: "Saturday, 18 October 2027",
  iso: "2027-10-18"
} as const;

const venue = {
  name: "Your Venue",
  city: "Your City, Region",
  address: "Add your venue address",
  image: {
    src: "/wesley-tingey-9INtcavGkko-unsplash.jpg",
    alt: "Wedding guests celebrating together on the dance floor"
  },
  maps: {
    google: "https://www.google.com/maps/search/?api=1&query=Your%20Venue",
    apple: "https://maps.apple.com/?q=Your%20Venue"
  }
} as const;

const rsvp = {
  eyebrow: "RSVP",
  title: "Kindly reply",
  deadline: "Friday, 3 September 2027",
  recipientEmail: "rsvp@example.com",
  emailSubject: "Wedding RSVP",
  collectContactEmail: true,
  collectPartySize: true,
  attendanceOptions: {
    attending: "Joyfully attending",
    notAttending: "Unable to attend"
  }
} as const;

const metadata: SiteMetadata = {
  language: "en-AU",
  title: `${couple.displayName} | Wedding`,
  description: `Wedding details, schedule, travel information and RSVP for ${couple.fullNames}.`,
  siteUrl: null,
  image: null,
  robots: "noindex, nofollow, noarchive"
};

export const wedding = {
  couple,
  date,
  hero: {
    eyebrow: "Celebrate with us",
    introduction: "Join us for dinner, drinks and dancing as we celebrate our wedding. There will be good food, plenty of stories and room for everyone on the dance floor. Come ready to raise a glass and make some memories.",
    image: {
      src: "/wesley-tingey-mk_k0IEw7b0-unsplash.jpg",
      alt: "Newlyweds kissing in the back seat of a red car"
    }
  },
  imagery: {
    useColour: true
  },
  venue,
  navigation: [
    { id: "details", label: "Details" },
    { id: "schedule", label: "Schedule" },
    { id: "travel", label: "Travel" },
    { id: "dress-code", label: "Dress code" },
    { id: "rsvp", label: "RSVP" },
    { id: "faqs", label: "FAQs" }
  ] satisfies NavItem[],
  details: {
    eyebrow: "The gathering",
    title: "A celebration with our favourite people.",
    items: [
      { label: "Venue", value: venue.name },
      { label: "Where", value: venue.city },
      { label: "When", value: date.display },
      { label: "RSVP by", value: rsvp.deadline }
    ]
  },
  schedule: {
    eyebrow: "Schedule",
    title: "The day",
    introduction: "Times may shift a little, but this is the shape of the celebration.",
    items: [
      {
        time: "3:30 PM",
        title: "Guest arrival",
        description: "Arrive, settle in and find your seat."
      },
      {
        time: "4:00 PM",
        title: "Ceremony",
        description: "The ceremony begins."
      },
      {
        time: "5:00 PM",
        title: "Drinks and canapés",
        description: "Stay close for drinks, canapés and photographs."
      },
      {
        time: "6:30 PM",
        title: "Dinner and dancing",
        description: "Join us for dinner, speeches and dancing."
      },
      {
        time: "11:00 PM",
        title: "Farewell",
        description: "Carriages and a final goodnight."
      }
    ]
  },
  travel: {
    eyebrow: "Travel",
    title: "Getting there",
    introduction: "Everything guests need for a smooth arrival and an easy trip home.",
    notes: [
      {
        title: "Venue",
        description: `The ceremony and reception will both be held at ${venue.name}.`
      },
      {
        title: "Transport",
        description: "Add your shuttle, taxi, rideshare or public transport advice here."
      },
      {
        title: "Parking",
        description: "Add parking instructions and any access details guests should know."
      },
      {
        title: "Staying nearby",
        description: "Suggest a few convenient areas or accommodation options for the weekend."
      }
    ]
  },
  dressCode: {
    eyebrow: "Dress code",
    title: "What to wear",
    name: "Your dress code",
    description: "Describe the level of formality in one clear sentence, including any practical advice for the venue.",
    guidance: {
      title: "A little guidance",
      description: "Add concise examples that help guests dress with confidence without assigning clothing by gender."
    },
    considerations: [
      {
        title: "Keep in mind",
        description: "Mention grass, weather, cultural traditions or other practical considerations here."
      }
    ],
    inspirationLink: {
      enabled: true,
      href: "https://au.pinterest.com/search/pins/?q=black%20tie%20wedding%20outfit",
      label: "View outfit inspiration"
    }
  },
  rsvp,
  faqs: {
    eyebrow: "FAQs",
    title: "Helpful answers",
    introduction: "The practical details guests tend to ask about most.",
    items: [
      {
        question: "What time should I arrive?",
        answer: "Please arrive by 3:30 PM so everyone can be seated before the ceremony."
      },
      {
        question: "What is the dress code?",
        answer: "Add a short summary here, with the full guidance in the dress code section.",
        link: { href: "#dress-code", label: "Dress code" }
      },
      {
        question: "Can dietary requirements be accommodated?",
        answer: "Yes. Include any allergies, intolerances or dietary requirements in your RSVP.",
        link: { href: "#rsvp", label: "RSVP" }
      },
      {
        question: "Is the venue accessible?",
        answer: "Add confirmed accessibility information and a contact option for guests who need more detail."
      },
      {
        question: "Are children invited?",
        answer: "Clearly explain your plans here, using the same wording as your invitations."
      },
      {
        question: "Is there parking?",
        answer: "Add the confirmed parking arrangements here.",
        link: { href: "#travel", label: "Travel" }
      }
    ] satisfies FaqItem[]
  },
  footer: {
    credit: {
      prefix: "Website designed by",
      label: "timdyson.com",
      href: "https://timdyson.com"
    }
  },
  metadata,
  theme: {
    defaultMode: "system" as "system" | "light" | "dark"
  },
  privacy: {
    passwordGateEnabled: true
  }
} as const;
