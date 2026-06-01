export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cruise-insurance-guide',
    title: 'Cruise Insurance Guide: Navigating the Waters of Financial Protection',
    date: '2025-10-15',
    author: 'Sarah M.',
    excerpt: 'A comprehensive guide to cruise insurance for New Zealand travellers — covering medical emergencies, trip cancellation, cabin confinement, and everything you need to know before you sail.',
    category: 'Guides',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-tips',
    title: 'Essential Cruise Insurance Tips for Kiwi Travellers',
    date: '2025-10-22',
    author: 'James H.',
    excerpt: 'Expert tips on choosing the right cruise insurance policy — what to look for, what to avoid, and how to make sure you\'re fully protected on your next voyage.',
    category: 'Tips & Advice',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-options',
    title: 'Understanding Your Cruise Insurance Options',
    date: '2025-11-01',
    author: 'Sarah M.',
    excerpt: 'From single-trip to annual policies, from domestic to worldwide cover — a comprehensive breakdown of all your cruise insurance options and which suits your travel style.',
    category: 'Coverage',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-coverage',
    title: 'What Does Cruise Insurance Actually Cover?',
    date: '2025-11-10',
    author: 'Darin B.',
    excerpt: 'A detailed breakdown of cruise insurance coverage — medical expenses, evacuation, cabin confinement, cancellation, luggage, and the less-known benefits most travellers overlook.',
    category: 'Coverage',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-rates',
    title: 'Cruise Insurance Rates: Complete Cost Guide for New Zealand Travellers',
    date: '2025-11-20',
    author: 'James H.',
    excerpt: 'Everything you need to know about cruise insurance costs — average premiums by destination, age, and policy type, plus tips to get the best rates.',
    category: 'Costs',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    slug: 'seniors-cruise-insurance-guide',
    title: 'The Complete Guide to Cruise Insurance for Seniors',
    date: '2025-12-01',
    author: 'Sarah M.',
    excerpt: 'Senior travellers face unique insurance challenges — pre-existing conditions, age limits, and higher medical risks. This guide helps Kiwis over 60 find the right cruise cover.',
    category: 'Seniors',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
  },
  {
    slug: 'pre-existing-conditions-cruise',
    title: 'Cruise Insurance with Pre-Existing Medical Conditions: What Kiwis Need to Know',
    date: '2025-12-10',
    author: 'Darin B.',
    excerpt: 'Navigating cruise insurance with pre-existing medical conditions doesn\'t have to be difficult. Here\'s everything you need to know about declaration, coverage, and finding the best policy.',
    category: 'Medical',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    slug: 'cruise-insurance-vs-travel-insurance',
    title: 'Cruise Insurance vs Travel Insurance: What\'s the Difference?',
    date: '2025-12-18',
    author: 'James H.',
    excerpt: 'Many Kiwis assume their standard travel insurance covers cruise-specific risks. Discover why cruise insurance is different and why dedicated cruise cover matters.',
    category: 'Guides',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
  },
  {
    slug: 'south-pacific-cruise-guide',
    title: 'South Pacific Cruise Insurance: Your Complete Guide for Kiwi Travellers',
    date: '2026-01-08',
    author: 'Sarah M.',
    excerpt: 'Planning a South Pacific cruise? Fiji, Vanuatu, Tonga, and beyond offer incredible experiences — but the right insurance is essential given limited medical facilities across Pacific islands.',
    category: 'Destinations',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
  },
];

export const blogCategories = ['All', 'Guides', 'Coverage', 'Tips & Advice', 'Costs', 'Seniors', 'Medical', 'Destinations'];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
