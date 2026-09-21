'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const pricingModels = [
  {
    title: "Performance-Based Pricing (Per Claim / Collection)",
    desc: "A flexible, scalable model where you pay based on actual performance.",
    bestFor: "Small to mid-sized practices",
    points: [
      "Pay per claim or percentage of collections",
      "Scales as your volume grows",
      "No fixed overhead",
      "Fully performance-driven"
    ],
    footer: "This is one of the most common pricing strategy types used in growing businesses."
  },
  {
    title: "Dedicated Billing Team Model",
    desc: "A complete team working only for your practice.",
    bestFor: "Mid to large practices",
    points: [
      "Dedicated billing experts",
      "Smooth, consistent workflows",
      "Full control over operations",
      "Predictable monthly cost"
    ],
    footer: "Similar to structured pricing methods and strategies used in long-term operations."
  },
  {
    title: "Enterprise RCM Partnership Model",
    desc: "Fully customized pricing for complex and high-volume setups.",
    bestFor: "Multi-location or enterprise providers",
    points: [
      "Custom pricing based on complexity",
      "Multi-specialty support",
      "System integration",
      "Performance-focused optimization"
    ],
    footer: "This reflects advanced pricing strategies with examples used by large organizations."
  }
];

const includedBenefits = [
  { title: "Complete Revenue Cycle Management", desc: "End-to-end support" },
  { title: "Eligibility & Benefits Verification", desc: "Accurate patient validation" },
  { title: "Medical Billing and Coding", desc: "Clean, error-free workflows" },
  { title: "Claims Submission & Follow-Up", desc: "Faster reimbursements" },
  { title: "Denial Management & Recovery", desc: "Reduced revenue leakage" },
  { title: "Real-Time Reporting", desc: "Clear performance tracking" },
  { title: "Compliance-Aligned Workflows", desc: "Safe and structured processes" }
];

const financialOutcomes = [
  { title: "Higher Net Collections", desc: "You earn what you deserve" },
  { title: "Reduced A/R Days", desc: "Faster cash flow" },
  { title: "Lower Denial Rates", desc: "Fewer errors, better claims" },
  { title: "Improved Efficiency", desc: "Less waste, more output" }
];

const takeaways = [
  "Pricing should align with performance",
  "Flexible models = better growth",
  "ROI matters more than cost",
  "Scalable pricing supports long-term success",
  "Right strategy = stronger revenue"
];

const faqs = [
  { q: "Do you offer customized pricing?", a: "Yes, everything is tailored based on your size, specialty, and workflows." },
  { q: "Is there a long-term contract?", a: "No rigid contracts — we keep things flexible." },
  { q: "How is pricing calculated?", a: "It depends — claim volume, collections, or dedicated team structure." },
  { q: "Will pricing change as we grow?", a: "Yes, but in a way that supports your growth, not hurts it." }
];

export default function PricingPageClient() {
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
                <div className="absolute inset-0 bg-[#f8faff]/80 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-white/40 to-[#0033e7]/5 pointer-events-none z-10"></div>
                
                <div className="container mx-auto max-w-4xl relative z-20">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 bg-white/40 border border-white text-[#0033e7] font-black uppercase text-[11px] tracking-[4px] mb-8 px-6 py-2.5 rounded-full shadow-2xl">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-ping shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            Transparent Models | Performance-Focused
                        </div>
                        <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                            Pricing Philosophy <br /> Built for <span className="text-[#0033e7]">Growth</span>
                        </h1>
                        <p className="text-[18px] md:text-[22px] text-slate-600 font-bold leading-[1.6] max-w-3xl mx-auto tracking-tight opacity-80">
                            Let’s be real — pricing should never feel like a burden. It should support your growth, not slow it down.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Overview */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20 bg-white/60 backdrop-blur-3xl rounded-[3rem] p-12 md:p-20 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-10 uppercase">
                            Flexible Pricing Built Around <br /> Your Revenue Performance
                        </h2>
                        <div className="w-24 h-2 bg-[#0033e7] mx-auto rounded-full mb-10"></div>
                        <p className="text-xl text-slate-600 font-bold max-w-3xl mx-auto mb-12 opacity-80 italic">
                            Our pricing philosophy is simple: align costs with performance so you only pay for real outcomes. Whether you're exploring different pricing strategies or looking for practical models, we focus on what actually works.
                        </p>
                        <Link href="/contact-us" className="inline-block bg-[#0033e7] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[2px] transition-all hover:bg-black hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,51,231,0.2)]">
                            Request Pricing Consultation
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                          { h: "No One-Size Approach", p: "Every model is tailored" },
                          { h: "Built Around Operations", p: "Aligned with your workflows" },
                          { h: "Focus on ROI", p: "Actual returns over cost" }
                        ].map((card, i) => (
                           <div key={i} className="bg-white/80 p-10 rounded-[2.5rem] shadow-sm border border-blue-50 text-center hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2">
                              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-tight">{card.h}</h3>
                              <p className="text-slate-500 font-bold opacity-70 italic">{card.p}</p>
                           </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Models - CONVERTED TO LIGHT THEME */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/40 to-[#f8faff]/80">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-[#0033e7] font-black tracking-[6px] uppercase text-[12px] mb-6 block">Scalable Options</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 uppercase">Model Selection</h2>
                        <div className="w-24 h-1.5 bg-[#0033e7] mx-auto rounded-full mb-8"></div>
                        <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto opacity-70">Not every practice needs the same structure. Here are the three models we offer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {pricingModels.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.15 } } } as any}
                                className="bg-white/95 p-12 rounded-[3.5rem] border border-blue-50 shadow-2xl flex flex-col relative group hover:border-[#0033e7]/30 hover:shadow-[0_40px_100px_rgba(0,51,231,0.05)] transition-all duration-700"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7]/5 rounded-bl-[4rem] group-hover:bg-[#0033e7]/10 transition-all duration-700"></div>
                                <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tighter uppercase leading-[1.1]">{item.title}</h3>
                                <p className="text-slate-500 font-bold mb-8 leading-relaxed italic opacity-80">{item.desc}</p>
                                
                                <div className="bg-blue-50/50 p-6 rounded-2xl mb-10 border border-blue-100/50">
                                    <span className="text-[10px] uppercase font-black tracking-[3px] text-[#0033e7] block mb-2 opacity-60">Best For</span>
                                    <strong className="text-slate-900 text-[16px] font-black">{item.bestFor}</strong>
                                </div>

                                <ul className="space-y-5 mb-10 flex-grow">
                                    {item.points.map((pt, pIdx) => (
                                        <li key={pIdx} className="flex gap-4 text-slate-700 font-bold items-start group/li">
                                            <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0033e7] flex items-center justify-center flex-shrink-0 text-[10px] group-hover/li:bg-[#0033e7] group-hover/li:text-white transition-colors">✔</div> 
                                            <span className="text-[15px] opacity-80 group-hover/li:opacity-100 transition-opacity">{pt}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-8 border-t border-slate-100 text-[11px] text-slate-400 font-bold italic tracking-wide">
                                    {item.footer}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get & Financial Outcomes Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        
                        {/* What You Get */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase underline decoration-[#0033e7] decoration-[6px] underline-offset-8">Base Inclusions</h2>
                            <p className="text-slate-600 mb-12 font-bold text-lg opacity-70">No matter which model you choose, some things remain constant in our service architecture. </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {includedBenefits.map((ben, idx) => (
                                    <div key={idx} className="bg-white p-7 rounded-[2rem] border border-blue-50 shadow-sm flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:border-[#0033e7]/10 hover:-translate-y-1 group">
                                        <h4 className="font-black text-[#0033e7] mb-2 leading-snug uppercase tracking-tight text-[16px] group-hover:scale-105 transition-transform">{ben.title}</h4>
                                        <p className="text-slate-400 text-sm font-bold italic group-hover:text-slate-600 transition-colors">{ben.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Financial Outcomes */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase underline decoration-teal-400 decoration-[6px] underline-offset-8">Financial ROI</h2>
                            <p className="text-slate-600 mb-12 font-bold text-lg opacity-70">
                                Pricing only matters if it delivers results. We orient our strategy around improving your financial performance, not just billing tasks.
                            </p>

                            <div className="space-y-5">
                                {financialOutcomes.map((out, idx) => (
                                    <div key={idx} className="flex gap-6 items-center bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 text-[#0033e7] flex items-center justify-center font-black text-2xl flex-shrink-0 group-hover:bg-[#0033e7] group-hover:text-white transition-all duration-500 shadow-inner">
                                            $
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 text-[19px] uppercase tracking-tight">{out.title}</h4>
                                            <p className="text-slate-400 font-bold text-sm italic group-hover:text-slate-600 transition-colors">{out.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

             {/* Takeaways & FAQ Split */}
             <section className="py-24 relative border-t border-blue-50/50 bg-gradient-to-b from-[#f8faff] to-white">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Quick Takeaways - LIGHT REDESIGN */}
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="bg-gradient-to-br from-[#0033e7] to-[#0A1F33] rounded-[3.5rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
                                    <h3 className="text-4xl font-black mb-12 relative z-10 tracking-tighter uppercase italic">Quick <span className="text-teal-300">Takeaways</span></h3>
                                    <ul className="space-y-8 relative z-10">
                                        {takeaways.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-6 text-[19px] font-bold tracking-tight">
                                                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-teal-300"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
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
                                    <h3 className="text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase underline decoration-[#0033e7] decoration-[6px] underline-offset-8">Information Center</h3>
                                    <div className="space-y-6">
                                        {faqs.map((faq, idx) => (
                                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all group">
                                                <h4 className="text-lg font-black text-slate-900 mb-3 group-hover:text-[#0033e7] transition-colors">{faq.q}</h4>
                                                <p className="text-slate-500 font-bold opacity-80 leading-relaxed italic">{faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 relative text-center">
                   <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1] tracking-tighter mb-10 uppercase">
                                Let’s Align Your <br/> <span className="text-[#0033e7]">Revenue Model</span>
                            </h2>
                            <p className="text-xl text-slate-600 font-bold mb-12 max-w-2xl mx-auto opacity-70">
                                If your pricing model isn’t aligned with your operations, you’re either overpaying… or underperforming. Build a smarter strategy that grows with you.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-black text-white px-14 py-6 rounded-2xl font-black uppercase tracking-[2px] transition-all hover:bg-[#0033e7] hover:-translate-y-2 shadow-2xl">
                                Schedule a Consultation
                            </Link>
                        </motion.div>
                   </div>
                </section>

        </div>
    );
}
