import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, blogCategories } from '@/data/blog-posts';
import { Calendar, Clock } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

export const metadata: Metadata = {
  title: 'Cruise Insurance Guides & News',
  description: 'Expert cruise insurance articles, guides, and tips for New Zealand travellers. Everything you need to know about protecting your cruise holiday.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndex() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-800 border-b border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Guides &amp; News</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Guides &amp; News</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Expert articles, guides, and tips on cruise insurance for New Zealand travellers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`}
          className="grid md:grid-cols-2 gap-0 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-sky-500/40 transition-colors group mb-12">
          <div className="aspect-video md:aspect-auto overflow-hidden">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded font-medium">Featured</span>
              <span className="bg-slate-700 px-2 py-0.5 rounded">{featured.category}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{featured.title}</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} read</span>
              <span>By {featured.author}</span>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500/40 transition-colors group">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded">{post.category}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
                <h2 className="font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">{post.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar size={11} /> {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
