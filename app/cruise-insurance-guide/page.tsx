import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { destinationTypes } from '@/data/destination-types';
import { passengerTypes } from '@/data/passenger-types';
import { CheckCircle, BookOpen } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Cruise Insurance Guide | Complete NZ Cruise Insurance Guide',
  description: 'Comprehensive cruise insurance guide for NZ travellers. Covering domestic & international cruises, costs, coverage, pre-existing conditions. Save with expert advice.',
  alternates: { canonical: `${SITE_URL}/cruise-insurance-guide` },
};

export default function CruiseInsuranceGuide() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Cruise Insurance Guide', item: `${SITE_URL}/cruise-insurance-guide` },
    ],
  };

  const sections = [
    {
      title: 'Why Cruise Insurance is Essential',
      content: `Many New Zealanders assume their standard travel insurance or public healthcare covers them on cruise ships. This is a dangerous misconception that can lead to catastrophic financial consequences.

Once your ship departs port — even on domestic NZ cruises — you are in a unique maritime environment where:
- Public healthcare (ACC, public hospitals) does not apply onboard
- Standard travel insurance often excludes cruise-specific risks
- Ship's doctors charge private rates ($200–$500+ per consultation)
- Medical evacuations cost $15,000–$150,000 or more
- Trip cancellation for cruise holidays involves significant pre-paid costs`,
    },
    {
      title: 'What Cruise Insurance Covers',
      content: `Dedicated cruise insurance covers risks that standard travel insurance doesn't adequately protect against:

**Unlimited Medical Expenses**
All onboard and shoreside medical treatment with no dollar caps. This is the most critical benefit — a single serious illness can cost hundreds of thousands of dollars.

**Cabin Confinement**
Daily cash benefit ($100–$250/day) when illness confines you to your cabin and you miss excursions and activities you've paid for.

**Missed Port Departure**
If you miss your ship's departure due to a covered delay, your policy pays to catch up with the ship at the next port.

**Emergency Evacuation**
Full cost of helicopter or fixed-wing evacuation from the ship to appropriate medical facilities.

**Medical Repatriation**
Air ambulance transport back to New Zealand for ongoing treatment — costs $50,000–$180,000 from international ports.

**Trip Cancellation & Interruption**
Full reimbursement of non-refundable costs if you must cancel before departure or cut your cruise short.`,
    },
    {
      title: 'How Much Does Cruise Insurance Cost?',
      content: `Cruise insurance premiums depend on several factors:
- Your age (particularly if over 60)
- Your destination (domestic vs. international)
- Duration of your cruise
- Whether you have pre-existing medical conditions
- The type of cover you need (single trip vs. annual)

As a rough guide, you can expect to pay:
- NZ domestic cruise (couple under 65): $180–$300
- South Pacific cruise (couple under 65): $240–$420
- European cruise (couple under 65): $380–$650
- International cruise (couple over 70): $600–$1,200+
- Annual multi-trip policy (couple under 65): $600–$900`,
    },
    {
      title: 'Pre-Existing Medical Conditions',
      content: `If you have a pre-existing medical condition, you must declare it. Failing to disclose conditions is the most common reason cruise insurance claims are declined.

Most conditions can be covered — including heart disease, diabetes, respiratory conditions, and many others. The premium will reflect the higher risk, but coverage is available.

Our specialist advisers help you:
- Understand what counts as a pre-existing condition
- Declare conditions correctly
- Find providers who cover your specific conditions
- Compare premiums across multiple insurers`,
    },
    {
      title: 'Single Trip vs. Annual Cover',
      content: `**Single Trip Insurance**
Cover for one specific cruise. Best for travellers who cruise once a year or less.

**Annual Multi-Trip Insurance**
Cover for unlimited cruises within a 12-month period. Best value if you take 2+ cruises per year.

Annual policies typically cost $600–$1,200 for a couple — compared to $350–$700 per individual cruise. For 3+ cruises per year, the savings are substantial.`,
    },
    {
      title: 'When to Buy Cruise Insurance',
      content: `Buy cruise insurance as soon as you make your first trip payment — ideally on the same day you book.

Early purchase means:
- You're covered for cancellation from day one
- Any cancellation events between booking and departure are covered
- Pre-existing condition assessment happens before travel, not after a claim
- Peace of mind throughout the booking and planning process

Waiting until the last minute may mean events that occur after booking but before purchase aren't covered.`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-sky-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Cruise Insurance Guide</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm px-3 py-1.5 rounded-full mb-4">
                <BookOpen size={13} /> Complete Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Complete Cruise Insurance Guide for NZ Travellers
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Everything Kiwi cruisers need to know about protecting their holiday investment — from domestic NZ cruises to worldwide voyages.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['What cruise insurance covers', 'How much it costs', 'Pre-existing conditions', 'When to buy', 'Single vs. annual cover', 'How to claim'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={13} className="text-sky-400 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.split('\n').map((line, j) => {
                    if (!line.trim()) return null;
                    if (line.startsWith('**') && line.endsWith('**')) return <p key={j} className="font-semibold text-sky-400">{line.slice(2, -2)}</p>;
                    if (line.startsWith('- ')) return (
                      <div key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle size={14} className="text-sky-400 mt-1 flex-shrink-0" />
                        <span>{line.slice(2)}</span>
                      </div>
                    );
                    return <p key={j} className="text-gray-400 leading-relaxed">{line}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Insurance by Destination</h3>
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
