import type { Metadata } from 'next';
import Link from 'next/link';
import { destinationTypes } from '@/data/destination-types';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Cruise Insurance by Destination | Compare NZ Cover',
  description: 'Compare cruise insurance for all destinations — domestic, South Pacific, Australia, Asia, Europe and worldwide. Find the right cover for your cruise route.',
  alternates: { canonical: `${SITE_URL}/destinations/` },
  openGraph: { url: `${SITE_URL}/destinations/` },
};

export default function DestinationsPage() {
  return (
    <>
      <section className="relative bg-[#0c3b6e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80" alt="" className="w-full h-full object-cover" style={{ opacity: 0.80 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 50%, transparent 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-4 flex gap-2">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Destinations</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cruise Insurance by Destination</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Find the right cruise insurance for your destination — from domestic voyages to worldwide adventures.</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationTypes.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}/`}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg p-6 transition-all"
              >
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-2">{dest.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{dest.heroTitle}</p>
                <span className="text-sm font-semibold text-blue-600 group-hover:underline">View cover →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/compare/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Compare All Cruise Insurance Providers →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
