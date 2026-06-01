import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CruiseInsurance.co.nz | NZ Cruise Insurance | Compare & Save',
    template: '%s | CruiseInsurance.co.nz',
  },
  description: 'NZ\'s cruise insurance specialists. Compare cruise cover for singles, couples, families & seniors. Unlimited medical, cabin confinement & evacuation from NZ$180.',
  keywords: 'cruise insurance NZ, cruise travel insurance, cabin confinement, medical evacuation, south pacific cruise insurance, seniors cruise insurance',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: SITE_URL,
    siteName: 'CruiseInsurance.co.nz',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
        width: 1920,
        height: 1080,
        alt: 'Cruise ship at sea — CruiseInsurance.co.nz',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  themeColor: '#0284c7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'InsuranceAgency'],
    '@id': `${SITE_URL}/#organization`,
    name: 'CruiseInsurance.co.nz',
    alternateName: 'Cover4You Cruise',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    description: 'NZ specialist cruise insurance comparison and referral service. We connect New Zealand cruisers with licensed insurance brokers to find the best cruise cover for their voyage.',
    telephone: '+6498859549',
    email: 'hello@cover4you.co.nz',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressRegion: 'Auckland',
      postalCode: '1010',
      addressCountry: 'NZ',
    },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/cruiseinsurancenz',
      'https://www.linkedin.com/company/cruiseinsurancenz',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'CruiseInsurance.co.nz',
    url: SITE_URL,
    description: 'NZ cruise insurance comparison. Unlimited medical, cabin confinement & evacuation from NZ$180.',
    inLanguage: 'en-NZ',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en-NZ">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745344450942342"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="bg-slate-900 text-white"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
      >
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
