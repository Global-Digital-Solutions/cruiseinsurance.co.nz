import { Shield, Star, Users, Clock } from 'lucide-react';

export default function TrustBlock() {
  const stats = [
    { icon: Shield, value: '6+', label: 'Insurance Providers Compared' },
    { icon: Star, value: '4.7/5', label: 'Average Customer Rating' },
    { icon: Users, value: '32,000+', label: 'Cruise Sailings Worldwide' },
    { icon: Clock, value: '24hr', label: 'Quote Response Time' },
  ];

  return (
    <section className="bg-slate-800 border-y border-slate-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Icon size={20} className="text-sky-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
