'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationCircle, FaCheckCircle, FaArrowRight, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function WhitePaperClient() {
    return (
        <div 
            className="relative selection:bg-[#0033e7] selection:text-white bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            <div className="absolute inset-0 bg-white/40 z-0 pointer-events-none"></div>

            {/* Premium Hero Section */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-28 text-center px-4 relative overflow-hidden z-10">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-8 px-6 py-2.5 rounded-full shadow-sm backdrop-blur-md">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                            Premium Resource Guide
                        </div>
                        <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                            The Hidden <span className="text-[#0033e7]">Revenue Leakage</span> in Your Revenue Cycle | Resource Guide
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-semibold leading-relaxed max-w-3xl mx-auto">
                            Healthcare organizations today are not struggling with volume. They are struggling with visibility. This is where the right resource becomes important.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Article Content */}
            <section className="pb-24 relative z-10">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="space-y-12">
                        {/* Reality Section - Glass Card */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white/90 backdrop-blur-2xl rounded-2xl p-10 md:p-16 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter">The Reality of Revenue Leakage</h2>
                            <p className="text-[18px] md:text-[20px] text-slate-600 font-bold leading-relaxed mb-8 tracking-tight">
                                Revenue leakage does not happen in one place. It happens quietly across the entire revenue cycle. Small issues often go unnoticed, but over time, they lead to serious financial loss.
                            </p>
                            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex gap-6 items-center">
                                <div className="text-[#0033e7] text-3xl flex-shrink-0 animate-bounce">
                                    <FaExclamationCircle />
                                </div>
                                <p className="text-slate-900 font-black leading-tight text-[17px] mb-0">
                                    Identify common failures like missed eligibility checks, delayed submissions, and repeated denials before they impact your bottom line.
                                </p>
                            </div>
                        </motion.div>

                        {/* Where it Starts - Grid Points */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white/90 backdrop-blur-2xl rounded-2xl p-10 md:p-16 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                        >
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 tracking-tighter flex items-center gap-4">
                                <span className="p-3 bg-red-50 text-red-500 rounded-xl"><FaExclamationCircle size={24} /></span>
                                Where It Typically Starts
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Incomplete or inaccurate eligibility verification",
                                    "Coding inconsistencies across providers and specialties",
                                    "Lack of real-time claim validation",
                                    "Reactive denial management instead of fixing the root cause"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 items-center group hover:bg-slate-100 transition-colors">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0"></div>
                                        <p className="text-[16px] font-black text-slate-700 leading-tight mb-0">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Why it Matters - Dark Contrast Card */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-slate-900 rounded-2xl p-10 md:p-16 relative overflow-hidden text-white"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
                            <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tighter text-white">Why It Matters</h3>
                            <p className="text-[18px] md:text-[20px] text-slate-300 font-bold leading-relaxed mb-12 tracking-tight">
                                These gaps do more than delay payments. They affect how smoothly your operations run. Without the right resource, problems keep repeating. Practices face longer A/R cycles, workload increases, and reimbursement accuracy goes down.
                            </p>
                            <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                                <p className="text-lg md:text-xl font-black mb-0 text-white leading-tight flex-1">
                                    This is why many providers look for the best resource medical billing service for small clinics to stabilize their cash flow.
                                </p>
                                <Link href="/contact-us" className="bg-[#0033e7] text-white px-8 py-4 rounded-xl font-black inline-flex items-center gap-4 transition-all duration-300 uppercase tracking-[2px] hover:bg-blue-800 hover:-translate-y-1 shadow-xl no-underline text-xs shrink-0">
                                    Get Fix Audit <FaArrowRight />
                                </Link>
                            </div>
                        </motion.div>

                        {/* High Performing Organizations Section */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white/90 backdrop-blur-2xl rounded-2xl p-10 md:p-16 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                        >
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 tracking-tighter">What High-Performing Organizations Do Differently</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Real-time Validation", p: "They use real-time eligibility and data validation." },
                                    { t: "Structured Workflows", p: "They follow structured and audit-ready coding workflows." },
                                    { t: "Proactive Fixes", p: "They fix denial issues before they happen." },
                                    { t: "Timely Submissions", p: "They submit claims on time, every time." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-8 rounded-xl bg-blue-50/50 border border-blue-100 group hover:bg-[#0033e7] transition-all duration-500">
                                        <div className="w-12 h-12 rounded-xl bg-white text-[#0033e7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                            <FaCheckCircle size={22} />
                                        </div>
                                        <h4 className="font-black text-slate-900 uppercase text-[12px] tracking-widest mb-3 group-hover:text-white transition-colors">{item.t}</h4>
                                        <p className="text-slate-600 font-bold mb-0 group-hover:text-white/80 transition-colors">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[13px] text-[#0033e7] font-black italic mt-12 text-center uppercase tracking-widest bg-blue-50 py-4 rounded-xl">
                                They also understand how to choose a resource medical billing service for my practice.
                            </p>
                        </motion.div>

                        {/* The Result Section */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="pt-12 text-center"
                        >
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">The Result</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 px-4">
                                {["Efficient", "Predictable", "Scalable", "Financially Strong"].map((stat, idx) => (
                                    <div key={idx} className="bg-white/80 backdrop-blur-md border border-white p-6 rounded-xl shadow-sm hover:translate-y-[-5px] transition-all">
                                        <span className="text-[13px] font-black text-teal-600 uppercase tracking-widest">{stat}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-10 md:p-12 border border-white shadow-lg inline-block max-w-3xl">
                                <div className="text-[#0033e7] text-4xl mb-6 flex justify-center"><FaChartLine /></div>
                                <p className="text-xl md:text-2xl text-slate-700 font-black leading-relaxed mb-0">
                                    A revenue cycle that is efficient. With the right resource, practices gain better control and stability.
                                </p>
                                <p className="text-[12px] text-slate-400 mt-8 font-black uppercase tracking-[4px] mb-0">
                                    The right resource for small clinics
                                </p>
                            </div>

                            <div className="mt-12 text-center">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-3 bg-[#0033e7] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 no-underline"
                                >
                                    <span>Schedule Consultation with an RCM Expert</span>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
