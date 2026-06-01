import type { Metadata } from 'next';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import { Phone, Mail, FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Making a Cruise Insurance Claim | How to Claim Guide',
  description: 'Making a claim on your cruise insurance? Our complete step-by-step guide covers emergency contact, documentation, and what to expect during the claims process.',
  alternates: { canonical: `${SITE_URL}/making-a-claim` },
};

export default function MakingAClaim() {
  const steps = [
    {
      icon: Phone,
      title: 'Contact Your Insurer Immediately',
      description: 'In any medical emergency or serious situation, call your insurer\'s 24/7 emergency assistance number first — before incurring significant costs. They can authorise treatment and arrange direct payment to medical facilities.',
      urgent: true,
    },
    {
      icon: FileText,
      title: 'Document Everything',
      description: 'Keep all receipts, medical reports, invoices, boarding passes, and relevant correspondence. Take photos where relevant. The more documentation you have, the smoother your claim will be.',
      urgent: false,
    },
    {
      icon: CheckCircle,
      title: 'Submit Your Claim',
      description: 'Once home, submit your claim online or by post with all supporting documents. Most insurers require claims within 30–60 days of returning from your trip. Your insurer\'s claims team will guide you through any additional requirements.',
      urgent: false,
    },
    {
      icon: Clock,
      title: 'Follow Up',
      description: 'Simple claims are typically processed in 5–10 business days. Complex claims involving large medical or evacuation costs may take 15–30 business days. Stay in regular contact with your insurer\'s claims team.',
      urgent: false,
    },
  ];

  const emergencyContacts = [
    { situation: 'Medical Emergency Onboard', action: 'Call ship\'s emergency number (dial 999 or 911 on most cruise ships), then call your insurer\'s 24/7 emergency line' },
    { situation: 'Medical Evacuation Required', action: 'Ship\'s medical staff will coordinate with coast guard and your insurer — call your insurer\'s emergency line immediately' },
    { situation: 'Trip Cancellation Before Departure', action: 'Contact your insurer and cruise line as soon as possible. Get a doctor\'s certificate if cancelling due to illness' },
    { situation: 'Missed Port Departure', action: 'Contact your insurer immediately. Keep all evidence of the delay (airline confirmation, hotel receipts, etc.)' },
    { situation: 'Lost or Stolen Luggage', action: 'Report to ship\'s security or local police. Get a written report. Contact your insurer within 24 hours' },
  ];

  const documents = [
    'All medical receipts and invoices',
    'Detailed medical report from treating doctor',
    'Proof of cruise booking and itinerary',
    'Insurance policy certificate and schedule',
    'Boarding passes and travel documents',
    'Pre-existing condition documentation (if applicable)',
    'Police report (for theft claims)',
    'Airline delay confirmation (for missed departure claims)',
    'Bank/credit card statements showing pre-paid costs (for cancellation claims)',
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-800 border-b border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Making a Claim</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">How to Make a Cruise Insurance Claim</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A step-by-step guide to making a claim — from what to do onboard to submitting your claim and following up for payment.
          </p>
        </div>
      </section>

      {/* Critical alert */}
      <div className="bg-red-900/30 border-b border-red-800/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle size={18} className="text-red-400 flex-shrink-0" />
            <p className="text-sm text-red-200">
              <strong>In a medical emergency:</strong> Call your insurer&apos;s 24/7 emergency assistance line IMMEDIATELY before incurring significant costs.
              Do not wait until you return home.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Steps */}
            <h2 className="text-2xl font-bold text-white mb-6">The Claims Process</h2>
            <div className="space-y-4 mb-12">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className={`bg-slate-800 rounded-xl p-6 border ${step.urgent ? 'border-red-500/30' : 'border-slate-700'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${step.urgent ? 'bg-red-500/10' : 'bg-sky-500/10'}`}>
                        <Icon size={20} className={step.urgent ? 'text-red-400' : 'text-sky-400'} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${step.urgent ? 'bg-red-500/10 text-red-400' : 'bg-sky-500/10 text-sky-400'}`}>
                            Step {i + 1}{step.urgent ? ' — URGENT' : ''}
                          </span>
                        </div>
                        <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency contacts */}
            <h2 className="text-2xl font-bold text-white mb-6">Emergency Situations — What to Do</h2>
            <div className="space-y-3 mb-12">
              {emergencyContacts.map((ec, i) => (
                <div key={i} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <p className="font-semibold text-white mb-1">{ec.situation}</p>
                  <p className="text-gray-400 text-sm">{ec.action}</p>
                </div>
              ))}
            </div>

            {/* Documents checklist */}
            <h2 className="text-2xl font-bold text-white mb-6">Documentation Checklist</h2>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-12">
              <p className="text-gray-400 text-sm mb-4">Keep these documents for all claims. Not all will apply to every type of claim.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact section */}
            <div className="bg-sky-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Need Help With a Claim?</h2>
              <p className="text-sky-100 mb-6">Our team can help guide you through the process and liaise with your insurer on your behalf.</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@cover4you.co.nz" className="flex items-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Email Us →
                </a>
                <a href="mailto:hello@cover4you.co.nz" className="flex items-center gap-2 border border-white/50 hover:bg-white/10 font-medium px-5 py-2.5 rounded-xl transition-colors">
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CompareCTA variant="sidebar" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/faqs', label: 'Cruise Insurance FAQs' },
                  { href: '/cruise-insurance-guide', label: 'Complete Guide' },
                  { href: '/compare', label: 'Compare Providers' },
                  { href: '/contact', label: 'Contact Us' },
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
    </>
  );
}
