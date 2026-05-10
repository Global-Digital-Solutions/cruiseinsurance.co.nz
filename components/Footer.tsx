import Link from 'next/link';
import { Anchor } from 'lucide-react';

export default function Footer() {
  const destinations = [
    { href: '/destinations/domestic-cruise-insurance', label: 'NZ Domestic Cruises' },
    { href: '/destinations/south-pacific-cruise-insurance', label: 'South Pacific' },
    { href: '/destinations/australian-cruise-insurance', label: 'Australian Cruises' },
    { href: '/destinations/asian-cruise-insurance', label: 'Asian Cruises' },
    { href: '/destinations/european-cruise-insurance', label: 'European Cruises' },
    { href: '/destinations/worldwide-cruise-insurance', label: 'Worldwide Cover' },
  ];

  const passengers = [
    { href: '/passengers/singles-cruise-insurance', label: 'Singles & Solo' },
    { href: '/passengers/couples-cruise-insurance', label: 'Couples' },
    { href: '/passengers/family-cruise-insurance', label: 'Families' },
    { href: '/passengers/seniors-cruise-insurance', label: 'Seniors 60+' },
    { href: '/passengers/pre-existing-medical-insurance', label: 'Pre-Existing Conditions' },
    { href: '/passengers/annual-cruise-insurance', label: 'Annual Cover' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Anchor size={18} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                <span className="text-sky-400">Cruise</span>Insurance
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              NZ&apos;s cruise insurance specialists. Connecting Kiwi cruisers with the best cover for their voyage.
            </p>
            <p className="text-gray-400 text-sm">
              <a href="tel:0988859549" className="hover:text-sky-400 transition-colors">09 885 9549</a><br />
              <a href="mailto:hello@cover4you.co.nz" className="hover:text-sky-400 transition-colors">hello@cover4you.co.nz</a>
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">By Destination</h3>
            <ul className="space-y-2">
              {destinations.map(d => (
                <li key={d.href}>
                  <Link href={d.href} className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Passenger Types */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">By Traveller Type</h3>
            <ul className="space-y-2">
              {passengers.map(p => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: '/compare', label: 'Compare Providers' },
                { href: '/cruise-insurance-guide', label: 'Cruise Insurance Guide' },
                { href: '/making-a-claim', label: 'Making a Claim' },
                { href: '/faqs', label: 'FAQs' },
                { href: '/blog', label: 'Blog & Articles' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How This Site Works disclaimer */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <div className="bg-slate-900 rounded-xl p-4 mb-6 text-xs text-gray-500">
            <p className="font-semibold text-gray-400 mb-1">How This Site Works</p>
            <p>
              CruiseInsurance.co.nz is a comparison and referral service, not an insurance underwriter or licensed insurer.
              We compare policies from multiple NZ-approved cruise insurance providers and refer qualified enquiries to licensed
              insurance advisers and brokers. Our service is free to use — we may receive a referral fee from insurers.
              All information is general in nature and does not constitute financial advice. Please read the policy wording
              carefully before purchasing. Financial advice is provided by Cover4You, a registered financial advice provider.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} CruiseInsurance.co.nz — a trading style of Cover4You. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Use' },
                { href: '/disclaimer', label: 'Disclaimer' },
                { href: '/about', label: 'About' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="text-gray-500 hover:text-sky-400 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
