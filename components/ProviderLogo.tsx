'use client';

import { useState } from 'react';

interface ProviderLogoProps {
  name: string;
  domain?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProviderLogo({ name, domain, size = 'md' }: ProviderLogoProps) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 max-w-[100px]',
    md: 'h-10 max-w-[130px]',
    lg: 'h-12 max-w-[160px]',
  };

  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (imgError || !domain) {
    return (
      <div className={`${sizeClasses[size]} flex items-center`}>
        <div className="bg-sky-500/20 rounded-lg px-3 py-1.5 text-sky-400 font-bold text-sm">
          {initials}
        </div>
      </div>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      className={`${sizeClasses[size]} object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity`}
      onError={() => setImgError(true)}
    />
  );
}
