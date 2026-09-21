'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesList, specialtiesList } from '@/data/services';
import { FaArrowRight, FaCheckCircle, FaProjectDiagram, FaShieldAlt, FaChartLine, FaRegCheckCircle, FaClock } from 'react-icons/fa';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ServicesClient() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-[#f0f4ff]/80 to-white/95 z-0 pointer-events-none"></div>
            
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
                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/40 text-[#0033e7] font-black uppercase text-[10px] md:text-[11px] tracking-[5px] mb-10 px-8 py-3 rounded-full shadow-2xl">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-ping"></span>
                            Primary Keywords • More Solutions
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-10 text-slate-900">
                            More Solutions for <br className="hidden md:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0033e7] to-teal-500">Complete Revenue Cycle Management</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-bold leading-relaxed max-w-3xl mx-auto tracking-tight">
                            Today, healthcare providers need more solutions than just basic billing. A simple system is not enough. If your process is not connected, it can cause delays, errors, and lost revenue.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Content Section */}
            <section className="pb-24 relative z-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-12 md:p-20 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-blue-500/10 transition-all duration-700"></div>
                        
                        <p className="text-2xl md:text-3xl text-slate-800 leading-[1.6] font-black tracking-tighter mb-10 text-center relative z-10">
                            Our approach is easy to understand and easy to use. We manage the <span className="text-[#0033e7]">full revenue cycle</span> from start to finish. 
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#0033e7] to-teal-400 mx-auto rounded-full mb-12"></div>
                        <p className="text-lg md:text-xl text-slate-600 leading-[1.8] font-bold tracking-tight text-center relative z-10">
                            From patient entry to final payment, every step is handled in a clear and simple way. This is how we provide more solutions to sticky problems in billing.
                            <br /><br />
                            Some people look for answers like <em className="text-blue-600 font-black italic">"can you suggest more solutions for managing remote work productivity?"</em> In healthcare, the real need is different. You need systems that connect your team, reduce mistakes, and improve income. That is where our <span className="text-[#0033e7] font-black">more health solutions</span> approach helps.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-24 relative z-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-20">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-[#0033e7]/5 text-[#0033e7] font-black uppercase text-[11px] tracking-[6px] px-6 py-2 rounded-full inline-block mb-6"
                        >
                            Streamlined Operations
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 uppercase">What We Do</h2>
                        <div className="w-24 h-2 bg-[#0033e7] mx-auto rounded-full mb-8 shadow-sm"></div>
                        <p className="text-slate-500 font-bold text-xl max-w-2xl mx-auto leading-relaxed opacity-70">We take care of your complete billing process with a structured, connected approach.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Eligibility & Benefits', desc: 'Pre-service verification to secure your payments early.' },
                            { title: 'Medical Coding', desc: 'Expert ICD-10 & CPT coding to maximize claim accuracy.' },
                            { title: 'Denial Management', desc: 'Aggressive follow-up to recover every dollar possible.' },
                            { title: 'Payment Posting', desc: 'Accurate reconciliation and rapid database matching.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                className="bg-white/60 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col items-start gap-8 group hover:border-[#0033e7]/20 hover:bg-white hover:shadow-2xl transition-all duration-700"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white text-[#0033e7] flex items-center justify-center flex-shrink-0 group-hover:from-[#0033e7] group-hover:to-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-700 shadow-sm border border-blue-50">
                                    <FaRegCheckCircle size={28} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-[#0033e7] transition-colors">{item.title}</h4>
                                    <p className="text-slate-500 text-[16px] font-bold leading-relaxed italic">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Specific Solutions with Enhanced Glass Design */}
            <section className="py-24 relative z-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-20">
                        <div className="w-24 h-[1px] bg-[#0033e7]"></div>
                        <h2 className="text-[13px] font-black text-slate-900 uppercase tracking-[10px] text-center">Specific Solutions</h2>
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-[#0033e7] to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group bg-white/40 backdrop-blur-3xl rounded-[3rem] p-12 border border-white shadow-xl hover:shadow-[#0033e7]/10 hover:border-[#0033e7]/30 transition-all duration-700 block no-underline text-inherit relative overflow-hidden h-full"
                                >
                                    <div className="absolute top-0 left-0 w-2.5 h-0 bg-[#0033e7] group-hover:h-full transition-all duration-700"></div>
                                    <div className="flex flex-col md:flex-row gap-10 items-center">
                                        <div className="w-24 h-24 bg-white rounded-[1.8rem] flex items-center justify-center text-[#0033e7] shadow-xl border border-blue-50 group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-700 group-hover:scale-110 flex-shrink-0">
                                            <FaCheckCircle size={32} />
                                        </div>
                                        <div className="flex-grow text-center md:text-left">
                                            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter group-hover:text-[#0033e7] transition-colors uppercase">{service.title}</h3>
                                            <p className="text-slate-500 font-bold leading-relaxed text-[17px] mb-8 tracking-tight italic opacity-80">{service.description}</p>
                                            <div className="inline-flex items-center gap-4 text-[#0033e7] font-black text-[13px] uppercase tracking-[4px] bg-blue-50 px-8 py-4 rounded-2xl group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 shadow-inner">
                                                Deep Dive <FaArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Content Section - REDESIGNED TO LIGHT THEME */}
            <section className="py-32 relative z-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 100 }}
                                transition={{ duration: 1 }}
                                className="h-2 bg-[#0033e7] mb-8 rounded-full"
                            />
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10 uppercase">Why This <span className="text-[#0033e7] italic">Matters.</span></h2>
                            <p className="text-2xl text-slate-600 font-bold leading-relaxed mb-12 tracking-tight">
                                A simple and connected system makes a big difference. It saves time and improves results.
                            </p>
                            <div className="space-y-4">
                                {['Reduce billing errors', 'Avoid revenue loss', 'Understand your finances clearly', 'Keep your workflow smooth'].map((point, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-6 p-7 bg-white/40 rounded-3xl border border-white group hover:bg-white hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 shadow-inner">
                                            <FaCheckCircle size={18} />
                                        </div>
                                        <span className="text-xl font-black text-slate-900 tracking-tight">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* Right Panel - Converted to Light/Premium Look */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-3xl p-12 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.03)] relative overflow-hidden border border-blue-50"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0033e7]/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                            <h3 className="text-4xl text-slate-900 font-black tracking-tighter mb-10 text-center uppercase">What You <span className="text-[#0033e7]">Get</span></h3>
                            <p className="text-slate-500 font-bold mb-12 italic text-center text-lg leading-relaxed opacity-70">Our system helps your practice run better every day. </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                {[
                                    { title: 'Faster Payments', icon: FaChartLine, color: 'text-blue-500' },
                                    { title: 'Fewer Delays', icon: FaClock, color: 'text-teal-500' },
                                    { title: 'Financial Control', icon: FaShieldAlt, color: 'text-indigo-500' },
                                    { title: 'Stable Cash Flow', icon: FaProjectDiagram, color: 'text-sky-500' }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        whileHover={{ y: -10 }}
                                        className="bg-white p-8 rounded-[2rem] border border-blue-50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#0033e7]/20 group"
                                    >
                                        <item.icon className={`${item.color} mb-6 transition-transform group-hover:scale-110`} size={36} />
                                        <div className="font-black text-slate-900 text-[16px] uppercase tracking-[3px] leading-snug">{item.title}</div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-16 p-10 bg-gradient-to-r from-[#0033e7] to-[#0A1F33] rounded-[2.5rem] text-center shadow-2xl border border-white/20"
                            >
                                <p className="font-black text-white uppercase tracking-[4px] text-[15px] leading-relaxed mb-0">
                                    Our system keeps your billing <br/> <span className="text-teal-300">simple, clear, and effective</span>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
