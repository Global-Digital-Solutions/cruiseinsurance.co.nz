export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export const authors: Author[] = [
  {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'Senior Insurance Adviser, CruiseInsurance.co.nz',
    bio: 'Sarah has over 12 years of experience in travel and cruise insurance, specialising in helping New Zealand travellers navigate pre-existing condition cover and senior policies. She has personally sailed on over 20 cruises across the Pacific, Asia, and Mediterranean.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
  },
  {
    slug: 'david-chen',
    name: 'David Chen',
    title: 'Cruise Insurance Specialist, Cover4You',
    bio: 'David specialises in cruise insurance comparison and has helped thousands of Kiwi families find the right coverage at the best price. With a background in marine insurance, he understands the unique risks of maritime travel.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    slug: 'emma-wilson',
    name: 'Emma Wilson',
    title: 'Travel Insurance Expert, CruiseInsurance.co.nz',
    bio: 'Emma is a qualified financial adviser with specialisation in travel and cruise insurance. She has written extensively on cruise insurance topics and is passionate about helping Kiwis cruise with confidence.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(a => a.name === name);
}
