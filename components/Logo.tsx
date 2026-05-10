export default function Logo({ variant = 'default' }: { variant?: 'default' | 'white' }) {
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';
  return (
    <div className="flex items-center gap-0">
      <span className={`text-xl font-extrabold ${textColor} tracking-tight`}>
        Tradie<span className="text-orange-500">Insurance</span><span className={variant === 'white' ? 'text-gray-400' : 'text-gray-500'} style={{fontWeight: 600}}>.co.nz</span>
      </span>
    </div>
  );
}
