import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

const usps = [
  { icon: Shield, text: 'Unlimited Medical Cover' },
  { icon: Users, text: 'Specialist Cruise Advisers' },
  { icon: CheckCircle, text: 'Free No-Obligation Quotes' },
  { icon: Clock, text: '24hr Quote Response' },
];

export default function USPBar() {
  return (
    <div className="bg-sky-600 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {usps.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white text-sm">
              <Icon size={15} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
