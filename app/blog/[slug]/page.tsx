import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CompareCTA from '@/components/CompareCTA';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import { getAuthorByName } from '@/data/authors';
import { Calendar, Clock, ArrowLeft, CheckCircle } from 'lucide-react';

const SITE_URL = 'https://www.cruiseinsurance.co.nz';

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
    alternates: { canonical: `${SITE_URL}/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}/`,
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
    '@type': 'BlogPosting',
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2">
            <Link href="/blog/" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-sky-400 transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded font-medium">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime} read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-sky-500 pl-4">{post.excerpt}</p>

            {/* Structured article content */}
            {post.sections && post.sections.length > 0 ? (
              <div className="space-y-1 text-gray-400">

                {/* Key takeaways */}
                {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
                    <h3 className="text-base font-semibold text-white mb-4">Key Takeaways</h3>
                    <ul className="space-y-2">
                      {post.keyTakeaways.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sections */}
                {post.sections.map((section, si) => (
                  <div key={si} className="mb-8">
                    {section.h2 && (
                      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{section.h2}</h2>
                    )}
                    {section.h3 && (
                      <h3 className="text-lg font-semibold text-white mt-6 mb-3">{section.h3}</h3>
                    )}
                    {section.paragraphs && section.paragraphs.map((para, pi) => (
                      <p key={pi} className="leading-relaxed mb-4 text-gray-400">{para}</p>
                    ))}
                    {section.callout && (
                      <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl p-5 my-5">
                        <p className="font-semibold text-sky-300 text-sm mb-3">{section.callout.heading}</p>
                        <ul className="space-y-2">
                          {section.callout.items.map((item, ci) => (
                            <li key={ci} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-sky-400 mt-0.5 flex-shrink-0">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.tip && (
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-4">
                        <p className="text-sm text-amber-200"><span className="font-semibold text-amber-400">Tip: </span>{section.tip}</p>
                      </div>
                    )}
                    {section.table && (
                      <div className="overflow-x-auto my-5">
                        {section.table.caption && <p className="text-sm font-semibold text-white mb-2">{section.table.caption}</p>}
                        <table className="w-full text-sm bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                          <thead className="bg-slate-700/60">
                            <tr>
                              {section.table.headers.map((h, hi) => (
                                <th key={hi} className="text-left p-3 text-gray-300 font-medium">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, ri) => (
                              <tr key={ri} className={ri % 2 === 0 ? '' : 'bg-slate-700/30'}>
                                {row.map((cell, ci) => (
                                  <td key={ci} className="p-3 text-gray-400">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}

                {/* Compare CTA inline */}
                <div className="bg-sky-600/15 border border-sky-500/30 rounded-xl p-6 my-8 text-center">
                  <p className="text-white font-semibold mb-2">Ready to compare cruise insurance for your voyage?</p>
                  <p className="text-gray-400 text-sm mb-4">Get quotes from all 6 leading NZ providers side by side.</p>
                  <Link href="/compare/" className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                    Compare Providers →
                  </Link>
                </div>

              </div>
            ) : (
              /* Fallback placeholder for posts without structured content */
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
                  the best cover for your specific cruise, destination, and traveller profile.
                </p>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 my-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {['Cruise insurance covers risks that standard travel insurance doesn\'t',
                      'Unlimited medical cover is essential for maritime travel',
                      'Pre-existing conditions can be covered with full disclosure',
                      'Buy insurance as soon as you make your first trip payment',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-sky-400 mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Author bio */}
            {author && (
              <div className="mt-10 bg-slate-800 rounded-xl p-5 border border-slate-700 flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
              <p className="font-semibold text-gray-500 mb-2">Sources &amp; References</p>
              <p>Information based on publicly available data from the Cruise Lines International Association (CLIA), cruise industry market reports, NZ insurance provider documentation, and publicly available travel advisories. This article is for general information only and does not constitute financial or insurance advice. Always read policy wording carefully before purchasing and consider your specific circumstances.</p>
            </div>
          </article>

          {/* Sidebar */}
          <div className="space-y-6">
            <CompareCTA variant="sidebar" />

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}/`} className="flex gap-3 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
              <h3 className="font-semibold text-white mb-3">Useful Guides</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/cruise-insurance-guide/', label: 'Cruise Insurance Guide' },
                  { href: '/compare/', label: 'Compare Providers' },
                  { href: '/faqs/', label: 'FAQs' },
                  { href: '/making-a-claim/', label: 'Making a Claim' },
                  { href: '/nz-cruise-insurance/best-cruise-insurance-nz/', label: 'Best Cruise Insurance' },
                  { href: '/nz-cruise-insurance/senior-cruise-insurance/', label: 'Senior Cruise Insurance' },
                  { href: '/nz-cruise-insurance/cheap-cruise-insurance/', label: 'Cheap Cruise Insurance' },
                  { href: '/nz-cruise-insurance/medical-cover-cruise/', label: 'Medical Cover at Sea' },
                ].map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-sky-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destination-specific links for Destinations category */}
            {post.category === 'Destinations' && (
              <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <h3 className="font-semibold text-white mb-3">By Destination</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { href: '/destinations/asian-cruise-insurance/', label: 'Asian Cruise Insurance' },
                    { href: '/destinations/european-cruise-insurance/', label: 'European Cruise Insurance' },
                    { href: '/destinations/south-pacific-cruise-insurance/', label: 'South Pacific Cruises' },
                    { href: '/destinations/australian-cruise-insurance/', label: 'Australian Cruises' },
                    { href: '/destinations/worldwide-cruise-insurance/', label: 'Worldwide Cover' },
                    { href: '/destinations/domestic-cruise-insurance/', label: 'NZ Domestic Cruises' },
                  ].map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-gray-400 hover:text-sky-400 transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
