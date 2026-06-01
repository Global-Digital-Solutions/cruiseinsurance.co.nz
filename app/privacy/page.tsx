import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CruiseInsurance.co.nz',
  description: 'Privacy policy for CruiseInsurance.co.nz — how we collect, use and protect your information under the NZ Privacy Act 2020.',
};

export default function PrivacyPage() {
  const sections = [
    { n: '01', title: 'About This Policy', body: 'This Privacy Policy explains how CruiseInsurance.co.nz ("we", "us", "our"), operated by Cover4You, collects, uses, and protects information in accordance with the New Zealand Privacy Act 2020.\n\nBy using this website you agree to the practices described in this policy.' },
    { n: '02', title: 'Information We Collect', body: 'This website does not include insurance quote forms that collect personal details. If you contact us by email at hello@cover4you.co.nz, we collect only the information you choose to share.\n\nWe also collect analytics data automatically: IP address and approximate location, browser type and version, pages visited and time spent, referring website, and date/time of visit. This is collected via Google Analytics to help improve the site.' },
    { n: '03', title: 'How We Use Your Information', bullets: ['To respond to enquiries sent to hello@cover4you.co.nz', 'To analyse website usage and improve content', 'To monitor website performance and security', 'To comply with our legal and regulatory obligations'], body: 'We do not use your information for direct marketing without your consent, and we do not sell or rent your information to third parties.' },
    { n: '04', title: 'Referral Links and Third-Party Providers', body: 'When you click a "Get Quote" link, you are directed to a third-party insurer\'s website. We may receive a referral fee if you purchase a product — this does not affect the price you pay. When you leave this site, the provider\'s own privacy policy applies. We do not transmit your personal information to providers.' },
    { n: '05', title: 'Sharing Your Information', body: 'We may share information with trusted third-party service providers (such as Google Analytics, web hosting) who assist in operating this website. These parties are required to keep your information confidential. We may disclose information if required by law or regulatory authority.' },
    { n: '06', title: 'Data Retention', body: 'We retain email correspondence for a reasonable period to respond to ongoing enquiries. Analytics data is retained in accordance with Google Analytics\' standard retention settings. We do not collect or retain sensitive personal or health information.' },
    { n: '07', title: 'Your Rights Under the Privacy Act 2020', bullets: ['Request access to the personal information we hold about you', 'Request correction of your personal information if inaccurate', 'Request deletion where we have no lawful basis to retain it', 'Make a complaint about how we handle your personal information'], body: 'Contact us at hello@cover4you.co.nz. We will respond within 20 working days. If unsatisfied, you may complain to the Office of the Privacy Commissioner at www.privacy.org.nz.' },
    { n: '08', title: 'Security', body: 'We take reasonable technical and organisational measures to protect information against unauthorised access, disclosure, or loss. However, no internet transmission is completely secure.' },
    { n: '09', title: 'Contact Us', body: 'Email: hello@cover4you.co.nz\nWebsite: www.cruiseinsurance.co.nz' },
  ];

  return (
    <>
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80" alt="CruiseInsurance.co.nz — privacy policy" className="w-full h-full object-cover" style={{ opacity: 0.45 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.40) 60%, transparent 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Privacy Policy</h1>
          <p className="text-gray-300 text-sm">Last updated: June 2026 · Compliant with the NZ Privacy Act 2020</p>
        </div>
      </section>
      <div className="bg-sky-50 border-b border-sky-100 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sky-800 text-sm leading-relaxed"><strong>Summary:</strong> This website is an information and referral service. We do not collect insurance application data directly. When you click to a provider, you deal with them directly under their own privacy policy. We may receive a referral fee — this does not affect your price.</p>
        </div>
      </div>
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {sections.map(s => (
            <div key={s.n} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-4 bg-white border-b border-gray-100 px-6 py-4">
                <span className="w-10 h-10 rounded-full bg-sky-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">{s.n}</span>
                <h2 className="text-lg font-black text-slate-900">{s.title}</h2>
              </div>
              <div className="px-6 py-5 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
                {s.bullets && <ul className="space-y-2">{s.bullets.map((b, i) => <li key={i} className="flex gap-2 items-start text-sm text-gray-700"><span className="text-sky-500 font-bold flex-shrink-0 mt-0.5">→</span><span>{b}</span></li>)}</ul>}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
            <Link href="/terms/" className="text-sky-700 hover:underline font-medium">Terms of Use →</Link>
            <Link href="/disclaimer/" className="text-sky-700 hover:underline font-medium">Disclaimer →</Link>
            <Link href="/contact/" className="text-sky-700 hover:underline font-medium">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
