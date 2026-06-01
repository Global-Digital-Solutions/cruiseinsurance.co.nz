'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Anchor, ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [destsOpen, setDestsOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) { setDestsOpen(false); setPassOpen(false); }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const destinations = [
    { href: '/destinations/domestic-cruise-insurance', label: 'NZ Domestic Cruises' },
    { href: '/destinations/south-pacific-cruise-insurance', label: 'South Pacific' },
    { href: '/destinations/australian-cruise-insurance', label: 'Australian Cruises' },
    { href: '/destinations/asian-cruise-insurance', label: 'Asian Cruises' },
    { href: '/destinations/european-cruise-insurance', label: 'European Cruises' },
    { href: '/destinations/international-cruise-insurance', label: 'International' },
    { href: '/destinations/worldwide-cruise-insurance', label: 'Worldwide Cover' },
  ];

  const passengers = [
    { href: '/passengers/singles-cruise-insurance', label: 'Singles & Solo' },
    { href: '/passengers/couples-cruise-insurance', label: 'Couples' },
    { href: '/passengers/family-cruise-insurance', label: 'Families' },
    { href: '/passengers/seniors-cruise-insurance', label: 'Seniors 60+' },
    { href: '/passengers/pre-existing-medical-insurance', label: 'Pre-Existing Conditions' },
    { href: '/passengers/first-time-cruise-insurance', label: 'First Timers' },
    { href: '/passengers/multi-cruise-insurance', label: 'Multi-Trip' },
    { href: '/passengers/annual-cruise-insurance', label: 'Annual Cover' },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <Anchor size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg">
              <span className="text-sky-400">Cruise</span>Insurance
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Destinations dropdown — hover with no gap */}
            <div className="relative group" onMouseEnter={() => setDestsOpen(true)} onMouseLeave={() => setDestsOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
                Destinations <ChevronDown size={14} />
              </button>
              {destsOpen && (
                <div className="absolute top-full left-0 w-56 bg-slate-800 rounded-xl shadow-xl border border-slate-700 py-2 z-50">
                  <div className="absolute -top-2 left-0 right-0 h-2" />
                  {destinations.map(d => (
                    <Link key={d.href} href={d.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Who's Travelling dropdown — hover with no gap */}
            <div className="relative group" onMouseEnter={() => setPassOpen(true)} onMouseLeave={() => setPassOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
                Who&apos;s Travelling <ChevronDown size={14} />
              </button>
              {passOpen && (
                <div className="absolute top-full left-0 w-56 bg-slate-800 rounded-xl shadow-xl border border-slate-700 py-2 z-50">
                  <div className="absolute -top-2 left-0 right-0 h-2" />
                  {passengers.map(p => (
                    <Link key={p.href} href={p.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/compare" className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">Compare</Link>
            <Link href="/cruise-insurance-guide" className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">Guide</Link>
            <Link href="/faqs" className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">FAQs</Link>
            <Link href="/blog" className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">Resources</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
<Link
              href="/compare/"
              className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Compare Providers
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-300 hover:text-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 px-4 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 pt-1">Destinations</p>
          {destinations.map(d => (
            <Link key={d.href} href={d.href} onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
              {d.label}
            </Link>
          ))}
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 pt-3">Who&apos;s Travelling</p>
          {passengers.map(p => (
            <Link key={p.href} href={p.href} onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
              {p.label}
            </Link>
          ))}
          <div className="border-t border-slate-700 pt-3 mt-3 space-y-1">
            {[
              { href: '/compare', label: 'Compare Providers' },
              { href: '/cruise-insurance-guide', label: 'Cruise Insurance Guide' },
              { href: '/making-a-claim', label: 'Making a Claim' },
              { href: '/faqs', label: 'FAQs' },
              { href: '/blog', label: 'Resources' },
              { href: '/contact', label: 'Contact Us' },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pt-3">
            <Link href="/compare/" onClick={() => setOpen(false)}
              className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 rounded-lg transition-colors">
              Compare Providers →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
