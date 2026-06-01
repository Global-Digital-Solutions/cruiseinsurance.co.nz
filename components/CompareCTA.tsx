import Link from 'next/link';
import { providers } from '@/data/providers';

interface Props {
  heading?: string;
  subtext?: string;
  variant?: 'sidebar' | 'inline' | 'banner';
}

export default function CompareCTA({
  heading = 'Compare NZ Cruise Insurance Providers',
  subtext = 'Find the right cruise cover — compare medical limits, cabin confinement, missed port, and cancellation side by side.',
  variant = 'inline',
}: Props) {
  const topProviders = providers.slice(0, 4);

  if (variant === 'sidebar') {
    return (
      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="bg-sky-600 px-5 py-4">
          <p className="text-white font-bold text-sm">Compare Cruise Insurance</p>
          <p className="text-sky-100 text-xs mt-0.5">Find the best cover for your cruise</p>
        </div>
        <div className="p-4 space-y-2">
          {topProviders.map(p => (
            <a key={p.slug} href={p.quoteUrl} target="_blank" rel="noopener noreferrer nofollow"
              className="flex items-center justify-between py-2 px-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors group">
              <div>
                <p className="text-sm font-semibold text-white">{p.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-amber-400 text-xs">★</span>
                  <span className="text-xs text-gray-400">{p.rating.toFixed(1)} · {p.avgPremium}</span>
                </div>
              </div>
              <span className="text-xs text-sky-400 font-semibold group-hover:text-sky-300">Quote →</span>
            </a>
          ))}
          <Link href="/compare/" className="block w-full text-center bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-3 rounded-xl transition-colors mt-3">
            Compare All Providers →
          </Link>
          <p className="text-center text-xs text-gray-500 mt-1">Independent comparison. No broker fees.</p>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <section className="bg-sky-700 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{heading}</h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">{subtext}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {topProviders.map(p => (
              <a key={p.slug} href={p.quoteUrl} target="_blank" rel="noopener noreferrer nofollow"
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
                {p.name} →
              </a>
            ))}
          </div>
          <Link href="/compare/" className="inline-flex items-center gap-2 bg-white text-sky-700 hover:bg-sky-50 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg">
            See Full Side-by-Side Comparison →
          </Link>
        </div>
      </section>
    );
  }

  // inline (default)
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <h3 className="text-lg font-bold text-white mb-1">{heading}</h3>
      <p className="text-gray-400 text-sm mb-5">{subtext}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {topProviders.map(p => (
          <a key={p.slug} href={p.quoteUrl} target="_blank" rel="noopener noreferrer nofollow"
            className="flex items-center justify-between p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors group">
            <div>
              <p className="text-sm font-semibold text-white">{p.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-amber-400 text-xs">★</span>
                <span className="text-xs text-gray-400">{p.rating.toFixed(1)} · {p.avgPremium}</span>
              </div>
            </div>
            <span className="text-xs font-bold text-sky-400 group-hover:text-sky-300 whitespace-nowrap">Get Quote →</span>
          </a>
        ))}
      </div>
      <Link href="/compare/" className="block w-full text-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 rounded-xl transition-colors">
        Compare All Providers Side by Side →
      </Link>
      <p className="text-center text-xs text-gray-500 mt-2">Independent comparison. No broker fees.</p>
    </div>
  );
}
