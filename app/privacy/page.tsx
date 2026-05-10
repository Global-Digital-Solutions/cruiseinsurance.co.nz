import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CruiseInsurance.co.nz',
  description: 'Privacy policy for CruiseInsurance.co.nz — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate-800 border-b border-slate-700 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">This Privacy Policy explains how Cover4You &amp; CruiseInsurance.co.nz ("we," "us," or "our") collects, uses, protects, and shares your personal information when you use our website or services.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information you provide when requesting quotes, including your name, email address, phone number, travel details, and any health information relevant to insurance assessment. We also collect standard website usage data including IP addresses, browser type, and pages visited.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information to: provide insurance comparison and referral services; connect you with licensed insurance advisers; respond to your enquiries; comply with legal obligations; and improve our services.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">We may share your information with licensed insurance providers and advisers for the purpose of providing quotes. We do not sell your personal information to third parties. We may share information where required by law.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">Under the Privacy Act 2020, you have the right to access personal information we hold about you, request corrections, and in certain circumstances request deletion. Contact us at hello@cover4you.co.nz to exercise these rights.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies to improve website functionality and analyse usage. You can control cookies through your browser settings, though this may affect website functionality.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact</h2>
            <p className="text-gray-600">For privacy enquiries: <a href="mailto:hello@cover4you.co.nz" className="text-sky-600">hello@cover4you.co.nz</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
