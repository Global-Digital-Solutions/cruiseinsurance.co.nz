import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { landingPages, getLandingPageBySlug } from '@/data/landing-pages';
import { providers } from '@/data/providers';
import CompareCTA from '@/components/CompareCTA';
import { CheckCircle } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export function generateStaticParams() {
  return landingPages.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${SITE_URL}/nz-cruise-insurance/${page.slug}/` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/nz-cruise-insurance/${page.slug}/`,
      images: [{ url: page.heroImage, width: 1920, height: 1080, alt: page.title }],
    },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) notFound();

  const pageUrl = `${SITE_URL}/nz-cruise-insurance/${page.slug}/`;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    dateModified: '2026-05-30',
    publisher: { '@type': 'Organization', name: 'CruiseInsurance.co.nz', url: SITE_URL },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: page.title, item: pageUrl },
    ],
  };

  const faqSchema = page.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden min-h-[300px] flex items-end">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={page.heroImage} alt="" className="w-full h-full object-cover" style={{ opacity: 0.75 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.55) 60%, rgba(15,23,42,0.20) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 w-full">
          <nav className="flex items-center gap-2 text-sm text-sky-300 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">{page.heroHeading}</h1>
          <p className="text-gray-200 text-lg max-w-2xl mb-6">{page.intro}</p>
          <Link href="/compare/" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Compare Providers →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Sections */}
            <div className="space-y-10 mb-12">
              {page.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-1 h-7 bg-sky-500 rounded-full flex-shrink-0 inline-block" />
                    {s.heading}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Provider quick-links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-sky-500 rounded-full flex-shrink-0 inline-block" />
                Compare Providers
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {providers.map(p => (
                  <a key={p.slug} href={p.quoteUrl} target="_blank" rel="noopener noreferrer nofollow"
                    className="bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500/50 p-4 flex items-center justify-between group transition-colors">
                    <div>
                      <p className="font-semibold text-white group-hover:text-sky-400 transition-colors">{p.name}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-amber-400 text-xs">★</span>
                        <span className="text-xs text-gray-400">{p.rating.toFixed(1)} · {p.avgPremium}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-400 group-hover:text-sky-300 whitespace-nowrap">Quote →</span>
                  </a>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/compare/" className="block w-full text-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 rounded-xl transition-colors">
                  See Full Side-by-Side Comparison →
                </Link>
              </div>
            </div>

            {/* FAQs */}
            {page.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-1 h-7 bg-sky-500 rounded-full flex-shrink-0 inline-block" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {page.faqs.map((faq, i) => (
                    <details key={i} className="bg-slate-800 rounded-xl border border-slate-700 group hover:border-sky-500/40 transition-colors">
                      <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium">
                        {faq.q}
                        <span className="text-sky-400 font-black text-xl ml-3 flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                      </summary>
                      <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-slate-700 pt-4">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CompareCTA variant="sidebar" />
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">More Guides</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/nz-cruise-insurance/cheap-cruise-insurance/', label: 'Cheap Cruise Insurance' },
                  { href: '/nz-cruise-insurance/best-cruise-insurance-nz/', label: 'Best Cruise Insurance' },
                  { href: '/nz-cruise-insurance/cruise-travel-insurance/', label: 'Cruise Travel Insurance' },
                  { href: '/nz-cruise-insurance/senior-cruise-insurance/', label: 'Senior Cruise Insurance' },
                  { href: '/nz-cruise-insurance/family-cruise-insurance/', label: 'Family Cruise Insurance' },
                  { href: '/compare/', label: 'Compare All Providers →' },
                ].filter(l => l.href !== `/nz-cruise-insurance/${page.slug}/`).map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-sky-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Why Compare With Us</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex gap-2"><CheckCircle size={13} className="text-sky-400 mt-0.5 flex-shrink-0" />Independent — not tied to any insurer</li>
                <li className="flex gap-2"><CheckCircle size={13} className="text-sky-400 mt-0.5 flex-shrink-0" />Cruise-specific comparison only</li>
                <li className="flex gap-2"><CheckCircle size={13} className="text-sky-400 mt-0.5 flex-shrink-0" />All providers are regulated NZ insurers</li>
                <li className="flex gap-2"><CheckCircle size={13} className="text-sky-400 mt-0.5 flex-shrink-0" />No broker fees — direct to insurer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
