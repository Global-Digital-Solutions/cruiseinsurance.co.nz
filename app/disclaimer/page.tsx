import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | CruiseInsurance.co.nz',
  description: 'Important disclaimer for CruiseInsurance.co.nz — information about our referral service, general information limitations, and regulatory status.',
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-slate-800 border-b border-slate-700 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Disclaimer</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Disclaimer</h1>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 font-medium">
              CruiseInsurance.co.nz provides general information only. This is not financial advice. Always read the policy wording and consult a licensed adviser before purchasing cruise insurance.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Financial Advice</h2>
            <p className="mb-4">Information on this website is general in nature and does not constitute personalised financial advice under the Financial Markets Conduct Act 2013. Insurance products vary significantly between providers — always read the Policy Wording and Product Disclosure Statement before purchasing.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How This Site Works</h2>
            <p className="mb-4">CruiseInsurance.co.nz is a comparison and referral service operated by Cover4You. We compare information from multiple insurance providers and refer enquiries to licensed insurance advisers. We may receive referral fees from providers.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accuracy of Information</h2>
            <p className="mb-4">We endeavour to keep information accurate and up to date, but insurance products, pricing, and coverage change frequently. Always confirm current terms directly with the insurer before purchasing.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Content</h2>
            <p className="mb-4">Links to third-party websites are provided for convenience. We have no control over third-party content and accept no liability for information on external sites.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p>This disclaimer is governed by New Zealand law. See also our <Link href="/privacy" className="text-sky-600">Privacy Policy</Link> and <Link href="/terms" className="text-sky-600">Terms of Use</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
