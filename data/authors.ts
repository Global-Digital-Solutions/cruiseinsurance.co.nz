export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export const authors: Author[] = [
  {
    slug: 'darin-b',
    name: 'Darin B.',
    title: 'Travel Insurance Specialist & Founder, Cover4You',
    bio: 'Darin has been actively involved in travel insurance products across worldwide markets since 2005 and is the founder of Cover4You. He is passionate about finding easier ways to connect people with the right insurance — whatever their travel interest, destination, personal circumstances, or budget.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    slug: 'james-h',
    name: 'James H.',
    title: 'Senior Travel Insurance Adviser, Cover4You',
    bio: 'James has over 15 years of experience advising on travel and cruise insurance across multiple markets. He specialises in helping travellers with complex requirements — including seniors, pre-existing medical conditions, and extended voyages — find appropriate cover at competitive prices.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
  },
  {
    slug: 'sarah-m',
    name: 'Sarah M.',
    title: 'Travel Insurance Writer, Cover4You',
    bio: 'Sarah has written about travel insurance and financial products for over a decade. With a background in consumer finance journalism, she focuses on making complex insurance topics accessible and practical for everyday travellers planning their next cruise or adventure.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(a => a.name === name);
}
