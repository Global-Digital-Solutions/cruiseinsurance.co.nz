'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 32000, suffix: '+', label: 'Cruise Sailings Globally Per Year', prefix: '' },
  { value: 6, suffix: '', label: 'Providers Compared', prefix: '' },
  { value: 180, suffix: '', label: 'From NZ$', prefix: 'NZ$' },
  { value: 24, suffix: 'hr', label: 'Quote Response', prefix: '' },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, animate }: { stat: Stat; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {stat.prefix}{animate ? count.toLocaleString() : '0'}{stat.suffix}
      </div>
      <div className="text-sky-300 text-sm">{stat.label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map(stat => <StatCard key={stat.label} stat={stat} animate={animate} />)}
    </div>
  );
}
