import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { landingPages } from '@/data/landing-pages';
import { destinationTypes } from '@/data/destination-types';
import { passengerTypes } from '@/data/passenger-types';
import { blogPosts } from '@/data/blog-posts';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';
const NOW = new Date('2026-04-14');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/compare`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/contact`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/cruise-insurance-guide`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${SITE_URL}/making-a-claim`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/faqs`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE_URL}/about`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.60 },
    { url: `${SITE_URL}/privacy`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.30 },
    { url: `${SITE_URL}/terms`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.30 },
    { url: `${SITE_URL}/disclaimer`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.30 },
  ];

  const destinationPages: MetadataRoute.Sitemap = destinationTypes.map(d => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const passengerPages: MetadataRoute.Sitemap = passengerTypes.map(p => ({
    url: `${SITE_URL}/passengers/${p.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.80,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.70,
  }));

  return [...staticPages, ...destinationPages, ...passengerPages, ...blogPostPages];
}
