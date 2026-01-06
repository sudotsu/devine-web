export type Location = {
  name: string;
  slug: string;
  localPain: string;
  localProof: string;
  landmark: string;
  serviceEmphasis: string;
  faqPair: { q: string; a: string };
};

export const locations: Location[] = [
  {
    name: "Dundee",
    slug: "dundee",
    localPain: "Historic homes in Dundee often have unique surfaces that demand extra care beyond generic cleaning sprays.",
    localProof: "Tanya has been preserving the luster of Dundee's wood floors and crown molding for over 5 years.",
    landmark: "Memorial Park",
    serviceEmphasis: "Deep Clean & Restoration",
    faqPair: {
      q: "Do you handle original hardwood floors in older Dundee homes?",
      a: "Yes, we use pH-neutral cleansers specifically designed for historic wood finishes."
    }
  },
  {
    name: "Blackstone",
    slug: "blackstone",
    localPain: "The fast-paced Blackstone life doesn't leave room for scrubbing grit out of modern apartment grout.",
    localProof: "We help Blackstone professionals maintain their aesthetic without sacrificing their weekends.",
    landmark: "The Cottonwood Hotel",
    serviceEmphasis: "Modern Minimalist Upkeep",
    faqPair: {
      q: "Can you accommodate building access for Blackstone apartments?",
      a: "We are experienced with fob-entry and building concierge protocols in the Blackstone district."
    }
  },
  {
    name: "Millard",
    slug: "millard",
    localPain: "Busy Millard families struggle to keep up with the daily chaos of kids, pets, and suburban life.",
    localProof: "We give Millard parents their Saturdays back by handling the deep scrubbing they never have time for.",
    landmark: "Zorinsky Lake",
    serviceEmphasis: "Family-Friendly Maintenance",
    faqPair: {
      q: "Are your cleaning products safe for Millard pets and kids?",
      a: "Absolutely. We use non-toxic, eco-friendly supplies safe for the whole family."
    }
  }
];
