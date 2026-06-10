export const WEDDING_DATE = new Date('2026-06-24T06:00:00+05:30');
export const RECEPTION_DATE = new Date('2026-06-23T18:00:00+05:30');

export const BRIDE = {
  name: 'A. Nadhisha',
  fullName: 'Nadhisha',
  initial: 'N',
  qualification: 'B.E CSE',
  workplace: 'IBM Chennai',
};

export const GROOM = {
  name: 'S. Kathiravan',
  fullName: 'Kathiravan',
  initial: 'K',
  qualification: 'B.E CSE',
  designation: 'Audit Inspector',
  workplace: 'Government of Tamil Nadu',
};
export const SISTER = {
  name: 'A.Harisha',
}
export const PARENTS = {
  father: 'Mr. T. Ayyappan',
  mother: 'Mrs. A. Tamilmani',
};

export const VENUE = {
  name: 'Pavithra Park Thirumana Mandapam',
  addressLine1: 'No.3, 200 Feet Road',
  addressLine2: 'Pallavaram–Thoraipakkam Radial Road',
  addressLine3: 'Kovilambakkam',
  city: 'Chennai – 129',
  fullAddress:
    'No.3, 200 Feet Road, Pallavaram–Thoraipakkam Radial Road, Kovilambakkam, Chennai – 129',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Pavithra+Park+Thirumana+Mandapam+Kovilambakkam+Chennai',
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d80.2059!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d90b5c5c5c5%3A0x0!2sPavithra%20Park%20Thirumana%20Mandapam!5e0!3m2!1sen!2sin',
  lat: 12.9279,
  lng: 80.2059,
};

export const EVENTS = [
  {
    id: 'reception',
    title: 'Reception',
    tamilTitle: 'வரவேற்பு',
    date: 'June 23, 2026',
    day: 'Tuesday',
    time: '6:00 PM onwards',
    icon: 'PartyPopper' as const,
    description: 'Join us for an evening of celebration, dinner, and joy.',
  },
  {
    id: 'wedding',
    title: 'Wedding Ceremony',
    tamilTitle: 'திருமணம்',
    date: 'June 24, 2026',
    day: 'Wednesday',
    time: '6:00 AM – 7:30 AM',
    icon: 'Heart' as const,
    description:
      'Witness the sacred union as we begin our journey together.',
  },
];

export const BLESSINGS = [
  {
    tamil: 'அன்பிலார் எல்லாம் தமக்குரியர்; அன்புடையார் என்பும் உரியர் பிறர்க்கு',
    translation:
      'Those who possess love belong not only to themselves but to the whole world.',
  },
  {
    tamil: 'அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை பண்பும் பயனும் அது',
    translation:
      'Love and virtue are the foundation of a meaningful married life.',
  },
  {
    tamil: 'ஆல்போல் தழைத்து அருகுபோல் வேரூன்றி நலமுடன் வாழ்க',
    translation:
      'May your union flourish, remain steadfast, and prosper through the years.',
  },
];

export const SITE_CONFIG = {
  title: 'Nadhisha & Kathiravan | Wedding Invitation',
  description:
    'You are cordially invited to celebrate the wedding of Nadhisha and Kathiravan on June 24, 2026 at Chennai.',
  url: 'https://nadhisha-weds-kathiravan.vercel.app',
  hashtag: '#NadhishaWedsKathiravan',
};
