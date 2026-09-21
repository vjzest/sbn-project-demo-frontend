'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import KPIMetrics from '@/components/sections/KPIMetrics';
import WorkflowVisual from '@/components/sections/WorkflowVisual';
import ProblemSnapshot from '@/components/sections/ProblemSnapshot';
import AIIndicator from '@/components/sections/AIIndicator';
import ComplianceShield from '@/components/sections/ComplianceShield';
import { servicesList } from '@/data/services';
import { notFound } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ServiceDetailClient({ slug }: { slug: string }) {
    const service = servicesList.find((s) => s.slug === slug);
    if (!service) return notFound();

    return (
        <div 
            className="relative selection:bg-[#0033e7] selection:text-white pb-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/70 to-white/95 z-0 pointer-events-none"></div>
            
            {/* Animated Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1000px] overflow-hidden pointer-events-none z-0">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-48 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-teal-300/10 rounded-full blur-[120px]"
                />
            </div>

            {/* Custom Premium Hero */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 text-center px-4 relative overflow-hidden z-20">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/40 text-[#0033e7] font-black uppercase text-[10px] md:text-[11px] tracking-[5px] mb-10 px-8 py-3 rounded-full shadow-2xl">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-ping"></span>
                            Enterprise Solutions
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-10 text-slate-900 px-4">
                            {service.bannerTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-bold leading-relaxed max-w-3xl mx-auto tracking-tight">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="relative flex flex-col pt-10 border-t border-white/50 z-10">
                <div className="relative z-10 pb-24">
                    {service.sections.map((section: any, index: number) => {
                        const isCta = section.type === 'cta';

                        if (section.type === 'problem-snapshot') {
                            return <ProblemSnapshot key={index} title={section.title} points={section.data || []} />;
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
                                    className="relative py-20 overflow-hidden my-16 rounded-3xl mx-4 lg:mx-auto max-w-7xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] group bg-[#f8faff] border border-blue-50"
                                >
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50/40 rounded-full blur-[100px] -ml-20 -mb-20"></div>
                                    
                                    <div className="container mx-auto px-10 relative z-10 text-center">
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter">
                                            {section.title}
                                        </h2>
                                        {section.content && (
                                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-bold mb-12">
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
                            <section key={index} className="py-12 lg:py-20 relative">
                                <div className="container mx-auto px-4 max-w-6xl">
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className={`flex flex-col md:flex-row items-stretch gap-10 md:gap-16 bg-white/60 backdrop-blur-3xl rounded-3xl p-10 md:p-16 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] ${section.imagePosition === 'right' ? '' : 'md:flex-row-reverse'}`}
                                    >
                                        <div className="flex-1 flex flex-col justify-center">
                                            {section.title && (
                                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tighter">
                                                    {section.title}
                                                </h2>
                                            )}

                                            <div className="space-y-8">
                                                {Array.isArray(section.content) ? (
                                                    section.content.map((para: string, i: number) => (
                                                        <p key={i} className="text-slate-600 leading-[1.8] text-[18px] md:text-[21px] font-bold tracking-tight">{para}</p>
                                                    ))
                                                ) : (
                                                    <p key={index} className="text-slate-600 leading-[1.8] text-[18px] md:text-[21px] font-bold tracking-tight">{section.content}</p>
                                                )}
                                            </div>

                                            {section.list && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                                                    {section.list.map((item: string, i: number) => (
                                                        <div key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-white/60 border border-white group hover:bg-[#0033e7] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                            <span className="text-slate-900 text-[16px] font-black group-hover:text-white transition-colors">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {section.image && (
                                            <div className="flex-1 w-full relative group min-h-[400px]">
                                                <div className="absolute inset-0 bg-[#0033e7]/5 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-700"></div>
                                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-4 border-white">
                                                    <img
                                                        src={section.image}
                                                        alt={section.title || service.title}
                                                        className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
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

                {service.features && (
                    <section className="py-24 relative z-10 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/background%20image.webp")' }}>
                        <div className="absolute inset-0 bg-white/95 pointer-events-none"></div>
                        <div className="container mx-auto px-4 max-w-7xl relative z-20">
                            {service.featuresTitle && (
                                <div className="text-center mb-20">
                                    <span className="text-[#0033e7] font-black uppercase text-[12px] tracking-[6px] mb-4 block">Core Competencies</span>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">{service.featuresTitle}</h2>
                                    {service.featuresDescription && (
                                        <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto">{service.featuresDescription}</p>
                                    )}
                                </div>
                            )}
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {service.features.map((feature: any, index: number) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group hover:border-[#0033e7]/50 hover:shadow-2xl transition-all duration-500"
                                    >
                                        <div className="text-4xl text-[#0033e7] mb-8 group-hover:scale-110 transition-transform">
                                            <feature.icon />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-[#0033e7]">
                                            {feature.title}
                                        </h3>
                                        {feature.description && (
                                            <p className="text-slate-500 leading-relaxed font-bold text-[16px] group-hover:text-slate-700 transition-colors">
                                                {feature.description}
                                            </p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
