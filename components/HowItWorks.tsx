import Link from 'next/link';
import { Search, LayoutList, ExternalLink, Anchor } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Tell Us About Your Cruise',
      description: 'Select your destination, who\'s travelling, and your cruise type. Use our comparison tool to narrow down the providers that suit your situation.',
    },
    {
      icon: LayoutList,
      step: '02',
      title: 'Compare Providers Side by Side',
      description: 'See medical cover limits, cabin confinement, missed port, cancellation cover, and pricing across the leading cruise insurance providers — all in one place.',
    },
    {
      icon: ExternalLink,
      step: '03',
      title: 'Get a Quote Direct from the Insurer',
      description: 'Click through to your chosen provider\'s website to get a personalised quote. You deal directly with the insurer — we may earn a referral fee at no extra cost to you.',
    },
    {
      icon: Anchor,
      step: '04',
      title: 'Cruise with Confidence',
      description: 'Purchase your policy directly from the insurer and set sail knowing you\'re properly covered for medical emergencies, evacuations, and everything in between.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Compare cruise insurance providers in minutes and get a quote directly from the insurer — simple, independent, and free to use.
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
        <div className="text-center mt-10">
          <Link href="/compare/"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
            Compare Providers Now →
          </Link>
          <p className="text-gray-500 text-xs mt-3">Independent comparison · No broker fees · Direct to insurer</p>
        </div>
      </div>
    </section>
  );
}
