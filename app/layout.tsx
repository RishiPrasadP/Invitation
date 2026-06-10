import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, Cinzel } from 'next/font/google';
import ScrollManager from '@/components/ScrollManager';
import './globals.css';

const greatVibes = Great_Vibes({

  subsets: ["latin"],

  weight: "400",

});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-family',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel-family',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nadhisha & Kathiravan | Wedding Invitation',
  description:
    'You are cordially invited to celebrate the wedding of A. Nadhisha and S. Kathiravan on June 24, 2026 at Pavithra Park Thirumana Mandapam, Chennai.',
  keywords: [
    'wedding',
    'invitation',
    'Nadhisha',
    'Kathiravan',
    'Chennai',
    'Tamil wedding',
  ],
  authors: [{ name: 'Nadhisha & Kathiravan' }],
  openGraph: {
    title: 'Nadhisha & Kathiravan | Wedding Invitation',
    description:
      'Join us in celebrating the union of Nadhisha and Kathiravan. June 24, 2026 • Chennai',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nadhisha & Kathiravan Wedding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadhisha & Kathiravan | Wedding Invitation',
    description:
      'Join us in celebrating the union of Nadhisha and Kathiravan. June 24, 2026 • Chennai',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://nadhisha-weds-kathiravan.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${greatVibes} ${playfair.variable} ${cinzel.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Wedding of Nadhisha & Kathiravan',
              startDate: '2026-06-24T06:00:00+05:30',
              endDate: '2026-06-24T07:30:00+05:30',
              eventAttendanceMode:
                'https://schema.org/OfflineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: 'Pavithra Park Thirumana Mandapam',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'No.3, 200 Feet Road, Pallavaram–Thoraipakkam Radial Road',
                  addressLocality: 'Kovilambakkam',
                  addressRegion: 'Chennai',
                  postalCode: '600129',
                  addressCountry: 'IN',
                },
              },
              description:
                'The wedding ceremony of A. Nadhisha and S. Kathiravan',
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-ivory font-[family-name:var(--font-playfair-family)] antialiased text-charcoal">
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
