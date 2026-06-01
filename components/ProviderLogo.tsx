interface ProviderLogoProps {
  name: string;
  domain?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProviderLogo({ name, size = 'md' }: ProviderLogoProps) {
  const sizeClass = size === 'lg' ? 'text-lg font-bold' : size === 'sm' ? 'text-sm font-semibold' : 'text-base font-semibold';

  return (
    <span className={`${sizeClass} text-gray-300 hover:text-white transition-colors whitespace-nowrap`}>
      {name}
    </span>
  );
}
