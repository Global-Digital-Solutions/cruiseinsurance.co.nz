import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, Users } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free Cruise Insurance Quote',
  description: 'Get a free cruise insurance quote from NZ\'s cruise insurance specialists. Compare multiple providers within 24 hours. No obligation.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  const benefits = [
    { icon: Shield, title: 'Specialist Cruise Advisers', desc: 'Not generalists — our team focuses exclusively on cruise insurance' },
    { icon: Users, title: 'Multiple Providers Compared', desc: 'We compare 6+ NZ cruise insurance providers for you' },
    { icon: CheckCircle, title: 'Free, No Obligation', desc: 'Quotes are completely free — no pressure to purchase' },
    { icon: Clock, title: '24-Hour Response', desc: 'We respond within 24 business hours with personalised quotes' },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}/contact`,
    name: 'Contact CruiseInsurance.co.nz',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Your Free Cruise Insurance Quote</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Fill in the form and our specialist cruise insurance advisers will compare options from NZ&apos;s top providers and get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: benefits */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Service</h2>
            <div className="space-y-4 mb-8">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">What Happens Next</h3>
              {[
                'We receive your enquiry and review your requirements',
                'Our advisers compare options from 6+ NZ providers',
                'You receive 2–3 personalised quotes within 24 hours',
                'We explain what each policy covers and any exclusions',
                'You choose your preferred policy and complete purchase',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-400 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <QuoteForm variant="compact" />
          </div>
        </div>
      </div>

      {/* Contact cards */}
      <section className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone size={22} className="text-sky-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Phone</h3>
              <a href="tel:0988859549" className="text-sky-400 hover:text-sky-300 transition-colors">09 885 9549</a>
              <p className="text-gray-500 text-xs mt-1">Mon–Fri, 9am–5pm NZT</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail size={22} className="text-sky-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300 transition-colors text-sm">hello@cover4you.co.nz</a>
              <p className="text-gray-500 text-xs mt-1">We respond within 24 hours</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MapPin size={22} className="text-sky-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Location</h3>
              <p className="text-gray-400 text-sm">Auckland, New Zealand</p>
              <p className="text-gray-500 text-xs mt-1">Serving all of New Zealand</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-sky-600 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Cruise with Confidence?</h2>
          <p className="text-sky-100 mb-5">Get free, no-obligation quotes from NZ&apos;s top cruise insurance providers.</p>
          <a href="tel:0988859549" className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-semibold px-6 py-3 rounded-xl transition-colors">
            <Phone size={16} /> Call 09 885 9549
          </a>
        </div>
      </section>
    </>
  );
}
