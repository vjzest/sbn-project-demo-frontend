'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const focusAreas = [
    { t: "Fixing inefficiencies in billing" },
    { t: "Reducing denial rates" },
    { t: "Improving cash flow visibility" },
    { t: "Keeping everything compliant" }
];

const operationsLookLike = [
    { t: "Standard workflows" },
    { t: "Multiple quality checks" },
    { t: "Controlled data access" },
    { t: "Continuous performance tracking" }
];

const makesUsDifferent = [
    { t: "We focus on systems, not just tasks" },
    { t: "Everything is performance-driven" },
    { t: "Compliance is built in" },
    { t: "Models are scalable" },
    { t: "Work is transparent" }
];

const faqs = [
    { q: "What services does SBN Healthcare offer?", a: "Complete revenue cycle support including billing, coding, denial management, and workflow optimization." },
    { q: "How can I book an appointment with SBN Healthcare online?", a: "You can easily schedule a consultation through the website." },
    { q: "What insurance plans are accepted by SBN Healthcare providers?", a: "We work with multiple payer systems based on client needs." },
    { q: "Where is the nearest SBN Healthcare facility located?", a: "We operate globally and provide services remotely with structured systems." }
];

const caseStudiesTemplate = [
    {
        id: 1,
        clientType: "Multi-Specialty Medical Group",
        description: "A large practice struggling with aging A/R and high denial rates due to manual billing processes.",
        metrics: [
            { label: "Additional Revenue", value: "+$1.2M", description: "Recovered in first 6 months" },
            { label: "Denial Rate Reduction", value: "40%", description: "From initial submissions" },
            { label: "A/R Days Decrease", value: "25 Days", description: "Faster payment cycles" }
        ],
        beforeAfter: [
            { feature: "Claim Scrubbing", before: "Manual reviews leading to errors", after: "Automated standard checks (99% clean)" },
            { feature: "Denial Handling", before: "Often ignored or written off", after: "Immediate appeals and tracking" },
            { feature: "Financial Visibility", before: "Monthly static spreadsheets", after: "Live performance dashboards" }
        ]
    }
];

export default function AboutClient() {
    return (
        <div
            className="relative selection:bg-[#0033e7] selection:text-white overflow-hidden"
        >
            <Image
                src="/background image.webp"
                alt="Background"
                fill
                className="object-cover object-center bg-fixed pointer-events-none -z-20"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 via-white/90 to-[#f0f4ff]/85 z-0 pointer-events-none"></div>

            {/* Banner Section */}
            <div
                className="relative py-[120px] md:py-[180px] text-center overflow-hidden z-10"
            >
                <Image
                    src="/About.webp"
                    alt="About Banner"
                    fill
                    className="object-cover object-center pointer-events-none -z-10"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0033e7]/85 to-[#0B1F33]/85 mix-blend-multiply -z-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold uppercase text-[11px] tracking-[4px] mb-8 px-5 py-2 rounded-full backdrop-blur-md"
                    >
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                        About SBN Healthcare | Founded 2021
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1] mb-8"
                    >
                        About SBN Healthcare
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto"
                    >
                        Building Better Revenue Systems for Modern Healthcare
                    </motion.h2>
                </div>
            </div>

            {/* Leadership Section - Redesigned to Light Theme */}
            <section className="py-24 relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0033e7]/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="text-[#0033e7] font-black uppercase text-[12px] tracking-[6px] mb-4 block">The Core Team</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-8">Leadership That Keeps Things Running Smoothly</h2>
                            <div className="w-24 h-1.5 bg-[#0033e7] mx-auto rounded-full"></div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Iftikhar Ali Khan */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="group bg-white/90 border border-blue-50 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-stretch hover:border-[#0033e7]/30 transition-all duration-500 min-h-[320px]"
                        >
                            <div className="sm:w-2/5 relative overflow-hidden bg-slate-100">
                                <Image
                                    src="/Iftekhar Ali khan.png"
                                    alt="Iftikhar Ali Khan"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 hidden sm:block"></div>
                            </div>
                            <div className="sm:w-3/5 p-8 flex flex-col justify-center relative overflow-hidden">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-1">Iftikhar Ali Khan</h3>
                                <p className="text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-4">Founder & CEO</p>
                                <p className="text-slate-600 font-bold leading-relaxed text-[14px] mb-6">
                                    Iftikhar Ali Khan is CEO of SBN Healthcare Solution, leading strategy, growth, and scalable RCM systems with expertise in global business, operations, compliance, and long-term performance-driven healthcare outcomes.
                                </p>
                                <div className="flex gap-3 relative z-10">
                                    <a href="https://www.linkedin.com/in/iftikhar-ali-khan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile of Iftikhar Ali Khan" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#0033e7] hover:text-white transition-all"><FaLinkedin size={14} /></a>
                                    <a href="mailto:iakhan@sbnhealthcaresolution.com" aria-label="Email Iftikhar Ali Khan" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#0033e7] hover:text-white transition-all"><FaEnvelope size={14} /></a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Md Nematullah */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="group bg-white/90 border border-blue-50 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-stretch hover:border-teal-400/50 transition-all duration-500 min-h-[320px]"
                        >
                            <div className="sm:w-2/5 relative overflow-hidden bg-slate-100">
                                <Image
                                    src="/Nematullah.webp"
                                    alt="Md Nematullah"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 hidden sm:block"></div>
                            </div>
                            <div className="sm:w-3/5 p-8 flex flex-col justify-center relative overflow-hidden">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-1">Md Nematullah</h3>
                                <p className="text-teal-600 font-bold uppercase text-[11px] tracking-[3px] mb-4">Head of Operations (COO)</p>
                                <p className="text-slate-600 font-bold leading-relaxed text-[14px] mb-6">
                                    MD Nematullah is Operations Head at SBN Healthcare Solutions, overseeing revenue cycle management, team performance, and client success. Drives operational excellence, ensures compliance, and implements strategic solutions to optimize billing efficiency and maximize healthcare practice profitability.
                                </p>
                                <div className="flex gap-3 relative z-10">
                                    <a href="https://www.linkedin.com/in/md-nematullah-356b0b219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile of Md Nematullah" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-teal-500 hover:text-white transition-all"><FaLinkedin size={14} /></a>
                                    <a href="mailto:md.nematullah@sbnhealthcaresolution.com" aria-label="Email Md Nematullah" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-teal-500 hover:text-white transition-all"><FaEnvelope size={14} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Introductory text - Standard Card Style */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-blue-50 shadow-[0_40px_100px_rgba(0,51,231,0.04)]">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-28 h-28 bg-blue-50 rounded-3xl flex items-center justify-center text-[#0033e7] shadow-inner">
                                    <FaShieldAlt size={48} />
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-[22px] md:text-[24px] text-slate-900 font-black leading-tight mb-6 tracking-tight">
                                    Let’s be honest, most healthcare billing systems are messy. Too many gaps, too many delays, and way too many denials.
                                </p>
                                <p className="text-[18px] text-slate-600 font-bold leading-relaxed mb-0 opacity-80">
                                    That’s exactly why SBN Healthcare matters. Founded in 2021, we’re not here just to “do billing.” We focus on building proper, structured revenue systems that actually work in real life.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Vision - Redesigned to Light Theme */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-blue-50 shadow-[0_50px_100px_rgba(0,0,0,0.03)]"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0033e7]/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div className="pb-10 md:pb-0 md:pr-10">
                                <span className="text-[#0033e7] font-black uppercase text-[12px] tracking-[5px] mb-4 block">Our Target</span>
                                <h2 className="text-4xl font-black mb-6 tracking-tighter text-slate-900">Mission</h2>
                                <p className="text-[18px] font-bold text-slate-600 leading-relaxed">
                                    To help healthcare providers run financially stable and efficient operations through structured revenue systems.
                                </p>
                            </div>
                            <div className="pt-10 md:pt-0 md:pl-10 text-right md:text-left">
                                <span className="text-teal-600 font-black uppercase text-[12px] tracking-[5px] mb-4 block">Our Future</span>
                                <h2 className="text-4xl font-black mb-6 tracking-tighter text-slate-900">Vision</h2>
                                <p className="text-[18px] font-bold text-slate-600 leading-relaxed italic">
                                    To become a long-term, trusted RCM partner known for consistency, transparency, and real results.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Middle Grid Sections: Three Pillars */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* What We Actually Do */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/90 p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-2xl transition-all duration-700">
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">What We Actually Do</h3>
                            <p className="text-slate-500 font-bold mb-8 text-[16px]">We connect the full revenue cycle, not just one part of it.</p>
                            <span className="text-[11px] font-black text-[#0033e7] uppercase tracking-[3px] block mb-6 border-b border-blue-50 pb-3">Focus Areas</span>
                            <ul className="space-y-4">
                                {focusAreas.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-slate-700 font-bold items-center text-[15px]">
                                        <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 text-[10px]">✔</div> {item.t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* How We Work */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/90 p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-2xl transition-all duration-700">
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">How We Work</h3>
                            <p className="text-slate-500 font-bold mb-8 text-[16px]">No chaos. No guesswork. Just a clear system.</p>
                            <span className="text-[11px] font-black text-[#0033e7] uppercase tracking-[3px] block mb-6 border-b border-blue-50 pb-3">Operations</span>
                            <ul className="space-y-4">
                                {operationsLookLike.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-slate-700 font-bold items-center text-[15px]">
                                        <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 text-[10px]">✔</div> {item.t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Why Choose Us */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/90 p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-2xl transition-all duration-700">
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">Why Choose Us</h3>
                            <p className="text-slate-500 font-bold mb-8 text-[16px]">We deliver performance-driven structured models.</p>
                            <span className="text-[11px] font-black text-[#0033e7] uppercase tracking-[3px] block mb-6 border-b border-blue-50 pb-3">Differentiation</span>
                            <ul className="space-y-4">
                                {makesUsDifferent.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-slate-700 font-bold items-center text-[15px]">
                                        <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 text-[10px]">✔</div> {item.t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Case Study Table - Improved Light Theme */}
            <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-b from-white/40 to-[#f8faff]/80">
                <div className="container mx-auto px-4 max-w-6xl relative z-20">
                    <div className="text-center mb-16">
                        <span className="text-[#0033e7] font-black uppercase text-[12px] tracking-[6px] mb-4 block">Proven Performance</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-slate-900">Real Results from Real Practices</h2>
                        <p className="text-slate-600 font-bold text-lg max-w-2xl mx-auto opacity-70">See how structural changes directly impact financial and operational efficiency.</p>
                    </div>

                    {caseStudiesTemplate.map((study) => (
                        <div key={study.id} className="bg-white border border-blue-50 rounded-[3rem] p-8 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.02)]">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                                <div className="lg:col-span-1">
                                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-slate-900">{study.clientType}</h3>
                                    <p className="text-slate-500 font-bold leading-relaxed mb-10">{study.description}</p>
                                    <div className="space-y-6">
                                        {study.metrics.map((metric, idx) => (
                                            <div key={idx} className="bg-slate-50/50 p-8 rounded-2xl border-l-[6px] border-[#0033e7] shadow-sm transition-all hover:bg-white hover:shadow-xl group">
                                                <div className="text-4xl font-black text-[#0033e7] mb-2">{metric.value}</div>
                                                <div className="text-[12px] font-black uppercase text-teal-600 tracking-[3px] mb-2">{metric.label}</div>
                                                <div className="text-[14px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors">{metric.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {/* Conventional Way */}
                                        <div className="space-y-6">
                                            <div className="px-3">
                                                <div className="text-[12px] font-black uppercase text-red-500 tracking-[4px] mb-6 flex items-center gap-3">
                                                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.5)]"></div>
                                                    Conventional Way
                                                </div>
                                            </div>
                                            {study.beforeAfter.map((item, idx) => (
                                                <div key={idx} className="p-8 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-500">
                                                    <span className="block text-[10px] uppercase font-black tracking-widest mb-3 text-slate-400">{item.feature}</span>
                                                    <p className="text-[16px] font-bold text-slate-500 leading-snug">{item.before}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* SBN Integration */}
                                        <div className="space-y-6">
                                            <div className="px-3">
                                                <div className="text-[12px] font-black uppercase text-[#0033e7] tracking-[4px] mb-6 flex items-center gap-3">
                                                    <div className="w-2.5 h-2.5 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></div>
                                                    SBN Integration
                                                </div>
                                            </div>
                                            {study.beforeAfter.map((item, idx) => (
                                                <div key={idx} className="p-8 bg-[#0033e7]/5 rounded-2xl border border-[#0033e7]/10 shadow-sm group hover:border-[#0033e7]/40 hover:bg-white hover:shadow-2xl transition-all duration-700">
                                                    <span className="block text-[10px] uppercase font-black tracking-widest mb-3 text-[#0033e7] font-black">{item.feature}</span>
                                                    <p className="text-[17px] font-black text-slate-900 leading-snug">{item.after}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final FAQs & Call to Action */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-10 leading-tight uppercase">FAQs & Information</h2>
                            <div className="space-y-4">
                                {faqs.slice(0, 4).map((faq, idx) => (
                                    <div key={idx} className="bg-white p-7 rounded-2xl border border-blue-50 shadow-sm hover:shadow-xl transition-all group">
                                        <h4 className="text-[17px] font-black text-slate-900 mb-2 group-hover:text-[#0033e7] transition-colors">{faq.q}</h4>
                                        <p className="text-[15px] text-slate-500 font-bold mb-0 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center md:text-left bg-gradient-to-br from-[#0033e7] to-[#0A1F33] p-12 lg:p-16 rounded-[3rem] text-white shadow-[0_50px_100px_rgba(0,51,231,0.2)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight relative z-10 text-white">Let’s Build Something Together</h3>
                            <p className="text-[18px] font-bold text-blue-100 mb-10 relative z-10 opacity-90">
                                Your revenue cycle can be simpler, stronger, and more reliable. Let’s structured your financial operations for maximum growth.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-white text-[#0033e7] px-12 py-5 rounded-2xl font-black uppercase tracking-[2px] transition-all hover:bg-teal-400 hover:text-slate-900 hover:-translate-y-1 shadow-2xl relative z-10">
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
