import type { Metadata } from 'next';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import { faqs, faqCategories } from '@/data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Cruise Insurance FAQs | Common Questions Answered',
  description: 'Complete guide to cruise insurance FAQs. Get answers about coverage, costs, medical expenses, cancellations, pre-existing conditions & more.',
  alternates: { canonical: `${SITE_URL}/faqs` },
};

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQs', item: `${SITE_URL}/faqs` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Dark header */}
      <section className="bg-slate-800 border-b border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">FAQs</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center">
              <HelpCircle size={20} className="text-sky-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Cruise Insurance FAQs</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive answers to the most common questions about cruise insurance for New Zealand travellers.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FAQ accordion */}
          <div className="lg:col-span-2 space-y-10">
            {faqCategories.map(cat => {
              const catFaqs = faqs.filter(f => f.category === cat);
              if (!catFaqs.length) return null;
              return (
                <div key={cat}>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-sky-500 rounded-lg flex items-center justify-center text-xs text-white font-bold">
                      {catFaqs.length}
                    </span>
                    {cat}
                  </h2>
                  <div className="space-y-3">
                    {catFaqs.map((faq, i) => (
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
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CompareCTA variant="sidebar" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/cruise-insurance-guide', label: 'Complete Cruise Insurance Guide' },
                  { href: '/making-a-claim', label: 'How to Make a Claim' },
                  { href: '/compare', label: 'Compare Providers' },
                  { href: '/passengers/pre-existing-medical-insurance', label: 'Pre-Existing Conditions' },
                  { href: '/passengers/seniors-cruise-insurance', label: 'Senior Cruise Insurance' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-sky-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-sky-600 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-sky-100 mb-6">Our specialist cruise insurance advisers are here to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/compare/" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-6 py-3 rounded-xl transition-colors">
              Get Free Quotes →
            </Link>
            <a href="tel:0988859549" className="border border-white/50 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-xl transition-colors">
              📞 09 885 9549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
