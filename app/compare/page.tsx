import type { Metadata } from 'next';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import { providers } from '@/data/providers';
import { Star, CheckCircle, X } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Compare NZ Cruise Insurance Providers | Side-by-Side Comparison',
  description: 'Compare NZ cruise insurance providers side by side. Ratings, coverage, pricing, and key features from 1Cover, Cover-More, Southern Cross, and more.',
  alternates: { canonical: `${SITE_URL}/compare` },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(s => (
        <Star
          key={s}
          size={14}
          className={s <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
        />
      ))}
      <span className="text-sm text-gray-300 ml-1">{rating}</span>
    </div>
  );
}

export default function ComparePage() {
  const features = [
    'Unlimited Medical Cover',
    'Emergency Evacuation',
    'Cabin Confinement',
    'Missed Port Departure',
    'Trip Cancellation',
    'Pre-Existing Conditions',
    'Annual Multi-Trip',
    'Cruise-Specific Product',
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-800 border-b border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Compare Providers</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Compare NZ Cruise Insurance Providers</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Side-by-side comparison of NZ&apos;s leading cruise insurance providers — ratings, coverage, and pricing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Provider cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {providers.map(p => (
            <div key={p.slug} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-sky-500/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-white">{p.name}</h2>
                  <p className="text-xs text-gray-500">Est. {p.established}</p>
                </div>
                {p.cruiseSpecific && (
                  <span className="bg-sky-500/10 text-sky-400 text-xs px-2 py-0.5 rounded font-medium">
                    Cruise Specialist
                  </span>
                )}
              </div>

              <StarRating rating={p.rating} />
              <p className="text-xs text-gray-500 mt-1 mb-4">{p.reviewCount.toLocaleString()} reviews · Claims: {p.claimsRating}</p>

              <p className="text-sm text-gray-300 mb-4 italic">&ldquo;{p.keyFeature}&rdquo;</p>

              <div className="space-y-1.5 mb-4">
                {p.coverageHighlights.slice(0, 4).map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle size={12} className="text-sky-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {p.limitations.length > 0 && (
                <div className="border-t border-slate-700 pt-3 mb-4">
                  {p.limitations.map(l => (
                    <div key={l} className="flex items-center gap-2 text-xs text-gray-500">
                      <X size={11} className="text-gray-600 flex-shrink-0" />
                      {l}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sky-400 font-semibold text-sm">{p.avgPremium}</span>
                <Link href="/compare/"
                  className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Coverage Comparison Table</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800">
                <th className="text-left p-4 text-gray-400 font-medium min-w-[180px]">Feature</th>
                {providers.map(p => (
                  <th key={p.slug} className="text-center p-4 text-white font-semibold min-w-[130px]">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800/50'}>
                  <td className="p-4 text-gray-300">{feature}</td>
                  {providers.map(p => {
                    const covered = p.coverageHighlights.some(h =>
                      h.toLowerCase().includes(feature.toLowerCase().split(' ')[0]) ||
                      h.toLowerCase().includes(feature.toLowerCase().split(' ').pop()!)
                    ) || feature === 'Unlimited Medical Cover' || feature === 'Trip Cancellation';
                    const cruiseSpecific = feature === 'Cruise-Specific Product';
                    const val = cruiseSpecific ? p.cruiseSpecific : covered;
                    return (
                      <td key={p.slug} className="p-4 text-center">
                        {val
                          ? <CheckCircle size={16} className="text-sky-400 mx-auto" />
                          : <span className="text-gray-600 text-lg">—</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr className="bg-slate-800">
                <td className="p-4 text-gray-300 font-medium">Rating</td>
                {providers.map(p => (
                  <td key={p.slug} className="p-4 text-center">
                    <span className="text-yellow-400 font-bold">{p.rating}</span>
                    <span className="text-gray-500 text-xs">/5</span>
                  </td>
                ))}
              </tr>
              <tr className="bg-slate-900">
                <td className="p-4 text-gray-300 font-medium">Avg. Premium</td>
                {providers.map(p => (
                  <td key={p.slug} className="p-4 text-center text-sky-400 font-semibold">{p.avgPremium}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quote CTA */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Can&apos;t Decide? Let Us Compare For You</h2>
            <p className="text-gray-400 mb-4">
              Our specialist cruise insurance advisers will compare all providers for your specific cruise, destination, age, and any pre-existing conditions — and recommend the best option for your needs.
            </p>
            <p className="text-gray-400">
              The comparison above shows general features. Your actual quote will depend on your specific requirements. Some policies may offer better value than others for your particular situation.
            </p>
          </div>
          <CompareCTA variant="sidebar" />
        </div>
      </div>
    </>
  );
}
