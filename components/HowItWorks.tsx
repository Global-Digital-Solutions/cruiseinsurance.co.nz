'use client';

import { ClipboardList, Phone, FileCheck, Anchor } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      step: '01',
      title: 'Tell Us About Your Cruise',
      description: 'Fill in our simple form — destination, travel dates, who\'s travelling, and any pre-existing conditions. Takes 2 minutes.',
    },
    {
      icon: Phone,
      step: '02',
      title: 'Our Advisers Compare Options',
      description: 'Within 24 hours, a specialist cruise insurance adviser reviews your requirements and compares options from NZ\'s top providers.',
    },
    {
      icon: FileCheck,
      step: '03',
      title: 'Review Your Personalised Quotes',
      description: 'Receive 2–3 tailored quotes with clear coverage comparisons. Your adviser explains what each policy covers and any important exclusions.',
    },
    {
      icon: Anchor,
      step: '04',
      title: 'Cruise With Confidence',
      description: 'Choose your preferred policy, complete your application, and set sail knowing you\'re properly protected for every eventuality.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting the right cruise insurance is simple. Our specialist advisers do the comparison work for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div key={step} className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-sky-500/40 transition-colors">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                {step}
              </div>
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={24} className="text-sky-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
