'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import axios from 'axios';
import RCMCalculator from '@/components/tools/RCMCalculator';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const whatTheseMean = [
  { t: "Denial Impact", p: "Even a small % denial affects total revenue" },
  { t: "Workflow Gaps", p: "Inefficiencies reduce collections" },
  { t: "Optimization Opportunity", p: "Better systems = better revenue" }
];

const whyUse = [
  { t: "Identify Hidden Revenue Leakage", p: "Spot losses you didn’t even know existed" },
  { t: "Understand Denial Impact", p: "See how denials affect your income" },
  { t: "Improve Billing Efficiency", p: "Fix process gaps" },
  { t: "Increase Net Collections", p: "Maximize what you earn" }
];

const takeaways = [
  "Small inefficiencies = big revenue loss",
  "Denials directly impact income",
  "Recovery potential is often higher than expected",
  "Data-driven insights improve decisions",
  "Optimized workflows = higher collections"
];

const faqs = [
  { q: "What is an RCM calculator?", a: "It is a tool that helps estimate revenue, losses, and recovery opportunities in healthcare billing." },
  { q: "How accurate are the results?", a: "They are estimates based on your inputs, but useful for identifying trends." },
  { q: "Can this improve my revenue?", a: "Yes, by identifying gaps and opportunities for optimization." },
  { q: "Is this similar to military pay calculators?", a: "No, tools like military pay calculator deployment or 2026 military pay chart calculator with BAH are unrelated to healthcare." },
  { q: "Do I need technical knowledge to use it?", a: "Not at all — just enter basic details and get results instantly." }
];

export default function RCMCalculatorPageClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        practiceName: '',
        revenue: '',
        website_url: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending request...' });

        try {
            const apiBase = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL || '';
            const res = await axios.post(`${apiBase}/contacts`, {
                name: formData.name,
                email: formData.email,
                subject: 'RCM Detailed Revenue Analysis Request',
                message: `Lead Type: Detailed Revenue Report\n- Practice Name: ${formData.practiceName}\n- Phone: ${formData.phone || 'Not provided'}\n- Monthly Estimated Volume/Revenue: ${formData.revenue || 'Not provided'}`,
                website_url: formData.website_url
            });
            if (res.data?.success) {
                setStatus({ type: 'success', message: 'Report request submitted successfully! An RCM specialist will compile your analysis.' });
                setFormData({ name: '', email: '', phone: '', practiceName: '', revenue: '', website_url: '' });
            } else {
                setStatus({ type: 'error', message: res.data?.error || 'An error occurred. Please try again.' });
            }
        } catch (error: any) {
            const errMsg = error.response?.data?.error || 'An error occurred. Please try again.';
            setStatus({ type: 'error', message: errMsg });
        }
    };

    return (
        <div className="bg-[#f8faff] relative selection:bg-[#0033e7] selection:text-white pb-20">
            {/* Custom Premium Hero */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden">
                <Image
                    src="/background image.webp"
                    alt="Background"
                    fill
                    className="object-cover object-center pointer-events-none -z-10"
                    priority
                />
                <div className="absolute inset-0 bg-white/10 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 via-white/40 to-[#0033e7]/5 pointer-events-none z-10"></div>
                
                <div className="container mx-auto max-w-4xl relative z-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-8 px-5 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            No Obligation | Instant Insights | Data-Driven Estimates
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1.1] mb-6 tracking-tighter">
                            RCM Calculator – Estimate Your Revenue Loss & Recovery Potential
                        </h1>
                        <p className="text-[17px] md:text-[20px] text-slate-600 font-bold leading-[1.7] max-w-2xl mx-auto tracking-tight">
                            Let’s be honest — most practices don’t even realize how much revenue they’re losing every month. This RCM calculator helps you quickly understand where your money is leaking and how much you can recover with better systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Section */}
            <div className="relative overflow-hidden flex flex-col pt-10 border-t border-blue-50/50">
                <Image
                    src="/background image.webp"
                    alt="Background"
                    fill
                    className="object-cover object-center pointer-events-none -z-10"
                />
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f8faff] to-transparent z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff]/95 via-white/85 to-blue-50/70 pointer-events-none"></div>

                <section className="py-20 relative z-10 pb-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-[800px] mx-auto">
                            <span className="bg-white/60 backdrop-blur-md border border-white px-5 py-2 rounded-full text-[11px] font-black text-[#0033e7] uppercase tracking-[3px] mb-6 inline-block shadow-sm">
                                Interactive Tool
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                                Estimate Your Revenue Loss and Recovery Potential
                            </h2>
                            <p className="text-lg text-slate-600 font-bold leading-relaxed opacity-70">
                                Add your basic details below and get instant estimates.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-[1100px] mx-auto relative z-10">
                            {/* Original Intact Calculator */}
                            <RCMCalculator />
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* What These Numbers Actually Mean & Why Use Our Calculator - CONVERTED TO LIGHT THEME */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/40 to-[#f8faff]/80">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* What These Numbers Mean */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-slate-900">What These Numbers Actually Mean</h2>
                            <p className="text-slate-600 font-bold text-lg leading-relaxed mb-10 opacity-80">
                                These numbers aren’t just estimates — they reflect real issues inside your billing process. High denial rates, delayed reimbursements, and weak verification systems all contribute to revenue loss.
                            </p>
                            
                            <div className="space-y-4 mb-6">
                                {whatTheseMean.map((item, idx) => (
                                    <div key={idx} className="bg-white/90 p-8 rounded-[2rem] border border-blue-50 shadow-sm flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#0033e7]/20 group">
                                        <h4 className="font-black text-[18px] text-[#0033e7] mb-2 flex items-center gap-3">
                                            <span className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-[10px] text-[#0033e7]">✔</span> {item.t}
                                        </h4>
                                        <p className="text-slate-500 text-[15px] font-bold pl-9">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Why Practices Use Our Calculator */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-slate-900">Why Practices Use Our RCM Calculator</h2>
                            <p className="text-slate-600 font-bold text-lg leading-relaxed mb-10 opacity-80">
                                Our calculator is designed specifically for healthcare revenue complexity, unlike generic tools.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {whyUse.map((item, idx) => (
                                    <div key={idx} className="bg-white/90 p-8 rounded-[2rem] border border-blue-50 shadow-sm flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-teal-500/20 group">
                                        <h4 className="font-black text-[17px] text-teal-600 mb-2 flex items-center gap-3">
                                            <span className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center text-[10px] text-teal-600">✔</span> {item.t}
                                        </h4>
                                        <p className="text-slate-500 text-[14px] font-bold pl-9">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Analysis Form View */}
            <section id="detailed-analysis" className="py-20 border-b border-blue-50/50 relative">
                <Image
                    src="/background image.webp"
                    alt="Background"
                    fill
                    className="object-cover object-center pointer-events-none -z-10"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border border-blue-100 rounded-[3rem] p-10 md:p-14 shadow-2xl text-center">
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Get a Detailed Revenue Analysis</h2>
                        <p className="text-lg text-slate-600 font-bold max-w-2xl mx-auto mb-10 opacity-70">
                            Want more than just estimates? We can give you a deeper breakdown of your revenue cycle and exactly where you’re losing money.
                        </p>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8 text-left relative">
                            {/* Anti-spam honeypot */}
                            <div style={{ display: 'none' }} aria-hidden="true">
                                <input type="text" name="website_url" tabIndex={-1} autoComplete="off" value={formData.website_url} onChange={handleChange} />
                            </div>

                            {status.message && (
                                <div className={`md:col-span-2 p-5 rounded-2xl text-sm font-black uppercase tracking-widest border ${status.type === 'success' ? 'bg-green-50 text-green-600 border-green-100' :
                                    status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' :
                                        'bg-blue-50 text-[#0033e7] border-blue-100'
                                    }`}>
                                    <div className="flex items-center gap-3 justify-center">
                                        {status.type === 'loading' && <span className="w-4 h-4 border-2 border-[#0033e7] border-t-transparent rounded-full animate-spin"></span>}
                                        {status.message}
                                    </div>
                                </div>
                            )}
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:ring-2 focus:ring-[#0033e7] focus:bg-white transition-all shadow-sm" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:ring-2 focus:ring-[#0033e7] focus:bg-white transition-all shadow-sm" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Practice / Facility Name</label>
                                <input type="text" name="practiceName" value={formData.practiceName} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:ring-2 focus:ring-[#0033e7] focus:bg-white transition-all shadow-sm" placeholder="Practice Name" />
                            </div>
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Phone Number (Optional)</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:ring-2 focus:ring-[#0033e7] focus:bg-white transition-all shadow-sm" placeholder="+1 (000) 000-0000" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Estimated Monthly Revenue / Volume</label>
                                <input type="text" name="revenue" value={formData.revenue} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:ring-2 focus:ring-[#0033e7] focus:bg-white transition-all shadow-sm" placeholder="$ Amount or Monthly Volume" />
                            </div>
                            <div className="md:col-span-2 text-center mt-6">
                                <button type="submit" disabled={status.type === 'loading'} className="inline-block bg-[#0033e7] text-white px-14 py-5 rounded-[2rem] font-black uppercase tracking-[2px] transition-all hover:bg-black hover:-translate-y-1 hover:shadow-2xl shadow-xl w-full md:w-auto disabled:opacity-50 cursor-pointer">
                                    {status.type === 'loading' ? 'Processing...' : 'Request Detailed Report'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Takeaways & FAQ Split */}
            <section className="py-24 relative border-t border-blue-50/50">
                <Image
                    src="/background image.webp"
                    alt="Background"
                    fill
                    className="object-cover object-center pointer-events-none -z-10"
                />
                    <div className="absolute inset-0 bg-[#f8faff]/95 backdrop-blur-sm pointer-events-none z-0"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Quick Takeaways */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="bg-gradient-to-br from-[#0033e7] to-[#0A1F33] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none"></div>
                                    <h3 className="text-4xl font-black mb-10 relative z-10 tracking-tighter uppercase">Quick Takeaways</h3>
                                    <ul className="space-y-6 relative z-10">
                                        {takeaways.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-5 text-[18px] font-bold">
                                                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* FAQs */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="h-full">
                                    <h3 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase">Common Questions</h3>
                                    <div className="space-y-6">
                                        {faqs.map((faq, idx) => (
                                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all group">
                                                <h4 className="text-[18px] font-black text-slate-900 mb-3 group-hover:text-[#0033e7] transition-colors">{faq.q}</h4>
                                                <p className="text-slate-600 font-bold opacity-80 leading-relaxed">{faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pt-10 pb-20 relative">
                    <Image
                        src="/background image.webp"
                        alt="Background"
                        fill
                        className="object-cover object-center pointer-events-none -z-10"
                    />
                   <div className="absolute inset-0 bg-[#f8faff]/95 backdrop-blur-sm pointer-events-none z-0"></div>
                   <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 uppercase">
                                Start Understanding <br /> Your Revenue Today
                            </h2>
                            <p className="text-xl text-slate-600 font-bold mb-12 max-w-2xl mx-auto opacity-70">
                                If you’re not tracking your revenue loss, you’re already behind. Use this RCM calculator to get clarity — and take the first step toward better financial performance. Better insights = better decisions = better revenue.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-teal-500 text-white px-14 py-6 rounded-[2rem] font-black uppercase tracking-[2px] transition-all hover:bg-black hover:-translate-y-1 shadow-[0_20px_50px_rgba(20,184,166,0.3)]">
                                Start Your Free Analysis
                            </Link>
                        </motion.div>
                   </div>
                </section>

        </div>
    );
}
