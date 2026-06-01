import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, CheckCircle, Award, Anchor } from 'lucide-react';
import { destinationTypes } from '@/data/destination-types';
import { passengerTypes } from '@/data/passenger-types';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'About CruiseInsurance.co.nz | NZ Cruise Insurance Specialists',
  description: "About CruiseInsurance.co.nz — NZ's specialist cruise insurance comparison service, connecting Kiwi cruisers with licensed insurance advisers.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Specialist Expertise', desc: 'We focus exclusively on cruise insurance — not general travel or home insurance.' },
    { icon: Users, title: 'Kiwi-Focused', desc: "NZ-owned and operated, understanding the specific needs and destinations of NZ cruisers." },
    { icon: CheckCircle, title: 'Transparent Service', desc: 'Clear information about what\'s covered, what\'s not, and what it costs — no hidden surprises.' },
    { icon: Award, title: 'Best Outcomes', desc: 'We work to find the best cover at the best price, not just the easiest or highest-commission option.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-800 border-b border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">About Us</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center">
              <Anchor size={20} className="text-sky-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">About CruiseInsurance.co.nz</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            NZ&apos;s specialist cruise insurance comparison service — helping Kiwi cruisers find the right cover since 2015.
          </p>
        </div>
      </section>

      {/* White body */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mission */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-4">
              CruiseInsurance.co.nz was created with a simple mission: to help New Zealand cruisers find the right insurance for their voyage, at the right price, with confidence.
            </p>
            <p className="text-gray-600 mb-4">
              Cruise insurance is a specialist area. The unique risks of maritime travel — medical emergencies at sea, expensive evacuations, cabin confinement, missed port departures — require dedicated expertise that general insurance advisers often lack.
            </p>
            <p className="text-gray-600">
              Our team of specialist advisers has deep expertise in cruise insurance across all destinations and traveller types. We compare policies from NZ&apos;s leading providers and match you with the best cover for your specific cruise.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-sky-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* Regulatory */}
          <div className="bg-sky-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-700 mb-4">
              CruiseInsurance.co.nz is a comparison and referral service operated by Cover4You, a registered financial advice provider in New Zealand (FSP Registration: available on request).
            </p>
            <p className="text-gray-700 mb-4">
              We compare cruise insurance policies from multiple NZ-approved providers and refer qualified enquiries to licensed insurance advisers. Our service is free to use — we may receive a referral fee from insurers when a policy is purchased.
            </p>
            <p className="text-gray-700">
              Financial advice is provided by licensed advisers under the Financial Markets Conduct Act 2013. All information on this website is general in nature and does not constitute personalised financial advice.
            </p>
          </div>

          {/* Destinations and passenger links */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Destinations We Cover</h2>
              <div className="grid grid-cols-2 gap-2">
                {destinationTypes.map(d => (
                  <Link key={d.slug} href={`/destinations/${d.slug}`}
                    className="flex items-center gap-2 text-sky-600 hover:text-sky-800 text-sm py-1">
                    <span>{d.icon}</span> {d.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Travellers We Help</h2>
              <div className="grid grid-cols-2 gap-2">
                {passengerTypes.map(p => (
                  <Link key={p.slug} href={`/passengers/${p.slug}`}
                    className="flex items-center gap-2 text-sky-600 hover:text-sky-800 text-sm py-1">
                    <span>{p.icon}</span> {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-sky-600 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Cruise with Confidence?</h2>
          <p className="text-sky-100 mb-6">Get free quotes from NZ&apos;s leading cruise insurance providers.</p>
          <Link href="/contact" className="inline-block bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3 rounded-xl transition-colors">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
