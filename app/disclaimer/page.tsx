import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | CruiseInsurance.co.nz',
  description: 'Disclaimer for CruiseInsurance.co.nz — general information only, not financial advice. Referral fees explained.',
};

export default function DisclaimerPage() {
  const sections = [
    { n: '01', title: 'General Information Only', callout: { type: 'warning', text: 'CruiseInsurance.co.nz does not provide financial advice, insurance advice, or recommendations to purchase any specific product.' }, body: 'All content published on this website is provided for general information purposes only. Nothing on this website constitutes personalised financial or insurance advice. CruiseInsurance.co.nz is not a licensed financial adviser under the Financial Markets Conduct Act 2013 (FMCA) and does not hold a Financial Advice Provider (FAP) licence.\n\nBefore purchasing any insurance product you should read the Product Disclosure Statement (PDS), consider whether the cover is appropriate for your specific circumstances, and consider seeking advice from a licensed financial adviser.' },
    { n: '02', title: 'We Are a Comparison and Referral Service', callout: { type: 'info', text: 'CruiseInsurance.co.nz is a comparison and referral service. We direct you to licensed insurers — we do not sell or underwrite insurance.' }, body: 'When you click a "Get Quote" link on this website, you are directed to a third-party insurance provider\'s own website where you can obtain a quote and purchase a policy directly. CruiseInsurance.co.nz plays no part in the insurance transaction.' },
    { n: '03', title: 'Referral Fees — How We Are Compensated', body: 'CruiseInsurance.co.nz may receive a referral fee or commission from insurance providers when you click through from this website and purchase a policy.\n\nImportantly: any referral fee we receive does not affect the price you pay. The premiums charged by insurers are set independently and you pay exactly the same price whether you come via our website or go directly to the insurer. Our referral arrangements do not influence our editorial content, comparisons, or ratings.' },
    { n: '04', title: 'Accuracy and Currency of Information', body: 'We make reasonable efforts to ensure that comparisons, premiums, and product information are accurate and current. However, cruise insurance products, policy terms, cover limits, and premiums change frequently. We do not guarantee that any information on this website is accurate, current, or complete.\n\nAll premiums and prices shown are indicative only and are subject to change. Always verify current product details, cover limits, and premiums directly with the relevant insurer before making any purchasing decision.' },
    { n: '05', title: 'Limitation of Liability', body: 'To the fullest extent permitted by law, CruiseInsurance.co.nz and Cover4You accept no liability for: any loss or damage arising from use of or reliance on information on this website; any decision to purchase or not purchase a cruise insurance product; any act or omission of a third-party insurance provider; or any inaccuracy, error, or omission in information published on this website.' },
    { n: '06', title: 'Third-Party Links', body: 'This website contains links to third-party insurance providers. We do not endorse, control, or take responsibility for the content, accuracy, or practices of any third-party website. When you leave this site, the terms and privacy policy of the third-party website apply.' },
    { n: '07', title: 'Contact', body: 'Questions about this Disclaimer: hello@cover4you.co.nz\nWebsite: www.cruiseinsurance.co.nz' },
  ];

  return (
    <>
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="" className="w-full h-full object-cover" style={{ opacity: 0.45 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.40) 60%, transparent 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Disclaimer</h1>
          <p className="text-gray-300 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <div className="bg-amber-50 border-b border-amber-100 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-amber-800 text-sm leading-relaxed"><strong>Important:</strong> CruiseInsurance.co.nz is a comparison and referral service. We provide general information only — not financial advice. We may earn a referral fee from insurers; this does not affect the price you pay.</p>
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
                {s.callout && <div className={`rounded-xl p-4 border text-sm font-semibold ${s.callout.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-sky-50 border-sky-200 text-sky-800'}`}>{s.callout.text}</div>}
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
            <Link href="/terms/" className="text-sky-700 hover:underline font-medium">Terms of Use →</Link>
            <Link href="/privacy/" className="text-sky-700 hover:underline font-medium">Privacy Policy →</Link>
            <Link href="/contact/" className="text-sky-700 hover:underline font-medium">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
