import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import { destinationTypes, getDestinationBySlug } from '@/data/destination-types';
import { passengerTypes } from '@/data/passenger-types';
import { faqs } from '@/data/faqs';
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

const heroImages: Record<string, string> = {
  'domestic-cruise-insurance': 'https://images.unsplash.com/photo-1565087572596-4c843abdb99d?w=1920&q=80',
  'south-pacific-cruise-insurance': 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80',
  'australian-cruise-insurance': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80',
  'asian-cruise-insurance': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
  'european-cruise-insurance': 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&q=80',
  'international-cruise-insurance': 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
  'worldwide-cruise-insurance': 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80',
};

export async function generateStaticParams() {
  return destinationTypes.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return {};
  return {
    title: dest.heroTitle,
    description: dest.metaDescription,
    keywords: dest.focusKeyword,
    alternates: { canonical: `${SITE_URL}/destinations/${slug}` },
    openGraph: {
      title: dest.heroTitle,
      description: dest.metaDescription,
      url: `${SITE_URL}/destinations/${slug}`,
      images: [heroImages[slug] || heroImages['worldwide-cruise-insurance']],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(3)}</h2>;
    if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3">{line.slice(4)}</h3>;
    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold text-sky-400 mt-4 mb-1">{line.slice(2, -2)}</p>;
    if (line.startsWith('- ')) return <li key={i} className="text-gray-400 ml-4 flex items-start gap-2 mb-1"><CheckCircle size={14} className="text-sky-400 mt-1 flex-shrink-0" />{line.slice(2)}</li>;
    if (line.startsWith('| ')) return null; // skip table rows
    if (!line.trim()) return null;
    return <p key={i} className="text-gray-400 mb-4 leading-relaxed">{line}</p>;
  });
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const heroImage = heroImages[slug] || heroImages['worldwide-cruise-insurance'];
  const relatedFaqs = faqs.filter(f => f.category === 'Destinations' || f.category === 'Basic Coverage').slice(0, 4);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/destinations/${slug}/#service`,
    name: dest.heroTitle,
    description: dest.seoDescription,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    offers: {
      '@type': 'Offer',
      price: dest.avgPremium,
      priceCurrency: 'NZD',
      description: `Cruise insurance for ${dest.title} from NZ$${dest.avgPremium}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${SITE_URL}/destinations/` },
      { '@type': 'ListItem', position: 3, name: dest.title, item: `${SITE_URL}/destinations/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" style={{ opacity: 0.80 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 50%, transparent 100%)" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/destinations/" className="hover:text-sky-400 transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-gray-300">{dest.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm px-3 py-1.5 rounded-full mb-4">
                <MapPin size={13} /> {dest.shortTitle}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{dest.heroTitle}</h1>
              <p className="text-xl text-gray-300 mb-6">{dest.seoDescription}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {dest.coverageHighlights.slice(0, 4).map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-sky-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                {dest.keyRisks.map((risk, i) => (
                  <p key={i} className="text-sm text-yellow-200/80 mb-1 last:mb-0">⚠️ {risk}</p>
                ))}
              </div>
            </div>
            <div>
              <CompareCTA variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* USP Bar */}
      <div className="bg-sky-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 text-white text-sm">
          <span>✓ Unlimited Medical Cover</span>
          <span>✓ Emergency Evacuation</span>
          <span>✓ Cabin Confinement</span>
          <span>✓ Pre-Existing Conditions</span>
          <span>✓ Free Quotes</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Coverage highlights */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">What&apos;s Covered</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dest.coverageHighlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-sky-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="prose-cruise">
              {renderContent(dest.content)}
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {relatedFaqs.map((faq, i) => (
                  <details key={i} className="bg-slate-800 rounded-xl border border-slate-700 group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:text-sky-400 transition-colors">
                      {faq.question}
                      <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-slate-700 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CompareCTA variant="sidebar" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Other Destinations</h3>
              <ul className="space-y-2">
                {destinationTypes.filter(d => d.slug !== slug).map(d => (
                  <li key={d.slug}>
                    <Link href={`/destinations/${d.slug}`}
                      className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      <span>{d.icon}</span> {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">By Traveller Type</h3>
              <ul className="space-y-2">
                {passengerTypes.map(p => (
                  <li key={p.slug}>
                    <Link href={`/passengers/${p.slug}`}
                      className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      <span>{p.icon}</span> {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
