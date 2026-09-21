import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import axios from 'axios';
import { constructMetadata } from '@/utils/seo';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import { FaChevronRight, FaRegClock, FaRegCalendarAlt, FaUserEdit, FaListUl, FaLink, FaShareAlt } from 'react-icons/fa';

export const revalidate = 0;

async function getPost(slug: string) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`, {
            params: { _t: Date.now() }
        });
        return res.data.data;
    } catch (err) {
        return null;
    }
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Post Not Found' };

    return constructMetadata(null, {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        image: post.image,
        slug: `blog/${slug}`,
        keywords: post.focusKeywords
    });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) notFound();

    // Auto-generate Table of Contents from headings (assuming markdown style # or HTML <h2>)
    const lines = post.content.split('\n');
    const toc = lines
        .filter((line: string) => line.startsWith('## ') || line.startsWith('### '))
        .map((line: string) => ({
            text: line.replace(/#/g, '').trim(),
            id: line.replace(/#/g, '').trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
            level: line.startsWith('### ') ? 3 : 2
        }));

    // Schema Markup
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': post.schemaType || 'BlogPosting',
        headline: post.title,
        image: post.image,
        author: post.author?.name && post.author.name !== 'SBN Healthcare Team'
            ? {
                '@type': 'Person',
                name: post.author.name,
                description: post.author?.bio
            }
            : {
                '@type': 'Organization',
                name: 'SBN Healthcare Solution',
                url: 'https://www.sbnhealthcaresolution.com'
            },
        publisher: {
            '@type': 'Organization',
            name: 'SBN Healthcare Solution',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.sbnhealthcaresolution.com/Logo.webp'
            }
        },
        datePublished: post.date,
        dateModified: post.updatedAt || post.date,
        description: post.excerpt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.sbnhealthcaresolution.com/blog/${post.slug}`
        }
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* JSON-LD for Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHeader
                title={post.title}
                subtitle={post.category || 'Insights'}
                description={post.excerpt}
            />

            {/* Breadcrumbs */}
            <div className="bg-slate-50 border-y border-slate-100 py-6">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                        <Link href="/" className="hover:text-[var(--primary-color)] transition-colors">Home</Link>
                        <FaChevronRight size={8} />
                        <Link href="/blog" className="hover:text-[var(--primary-color)] transition-colors">Insights</Link>
                        <FaChevronRight size={8} />
                        <span className="text-slate-900 truncate max-w-[200px] md:max-w-none">{post.title}</span>
                    </nav>
                </div>
            </div>

            <article className="py-20 md:py-24">
                <div className="max-w-[1550px] mx-auto px-2 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Sidebar / Meta */}
                        <div className="lg:col-span-1 hidden lg:block">
                            <div className="sticky top-32 space-y-12 flex flex-col items-center">
                                <div className="flex flex-col items-center gap-6">
                                    <button
                                        type="button"
                                        aria-label="Share article"
                                        className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all"
                                    >
                                        <FaShareAlt size={16} />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Copy article link"
                                        className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all"
                                    >
                                        <FaLink size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-9 min-w-0">
                            <div className="max-w-full mx-auto">
                                
                                {/* Post Thumbnail */}
                                {post.image && post.image !== 'default-blog.webp' && (
                                    <div className="mb-10 rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl relative">
                                        <img src={post.image} alt={post.title} className="w-full h-auto max-h-[600px] object-cover" />
                                    </div>
                                )}

                                {/* Post Metadata Info */}
                                <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-12 py-8 border-b border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 text-[var(--primary-color)]"><FaRegCalendarAlt /></div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                            {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 text-[var(--primary-color)]"><FaRegClock /></div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{post.readTime || '5 Min Read'}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 text-[var(--primary-color)]"><FaUserEdit /></div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{post.author?.name || 'SBN Team'}</span>
                                    </div>
                                </div>

                                {/* Table of Contents (Mobile/Tablet and Desktop inline) */}
                                {toc.length > 0 && (
                                    <div className="mb-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
                                        <div className="flex items-center gap-3 mb-6">
                                            <FaListUl className="text-[var(--primary-color)]" />
                                            <h4 className="text-[11px] font-black uppercase tracking-[3px] text-slate-900">Inside this article</h4>
                                        </div>
                                        <nav className="space-y-4">
                                            {toc.map((item: any, i: number) => (
                                                <a
                                                    key={i}
                                                    href={`#${item.id}`}
                                                    className={`block text-sm font-bold text-slate-600 hover:text-[var(--primary-color)] transition-colors ${item.level === 3 ? 'ml-6 border-l border-slate-200 pl-4' : ''}`}
                                                >
                                                    {item.text}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                )}

                                {/* Article Body */}
                                <div className="max-w-none break-normal overflow-x-hidden">
                                    <div 
                                        className="blog-content prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed font-medium text-base lg:text-lg"
                                        dangerouslySetInnerHTML={{ __html: post.content.replace(/&nbsp;/g, ' ') }}
                                    />

                                    {/* Author Box */}
                                    <div className="mt-20 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left overflow-hidden">
                                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-white shadow-xl flex-shrink-0">
                                            <img src={post.author?.image || '/Logo.webp'} alt={post.author?.name} className="w-full h-full object-contain p-2" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="inline-block px-3 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-lg text-[9px] font-black uppercase tracking-widest mb-3">Author Insight</div>
                                            <h4 className="text-xl font-black text-slate-900 mb-4">{post.author?.name || 'SBN Healthcare Team'}</h4>
                                            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
                                                {post.author?.bio || "Expert insights on Healthcare Revenue Cycle Management and clinical operational efficiency. Our team provides the latest updates in medical billing and coding standards."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Call to Action */}
                                    <div className="my-16 p-12 bg-[#0033E7] rounded-[3rem] text-white overflow-hidden relative shadow-2xl group transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,51,231,0.3)]">
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter text-white">Ready to Scale Your Practice?</h3>
                                            <p className="text-blue-100 mb-10 max-w-[500px] font-bold text-sm">
                                                Speak with an SBN platform specialist to discover how our Governance Framework can transform your Revenue Cycle.
                                            </p>
                                            <Link href="/contact-us" className="inline-block bg-white text-[#0033E7] font-black px-10 py-5 rounded-2xl uppercase tracking-[2px] text-xs hover:scale-105 transition-all shadow-xl active:scale-95">
                                                Get Expert Consultation
                                            </Link>
                                        </div>
                                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full scale-150 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar (Optional) */}
                        <div className="lg:col-span-2 hidden lg:block">
                            <div className="sticky top-32 space-y-12">
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                    <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-900 mb-6">Article Categories</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['RCM', 'Billing', 'Compliance', 'Healthcare IT'].map(cat => (
                                            <span key={cat} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-tighter hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] cursor-pointer transition-all uppercase">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-20 pt-12 border-t border-slate-100 flex justify-between items-center">
                        <Link href="/blog" className="flex items-center gap-3 text-[var(--primary-color)] font-black text-[10px] uppercase tracking-[3px] group">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            </div>
                            Back to Core Insights
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
