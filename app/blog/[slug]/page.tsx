import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import { getAuthorByName } from '@/data/authors';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const SITE_URL = 'https://cruiseinsurance.co.nz';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthorByName(post.author);
  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = blogPosts.filter(p => p.slug !== slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/blog/${slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${SITE_URL}/about`,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero image */}
      <div className="w-full aspect-[21/9] max-h-80 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-sky-400 transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded font-medium">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime} read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-sky-500 pl-4">{post.excerpt}</p>

            {/* Placeholder content */}
            <div className="prose-dark space-y-4 text-gray-400">
              <p className="leading-relaxed">
                Cruise insurance is an essential protection for any New Zealand traveller embarking on a cruise holiday.
                Whether you&apos;re sailing domestically around New Zealand, exploring the South Pacific islands, or venturing
                further afield to Asia, Europe, or beyond, the right cruise insurance policy protects your investment and
                your health.
              </p>
              <p className="leading-relaxed">
                Standard travel insurance policies are designed for land-based holidays. They often exclude or inadequately
                cover the unique risks associated with cruising — including onboard medical expenses, cabin confinement,
                missed port departures, and the high cost of maritime medical evacuations.
              </p>
              <p className="leading-relaxed">
                Our specialist cruise insurance advisers compare policies from New Zealand&apos;s leading providers to find
                the best cover for your specific cruise, destination, and traveller profile. Whether you&apos;re a solo
                adventurer, a couple celebrating an anniversary, a family on a first cruise, or a senior with pre-existing
                conditions — we have the expertise to find the right policy.
              </p>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 my-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    Cruise insurance covers risks that standard travel insurance doesn&apos;t
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    Unlimited medical cover is essential for maritime travel
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    Pre-existing conditions can be covered with full disclosure
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    Buy insurance as soon as you make your first trip payment
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed">
                To get personalised cruise insurance quotes from NZ&apos;s leading providers, use our free comparison service.
                Our specialist advisers will compare options for your specific cruise, destination, and requirements — and
                get back to you within 24 hours.
              </p>
            </div>

            {/* Author bio */}
            {author && (
              <div className="mt-10 bg-slate-800 rounded-xl p-5 border border-slate-700 flex items-start gap-4">
                <img src={author.avatar} alt={author.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">{author.name}</p>
                  <p className="text-sm text-sky-400 mb-2">{author.title}</p>
                  <p className="text-sm text-gray-400">{author.bio}</p>
                </div>
              </div>
            )}

            {/* Sources */}
            <div className="mt-8 text-xs text-gray-600 border-t border-slate-800 pt-6">
              <p className="font-semibold text-gray-500 mb-2">Sources & References</p>
              <p>Information based on publicly available data from NZ cruise insurance providers and industry sources. This article is for general information only and does not constitute financial advice. Please read policy wording carefully before purchasing.</p>
            </div>
          </article>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="flex gap-3 group">
                    <img src={p.image} alt={p.title} className="w-16 h-12 object-cover rounded flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-300 group-hover:text-sky-400 transition-colors line-clamp-2 font-medium">{p.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{p.readTime} read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/cruise-insurance-guide', label: 'Cruise Insurance Guide' },
                  { href: '/making-a-claim', label: 'Making a Claim' },
                  { href: '/faqs', label: 'FAQs' },
                  { href: '/compare', label: 'Compare Providers' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-sky-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
