export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export interface WeddingEvent {
  id: string;
  title: string;
  tamilTitle: string;
  date: string;
  day: string;
  time: string;
  icon: 'PartyPopper' | 'Heart';
  description: string;
}

export interface Blessing {
  tamil: string;
  translation: string;
}

export interface PersonInfo {
  name: string;
  fullName: string;
  initial: string;
  qualification: string;
  workplace: string;
  designation?: string;
}

export interface VenueInfo {
  name: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  fullAddress: string;
  mapUrl: string;
  embedUrl: string;
  lat: number;
  lng: number;
}

export interface InvitationHost {
  father: string;
  mother: string;
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
}
