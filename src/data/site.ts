export type NavItem = {
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

export const wedding = {
  couple: {
    partnerOne: "Lauren",
    partnerTwo: "Ipsum",
    fullNames: "Lauren Example and Ipsum Example",
    displayName: "Lauren & Ipsum"
  },
  date: {
    display: "Saturday, 18 October 2027",
    iso: "2027-10-18"
  },
  hero: {
    eyebrow: "Celebrate with us",
    introduction: "Join us for dinner, drinks and dancing as we celebrate our wedding. There will be good food, plenty of stories and room for everyone on the dance floor. Come ready to raise a glass and make some memories.",
    image: {
      src: "/wedding-placeholder.jpg",
      alt: "A couple kissing in a grass field in a black-and-white photograph"
    }
  },
  imagery: {
    useColour: false
  },
  venue: {
    name: "Your Venue",
    city: "Your City, Region",
    address: "Add your venue address",
    timezone: "Australia/Sydney",
    image: {
      src: "/venue-placeholder.jpg",
      alt: "A white garden venue framed by tall trees"
    },
    maps: {
      google: "https://www.google.com/maps/search/?api=1&query=Your%20Venue",
      apple: "https://maps.apple.com/?q=Your%20Venue"
    }
  },
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
      { label: "Venue", value: "Your Venue" },
      { label: "Where", value: "Your City, Region" },
      { label: "When", value: "Saturday, 18 October 2027" },
      { label: "RSVP by", value: "Friday, 3 September 2027" }
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
        description: "The ceremony and reception will both be held at Your Venue."
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
    notes: [
      {
        title: "A little guidance",
        description: "Add concise examples that help guests dress with confidence without assigning clothing by gender."
      },
      {
        title: "Keep in mind",
        description: "Mention grass, weather, cultural traditions or other practical considerations here."
      }
    ],
    inspirationLink: {
      enabled: false,
      href: "https://www.pinterest.com/",
      label: "View outfit inspiration"
    }
  },
  rsvp: {
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
  },
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
    ] as FaqItem[]
  },
  footer: {
    credit: {
      prefix: "Website designed by",
      label: "timdyson.com",
      href: "https://timdyson.com"
    }
  },
  metadata: {
    language: "en-AU",
    title: "Lauren & Ipsum | Wedding",
    description: "Wedding details, schedule, travel information and RSVP for Lauren and Ipsum.",
    image: "/og-image.jpg",
    robots: "noindex, nofollow, noarchive"
  },
  theme: {
    defaultMode: "system" as "system" | "light" | "dark"
  },
  privacy: {
    passwordGateEnabled: true
  }
} as const;

export type Wedding = typeof wedding;
