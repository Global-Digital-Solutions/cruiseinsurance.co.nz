import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | CruiseInsurance.co.nz',
  description: 'Terms of use for CruiseInsurance.co.nz — the terms governing use of our cruise insurance comparison website.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-800 border-b border-slate-700 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Terms of Use</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Terms of Use</h1>
          <p className="text-gray-400 mt-2">CruiseInsurance.co.nz — a trading style of Cover4You. Last Updated: June 1, 2025</p>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-gray max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using the CruiseInsurance.co.nz website and our services, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this service.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Role of CruiseInsurance.co.nz</h2>
            <p className="mb-4">CruiseInsurance.co.nz is a comparison and referral service, not an insurance underwriter. We provide general information about cruise insurance and connect users with licensed insurance advisers and providers. We do not provide insurance directly.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. General Information Only</h2>
            <p className="mb-4">All information on this website is general in nature and does not constitute personalised financial advice. You should consult a licensed financial adviser before making insurance decisions. We make no warranty about the accuracy or completeness of information on this site.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="mb-4">All content on this website is the property of Cover4You or its content suppliers and is protected by copyright laws. You may not copy, reproduce, or distribute content without our written permission.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law, CruiseInsurance.co.nz and Cover4You shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on its content.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
            <p className="mb-4">These terms are governed by the laws of New Zealand. Any disputes shall be resolved in New Zealand courts.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact</h2>
            <p><a href="mailto:hello@cover4you.co.nz" className="text-sky-600">hello@cover4you.co.nz</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
