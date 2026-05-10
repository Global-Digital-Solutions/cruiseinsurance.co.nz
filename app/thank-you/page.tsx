import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | Quote Request Received',
  description: 'Thank you for your cruise insurance quote request. We\'ll be in touch within 24 hours.',
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-sky-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Quote Request Received!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for your enquiry. One of our specialist cruise insurance advisers will review your requirements and get back to you with personalised quotes within 24 hours.
        </p>
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 text-left mb-8">
          <h2 className="font-semibold text-white mb-3">What Happens Next</h2>
          {[
            { icon: Clock, text: 'Your enquiry is reviewed by a specialist adviser within 24 hours' },
            { icon: CheckCircle, text: 'We compare options from 6+ NZ cruise insurance providers' },
            { icon: Phone, text: 'You receive 2–3 personalised quotes with clear coverage comparisons' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <Icon size={16} className="text-sky-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-400 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Return Home
          </Link>
          <Link href="/cruise-insurance-guide" className="border border-slate-600 hover:border-sky-500 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors">
            Read Our Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
