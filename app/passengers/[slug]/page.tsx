import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import { passengerTypes, getPassengerBySlug } from '@/data/passenger-types';
import { destinationTypes } from '@/data/destination-types';
import { faqs } from '@/data/faqs';
import { CheckCircle, ChevronDown, Users } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

const heroImages: Record<string, string> = {
  'singles-cruise-insurance': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
  'couples-cruise-insurance': 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
  'family-cruise-insurance': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
  'seniors-cruise-insurance': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
  'pre-existing-medical-insurance': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80',
  'first-time-cruise-insurance': 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
  'multi-cruise-insurance': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  'annual-cruise-insurance': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
};

export async function generateStaticParams() {
  return passengerTypes.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pass = getPassengerBySlug(slug);
  if (!pass) return {};
  return {
    title: pass.heroTitle,
    description: pass.metaDescription,
    keywords: pass.focusKeyword,
    alternates: { canonical: `${SITE_URL}/passengers/${slug}/` },
    openGraph: {
      title: pass.heroTitle,
      description: pass.metaDescription,
      url: `${SITE_URL}/passengers/${slug}/`,
      images: [heroImages[slug] || heroImages['singles-cruise-insurance']],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  
  lines.forEach((line, i) => {
    if (line.startsWith('- ') || line.startsWith('* ')) {
      listItems.push(
        <li key={`li-${i}`} className="flex items-start gap-2 mb-2 text-gray-400 text-sm">
          <CheckCircle size={14} className="text-sky-400 mt-1 flex-shrink-0" />
          <span>{line.slice(2)}</span>
        </li>
      );
      return;
    }
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${i}`} className="mb-4 space-y-1">{listItems}</ul>);
      listItems = [];
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-sky-400 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className="font-semibold text-white mt-4 mb-2">{line.slice(2, -2)}</p>);
    } else if (line.trim()) {
      elements.push(<p key={i} className="text-gray-400 mb-4 leading-relaxed">{line}</p>);
    }
  });
  if (listItems.length > 0) elements.push(<ul key="ul-end" className="mb-4 space-y-1">{listItems}</ul>);
  return elements;
}

export default async function PassengerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pass = getPassengerBySlug(slug);
  if (!pass) notFound();

  const heroImage = heroImages[slug] || heroImages['singles-cruise-insurance'];
  const relatedFaqs = faqs.filter(f => f.category === 'Basic Coverage' || f.category === 'Medical Cover').slice(0, 4);

  const pageUrl = `${SITE_URL}/passengers/${slug}/`;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: pass.heroTitle,
    description: pass.seoDescription,
    provider: { '@id': `${SITE_URL}/#organization` },
    offers: { '@type': 'Offer', price: pass.avgPremium, priceCurrency: 'NZD' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Traveller Types', item: `${SITE_URL}/passengers/` },
      { '@type': 'ListItem', position: 3, name: pass.title, item: pageUrl },
    ],
  };

  const faqSchema = relatedFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: relatedFaqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`${pass.title} — cruise insurance`} className="w-full h-full object-cover" style={{ opacity: 0.80 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 50%, transparent 100%)" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/passengers/" className="hover:text-sky-400 transition-colors">Traveller Types</Link>
            <span>/</span>
            <span className="text-gray-300">{pass.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm px-3 py-1.5 rounded-full mb-4">
                <Users size={13} /> {pass.shortTitle}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pass.heroTitle}</h1>
              <p className="text-xl text-gray-300 mb-6">{pass.seoDescription}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pass.coverageHighlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-sky-400 flex-shrink-0" />
                    {h}
                  </div>
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
          <span>✓ Unlimited Medical</span>
          <span>✓ Emergency Evacuation</span>
          <span>✓ Cabin Confinement</span>
          <span>✓ 24hr Response</span>
          <span>✓ Instant Cover</span>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Coverage Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {pass.coverageHighlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-sky-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div>{renderContent(pass.content)}</div>

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

          <div className="space-y-6">
            <CompareCTA variant="sidebar" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Other Traveller Types</h3>
              <ul className="space-y-2">
                {passengerTypes.filter(p => p.slug !== slug).map(p => (
                  <li key={p.slug}>
                    <Link href={`/passengers/${p.slug}`}
                      className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      <span>{p.icon}</span> {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">By Destination</h3>
              <ul className="space-y-2">
                {destinationTypes.map(d => (
                  <li key={d.slug}>
                    <Link href={`/destinations/${d.slug}`}
                      className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      <span>{d.icon}</span> {d.title}
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
