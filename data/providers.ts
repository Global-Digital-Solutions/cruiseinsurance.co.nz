export interface Provider {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  established: string;
  claimsRating: string;
  keyFeature: string;
  cruiseSpecific: boolean;
  coverageHighlights: string[];
  limitations: string[];
  avgPremium: string;
  website: string;
  quoteUrl: string;
}

export const providers: Provider[] = [
  {
    slug: '1cover',
    name: '1Cover',
    logo: '1cover.com',
    rating: 4.6,
    reviewCount: 8420,
    established: '2003',
    claimsRating: '4.5/5',
    keyFeature: "NZ's most popular cruise specialist — dedicated cruise cover available",
    cruiseSpecific: true,
    coverageHighlights: [
      'Dedicated cruise insurance product',
      'Unlimited medical expenses',
      'Cabin confinement cover included',
      'Missed port departure cover',
      'Cancellation & curtailment',
      'Pre-existing conditions assessment',
    ],
    limitations: [
      'Age limits apply on some policies',
      'Activity exclusions for extreme sports',
    ],
    avgPremium: '~$280',
    website: 'https://1cover.co.nz',
    quoteUrl: 'https://www.1cover.co.nz/cruise-insurance/',
  },
  {
    slug: 'cover-more',
    name: 'Cover-More',
    logo: 'covermore.com',
    rating: 4.5,
    reviewCount: 12300,
    established: '1986',
    claimsRating: '4.4/5',
    keyFeature: 'Global insurance giant with specialist cruise cover and strong medical limits',
    cruiseSpecific: true,
    coverageHighlights: [
      'Specialist cruise extension available',
      'Unlimited emergency medical',
      'Evacuation & repatriation',
      'Strong cancellation limits',
      'Annual multi-trip policies',
      'Global emergency assistance network',
    ],
    limitations: [
      'Cruise cover requires specific cruise product',
      'Some pre-existing condition exclusions',
    ],
    avgPremium: '~$310',
    website: 'https://www.covermore.co.nz',
    quoteUrl: 'https://www.covermore.co.nz/travel-insurance/cruise-travel-insurance',
  },
  {
    slug: 'southern-cross',
    name: 'Southern Cross Travel',
    logo: 'scti.co.nz',
    rating: 4.7,
    reviewCount: 18500,
    established: '1982',
    claimsRating: '4.8/5',
    keyFeature: "NZ's most trusted travel insurer — excellent claims service and cruise cover",
    cruiseSpecific: false,
    coverageHighlights: [
      'Market-leading claims satisfaction rating',
      'Comprehensive medical cover',
      'Cruise extension available',
      'Strong cancellation protection',
      'NZ-owned and operated',
      'Award-winning customer service',
    ],
    limitations: [
      'Cruise-specific cover requires cruise extension',
      'Cabin confinement may be limited on base product',
    ],
    avgPremium: '~$295',
    website: 'https://www.scti.co.nz',
    quoteUrl: 'https://www.scti.co.nz/travel-insurance/cruise',
  },
  {
    slug: 'travel-insurance-direct',
    name: 'Travel Insurance Direct',
    logo: 'travelinsurancedirect.co.nz',
    rating: 4.3,
    reviewCount: 6200,
    established: '2000',
    claimsRating: '4.2/5',
    keyFeature: 'Competitive pricing with solid cruise cover — good value for budget-conscious travellers',
    cruiseSpecific: false,
    coverageHighlights: [
      'Competitive premiums',
      'Cruise cover available',
      'Annual multi-trip options',
      'Pre-existing conditions',
      'Medical evacuation',
      'Online purchase and claims',
    ],
    limitations: [
      'Medical limits lower than premium providers',
      'Claims process can be slower',
    ],
    avgPremium: '~$245',
    website: 'https://www.travelinsurancedirect.co.nz',
    quoteUrl: 'https://www.travelinsurancedirect.co.nz/travel/cruise-travel-insurance',
  },
  {
    slug: 'insure-and-go',
    name: 'InsureandGo',
    logo: 'insureandgo.co.nz',
    rating: 4.2,
    reviewCount: 4800,
    established: '2000',
    claimsRating: '4.1/5',
    keyFeature: 'Flexible cruise insurance options with competitive pricing for seniors',
    cruiseSpecific: true,
    coverageHighlights: [
      'Dedicated cruise products',
      'Good senior cover options',
      'Competitive annual policies',
      'Cabin confinement included',
      'Missed port departure',
      'Pre-existing conditions available',
    ],
    limitations: [
      'Some regions have sub-limits',
      'High-risk activity exclusions',
    ],
    avgPremium: '~$265',
    website: 'https://www.insureandgo.co.nz',
    quoteUrl: 'https://www.insureandgo.co.nz/travel-insurance/cruise/',
  },
  {
    slug: 'allianz',
    name: 'Allianz Partners',
    logo: 'allianz.co.nz',
    rating: 4.4,
    reviewCount: 9100,
    established: '1890',
    claimsRating: '4.3/5',
    keyFeature: 'Global insurance giant with comprehensive worldwide cruise protection',
    cruiseSpecific: false,
    coverageHighlights: [
      'Worldwide emergency network',
      'High medical limits',
      'Cruise cover available',
      'Strong evacuation coverage',
      'Multiple policy options',
      'International medical network',
    ],
    limitations: [
      'More expensive than NZ-specific providers',
      'Cruise-specific features vary by product',
    ],
    avgPremium: '~$340',
    website: 'https://www.allianz.co.nz',
    quoteUrl: 'https://www.allianztravel.co.nz/travel-insurance/cruise-travel-insurance.html',
  },
];

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find(p => p.slug === slug);
}
