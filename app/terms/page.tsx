import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | CruiseInsurance.co.nz',
  description: 'Terms of use for CruiseInsurance.co.nz — the terms governing use of our cruise insurance comparison and referral service.',
};

const sections = [
  {
    n: '01',
    title: 'Acceptance of Terms',
    body: `By accessing and using CruiseInsurance.co.nz ("the website"), you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use this website.\n\nThese Terms of Use may be updated from time to time. Continued use of the website after any changes constitutes your acceptance of the revised terms.`,
  },
  {
    n: '02',
    title: 'What We Are — A Comparison and Referral Service',
    callout: {
      type: 'info',
      text: 'CruiseInsurance.co.nz is a comparison and referral service. We are not an insurance broker, underwriter, or licensed financial adviser.',
    },
    body: `CruiseInsurance.co.nz provides general information to help you compare cruise travel insurance products from third-party providers. We connect you directly with licensed insurance providers and may receive a referral fee from those providers if you purchase a product through a link on this site.\n\nImportantly, any referral fee we receive does not affect the price you pay. You pay exactly the same price as if you had gone directly to the insurer's website. Our referral arrangements do not influence the information or comparisons we publish.`,
  },
  {
    n: '03',
    title: 'General Information Only — Not Financial Advice',
    callout: {
      type: 'warning',
      text: 'Nothing on this website constitutes financial advice, insurance advice, or a recommendation to purchase any specific product.',
    },
    body: `The content on this website is provided for general information purposes only. CruiseInsurance.co.nz is not a licensed financial adviser under the Financial Markets Conduct Act 2013 (FMCA) and does not provide personalised financial advice.\n\nBefore purchasing any insurance product, you should read the Product Disclosure Statement (PDS) provided by the insurer, consider whether the product is appropriate for your specific circumstances, and consider seeking advice from a licensed financial adviser if you are unsure.`,
    bullets: [
      'Read the full policy wording provided by the insurer',
      'Complete any medical or health declarations accurately and honestly',
      'Consider seeking independent advice if unsure which product suits your needs',
    ],
  },
  {
    n: '04',
    title: 'Referral Fees and Commercial Relationships',
    body: `CruiseInsurance.co.nz may receive referral fees or commissions from insurance providers when you click through to their websites and purchase a product. This is how we fund the service.\n\nThese commercial arrangements do not affect the price you pay — the price is set by the insurer and is the same whether you go via our website or directly. Our editorial content, comparisons, and ratings are produced independently and are not influenced by commercial relationships.`,
  },
  {
    n: '05',
    title: 'Accuracy of Information',
    body: `We make reasonable efforts to ensure that the information on this website is accurate and up to date. However, insurance products, policy terms, premiums, and provider details change frequently. We do not guarantee that any information is current, complete, or accurate.\n\nAlways verify information directly with the relevant insurance provider before making a purchasing decision. Policy features, cover limits, exclusions, and premiums shown on this site are indicative only.`,
  },
  {
    n: '06',
    title: 'External Links and Third-Party Websites',
    body: `This website contains links to third-party insurance providers. These links are provided for your convenience. When you click a "Get Quote" or similar link, you leave this website and are subject to the terms and privacy policy of the third-party provider. We do not endorse, control, or take responsibility for third-party websites.`,
  },
  {
    n: '07',
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by law, CruiseInsurance.co.nz and Cover4You accept no liability for any loss or damage arising from your use of this website, any decision to purchase or not purchase insurance, any act or omission of a third-party insurance provider, or any inaccuracy in information published on this website.`,
  },
  {
    n: '08',
    title: 'Governing Law',
    body: `These Terms of Use are governed by the laws of New Zealand. Any dispute is subject to the exclusive jurisdiction of the courts of New Zealand.`,
  },
  {
    n: '09',
    title: 'Contact',
    body: `Questions about these Terms of Use: hello@cover4you.co.nz\nWebsite: www.cruiseinsurance.co.nz`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80" alt="CruiseInsurance.co.nz — terms of use" className="w-full h-full object-cover" style={{ opacity: 0.45 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.40) 60%, transparent 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Terms of Use</h1>
          <p className="text-gray-300 text-sm">Last updated: June 2026 · CruiseInsurance.co.nz — a trading style of Cover4You</p>
        </div>
      </section>

      <div className="bg-amber-50 border-b border-amber-100 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> CruiseInsurance.co.nz is a comparison and referral service, not an insurance broker or adviser. We connect you with insurers and may earn a referral fee — this does not affect the price you pay. Nothing on this site is financial advice.
          </p>
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
              <div className="px-6 py-5 space-y-4">
                {s.callout && (
                  <div className={`rounded-xl p-4 border ${s.callout.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-sky-50 border-sky-200 text-sky-800'}`}>
                    <p className="text-sm font-semibold">{s.callout.text}</p>
                  </div>
                )}
                <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{s.body}</div>
                {s.bullets && (
                  <ul className="space-y-2">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                        <span className="text-sky-500 font-bold flex-shrink-0 mt-0.5">✓</span><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy/" className="text-sky-700 hover:underline font-medium">Privacy Policy →</Link>
            <Link href="/disclaimer/" className="text-sky-700 hover:underline font-medium">Disclaimer →</Link>
            <Link href="/contact/" className="text-sky-700 hover:underline font-medium">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
