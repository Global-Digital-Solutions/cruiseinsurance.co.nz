import type { Metadata } from 'next';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import TrustBlock from '@/components/TrustBlock';
import HowItWorks from '@/components/HowItWorks';
import ProviderLogo from '@/components/ProviderLogo';
import { destinationTypes } from '@/data/destination-types';
import { passengerTypes } from '@/data/passenger-types';
import { blogPosts } from '@/data/blog-posts';
import { providers } from '@/data/providers';
import { faqs } from '@/data/faqs';
import { ChevronDown, Anchor, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'CruiseInsurance.co.nz | NZ Cruise Insurance Specialists',
  description: "NZ's cruise insurance specialists. Expert cover for singles, couples, families & seniors. Unlimited medical, cabin confinement & evacuation. Free quotes from NZ$180.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'CruiseInsurance.co.nz | NZ Cruise Insurance Specialists',
    description: "NZ's cruise insurance specialists. Unlimited medical, cabin confinement & evacuation from NZ$180.",
    url: SITE_URL,
    images: ['https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80'],
  },
};

const coverageItems = [
  {
    icon: '🏥',
    title: 'Unlimited Medical Expenses',
    desc: 'Full coverage for all onboard and shoreside medical treatment — no dollar caps.',
  },
  {
    icon: '🚁',
    title: 'Emergency Evacuation',
    desc: 'Helicopter or fixed-wing evacuation from your ship to medical facilities. Costs $15,000–$150,000+ covered in full.',
  },
  {
    icon: '🛏️',
    title: 'Cabin Confinement',
    desc: 'Daily cash benefit when illness keeps you confined to your cabin and missing excursions.',
  },
  {
    icon: '✈️',
    title: 'Trip Cancellation',
    desc: 'Full reimbursement of pre-paid non-refundable costs if you can\'t travel due to illness or covered events.',
  },
  {
    icon: '⚓',
    title: 'Missed Port Departure',
    desc: 'Cover to catch your ship at the next port if you miss embarkation due to flight delays.',
  },
  {
    icon: '🌏',
    title: 'Medical Repatriation',
    desc: 'Air ambulance transport back to NZ for ongoing treatment after an overseas medical emergency.',
  },
  {
    icon: '💊',
    title: 'Pre-Existing Conditions',
    desc: 'Most conditions can be covered with full disclosure — heart disease, diabetes, respiratory, and more.',
  },
  {
    icon: '👜',
    title: 'Luggage & Belongings',
    desc: 'Cover for lost, stolen, or damaged baggage and personal effects throughout your voyage.',
  },
];

export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    name: 'CruiseInsurance.co.nz — NZ Cruise Insurance Specialists',
    description: "NZ's cruise insurance specialists. Compare cruise cover for every destination and traveller type.",
    url: SITE_URL,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Cruise Insurance Destinations',
      itemListElement: destinationTypes.map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: d.title,
        url: `${SITE_URL}/destinations/${d.slug}`,
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 5).map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80" alt="" className="w-full h-full object-cover" style={{ opacity: 0.90 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.45) 55%, rgba(15,23,42,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.70) 0%, transparent 40%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm px-4 py-2 rounded-full mb-6">
                <Anchor size={14} />
                NZ&apos;s Cruise Insurance Specialists
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cruise insurance.
                <span className="text-sky-400"> Simplified.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Compare cruise insurance from NZ&apos;s top providers. Unlimited medical, cabin confinement, emergency evacuation — from{' '}
                <span className="text-sky-400 font-semibold">NZ$180</span>.
              </p>

              <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-sky-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Critical:</strong> Even domestic NZ cruises require cruise insurance.
                    Once your ship departs port, public healthcare no longer covers onboard medical expenses.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/compare/"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Get Free Quotes →
                </Link>
                <Link href="/cruise-insurance-guide"
                  className="border border-slate-600 hover:border-sky-500 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors">
                  Read the Guide
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── TRUST BLOCK ── */}
      <TrustBlock />

      {/* ── COVERAGE GRID ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1580371568735-6c1dc39a009d?w=1600&q=80" alt="" className="w-full h-full object-cover" style={{ opacity: 0.80 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 50%, transparent 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Cruise Insurance Covers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cruise-specific cover for the risks that standard travel insurance doesn&apos;t adequately protect against.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coverageItems.map(item => (
              <div key={item.title}
                className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-sky-500/40 transition-colors group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS GRID ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80" alt="" className="w-full h-full object-cover" style={{ opacity: 0.80 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 50%, transparent 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Insurance by Destination</h2>
            <p className="text-gray-400">Every cruise destination has unique risks — get cover tailored to where you&apos;re sailing.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {destinationTypes.map(dest => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`}
                className="bg-slate-900 rounded-xl p-5 border border-slate-700 hover:border-sky-500/50 transition-all hover:-translate-y-0.5 group">
                <div className="text-3xl mb-3">{dest.icon}</div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors">{dest.title}</h3>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{dest.description}</p>
                <div className="text-sky-400 text-xs font-medium">From ~NZ${dest.avgPremium} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PASSENGERS GRID ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="" className="w-full h-full object-cover" style={{ opacity: 0.80 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 50%, transparent 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Cover for Every Traveller</h2>
            <p className="text-gray-400">Specialist cruise insurance tailored to who you are and how you travel.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {passengerTypes.map(pass => (
              <Link key={pass.slug} href={`/passengers/${pass.slug}`}
                className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-sky-500/50 transition-all hover:-translate-y-0.5 group">
                <div className="text-3xl mb-3">{pass.icon}</div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors">{pass.title}</h3>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{pass.description}</p>
                <div className="text-sky-400 text-xs font-medium">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <HowItWorks />

      {/* ── PROVIDER LOGOS — scrolling marquee ── */}
      <section className="py-10 bg-slate-800 border-y border-slate-700 overflow-hidden">
        <p className="text-center text-gray-500 text-sm mb-6">We compare cruise insurance from NZ&apos;s leading providers</p>
        <style>{`
          @keyframes marquee-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { animation: marquee-left 22s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="relative flex">
          <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
            {[...providers, ...providers].map((p, i) => (
              <ProviderLogo key={`${p.slug}-${i}`} name={p.name} domain={p.logo} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SNIPPET ── */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Common Questions</h2>
          <div className="space-y-3">
            {faqs.slice(0, 5).map((faq, i) => (
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
          <div className="text-center mt-8">
            <Link href="/faqs" className="text-sky-400 hover:text-sky-300 font-medium">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <Link href="/blog" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 9).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500/40 transition-colors group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded">{post.category}</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <CompareCTA variant="banner" heading="Ready to Compare Cruise Insurance?" subtext="Compare medical cover, cabin confinement, missed port and cancellation limits across the leading cruise insurance providers." />

      {/* ── CRITICAL INFO ── */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield size={20} className="text-sky-400" />
            <h3 className="font-semibold text-white">Why You Need Cruise-Specific Insurance</h3>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Standard travel insurance is designed for land-based holidays. Cruise holidays carry unique risks —
            cabin confinement, missed port departures, maritime medical evacuations — that require dedicated cruise cover.
            Don&apos;t assume your existing travel insurance protects you onboard.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            {[
              'Unlimited medical cover',
              'Cabin confinement included',
              'Missed port departure',
              'Emergency evacuation',
              'Pre-existing conditions',
            ].map(item => (
              <span key={item} className="flex items-center gap-1">
                <CheckCircle size={14} className="text-sky-400" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
