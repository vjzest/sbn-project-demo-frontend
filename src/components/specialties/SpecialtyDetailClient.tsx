'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { specialtiesList } from '@/data/services';
import { notFound } from 'next/navigation';
import KPIMetrics from '@/components/sections/KPIMetrics';
import WorkflowVisual from '@/components/sections/WorkflowVisual';
import ProblemSnapshot from '@/components/sections/ProblemSnapshot';
import AIIndicator from '@/components/sections/AIIndicator';
import ComplianceShield from '@/components/sections/ComplianceShield';
import { FaArrowRight } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function SpecialtyDetailClient({ slug }: { slug: string }) {
    const specialty = specialtiesList.find((s) => s.slug === slug);
    if (!specialty) return notFound();

    return (
        <div 
            className="relative selection:bg-[#0033e7] selection:text-white pb-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

            {/* Custom Premium Hero */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-28 text-center px-4 relative overflow-hidden z-10">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-8 px-6 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            Industry Expertise
                        </div>
                        <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                            {specialty.bannerTitle}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-semibold leading-relaxed max-w-3xl mx-auto">
                            {specialty.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="relative flex flex-col pt-10 border-t border-white/50 z-10">
                <div className="relative z-10 pb-24">
                    {specialty.sections.map((section: any, index: number) => {
                        const isCta = section.type === 'cta';

                        if (section.type === 'problem-snapshot') {
                            return <ProblemSnapshot key={index} title={section.title} description={section.description} points={section.data || []} />;
                        }

                        if (section.type === 'workflow') {
                            return <WorkflowVisual key={index} title={section.title} subtitle={section.subtitle} steps={section.data || []} />;
                        }

                        if (section.type === 'kpi') {
                            return <KPIMetrics key={index} title={section.title} subtitle={section.subtitle} metrics={section.data || []} />;
                        }

                        if (section.type === 'ai-indicator') {
                            return <AIIndicator key={index} stage={section.stage || ''} description={section.description || ''} impact={section.data || ''} />;
                        }

                        if (section.type === 'compliance-shield') {
                            return <ComplianceShield key={index} />;
                        }

                        if (isCta) {
                            return (
                                <section key={index} 
                                    className="text-white relative py-20 overflow-hidden my-16 rounded-2xl mx-4 lg:mx-auto max-w-7xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] group bg-cover bg-center"
                                    style={{ backgroundImage: 'url("/background%20image.webp")' }}
                                >
                                    <div className="absolute inset-0 bg-[#0B1F33]/90 z-0"></div>
                                    <div className="container mx-auto px-10 relative z-10 text-center">
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tighter">
                                            {section.title}
                                        </h2>
                                        {section.content && (
                                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-bold mb-12">
                                                {section.content}
                                            </p>
                                        )}
                                        <Link href="/contact-us" className="bg-[#0033e7] text-white px-12 py-5 rounded-xl font-black inline-flex items-center gap-4 transition-all duration-300 uppercase tracking-[2px] hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,51,231,0.3)] shadow-xl no-underline">
                                            Talk To An Expert <FaArrowRight />
                                        </Link>
                                    </div>
                                </section>
                            );
                        }

                        // Regular Content Section (Glass Card Style)
                        return (
                            <section key={index} className="py-12 lg:py-16 relative">
                                <div className="container mx-auto px-4 max-w-7xl">
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className={`flex flex-col md:flex-row items-stretch gap-8 md:gap-16 bg-white/90 backdrop-blur-2xl rounded-2xl p-8 md:p-16 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] ${section.imagePosition === 'right' ? '' : 'md:flex-row-reverse'}`}
                                    >
                                        <div className="flex-1 flex flex-col justify-center">
                                            {section.title && (
                                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                                                    {section.title}
                                                </h2>
                                            )}

                                            <div className="space-y-6">
                                                {Array.isArray(section.content) ? (
                                                    section.content.map((para: string, i: number) => (
                                                        <p key={i} className="text-slate-600 leading-[1.8] text-[18px] md:text-[20px] font-bold tracking-tight">{para}</p>
                                                    ))
                                                ) : (
                                                    <p className="text-slate-600 leading-[1.8] text-[18px] md:text-[20px] font-bold tracking-tight">{section.content}</p>
                                                )}
                                            </div>

                                            {section.list && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                                    {section.list.map((item: string, i: number) => (
                                                        <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-blue-50/50 border border-blue-100 group hover:bg-[#0033e7] transition-all duration-300">
                                                            <div className="w-10 h-10 rounded-full bg-white text-[#0033e7] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                            <span className="text-slate-900 text-[15px] font-black group-hover:text-white transition-colors">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {section.image && (
                                            <div className="flex-1 w-full relative group min-h-[300px]">
                                                <div className="absolute inset-0 bg-[#0033e7]/5 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                                    <img
                                                        src={section.image}
                                                        alt={section.title || specialty.title}
                                                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
