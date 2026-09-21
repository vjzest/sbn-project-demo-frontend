'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { FaBalanceScale, FaRegFileAlt, FaHandshake, FaGlobe, FaShieldAlt, FaCopyright, FaExclamationTriangle, FaGavel, FaPen, FaLink, FaUserCheck, FaTools, FaFileContract } from 'react-icons/fa';

const TermsClient = () => {
    const effectiveDate = "June 1, 2026"; // Or use [Insert Effective Date]

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="Terms of Service" 
                subtitle="Guidelines governing your access and use of our platform and services."
            />
            
            <section className="py-20 relative">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden">
                        
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="border-b border-slate-100 pb-8 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">SBN Healthcare Solution LLC</h2>
                                    <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
                                        <FaRegFileAlt className="text-[#0033e7]" />
                                        Effective Date: {effectiveDate}
                                    </p>
                                </div>
                                <div className="hidden md:flex w-16 h-16 bg-blue-50 text-[#0033e7] rounded-2xl items-center justify-center rotate-3 shadow-sm border border-blue-100">
                                    <FaBalanceScale size={28} />
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0033e7] prose-a:no-underline hover:prose-a:underline">
                                
                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">1</span>
                                    Introduction
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Welcome to SBN Healthcare Solution LLC ("SBN," "we," "our," or "us"). These Terms of Service govern your access to and use of the SBN Healthcare Solution LLC website, products, services, and related business communications. By accessing our website, requesting information, communicating with us, or using our services, you agree to these Terms. These Terms apply unless a separate written agreement governs a specific business relationship or service.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">2</span>
                                    Eligibility
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Our website and services are intended for healthcare organizations, businesses, professionals, and individuals legally permitted to enter into binding agreements.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">3</span>
                                    Our Services
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN Healthcare Solution LLC provides healthcare revenue cycle management, business support, consulting, and related technology services. Service descriptions are for general information and do not create contractual obligations unless agreed in writing.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">4</span>
                                    Acceptable Use
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Users must comply with applicable laws and must not attempt unauthorized access, interfere with website operations, transmit malicious code, misrepresent identity, misuse website content, or engage in activities that affect the security or availability of our services.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">5</span>
                                    Intellectual Property
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    All website content, branding, documentation, methodologies, software, designs, workflows, graphics, and proprietary materials are owned by or licensed to SBN Healthcare Solution LLC and are protected by applicable intellectual property laws. No ownership or license is granted except where expressly authorized in writing.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 m-0 mb-3">
                                            <span className="w-6 h-6 rounded-md bg-blue-100 text-[#0033e7] flex items-center justify-center text-xs">6</span> Third-Party Services
                                        </h4>
                                        <p className="text-slate-600 m-0 text-sm leading-relaxed">
                                            Links to third-party services are provided for convenience. SBN Healthcare Solution LLC is not responsible for third-party content, availability, privacy, security, or practices.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 m-0 mb-3">
                                            <span className="w-6 h-6 rounded-md bg-blue-100 text-[#0033e7] flex items-center justify-center text-xs">7</span> Website Availability
                                        </h4>
                                        <p className="text-slate-600 m-0 text-sm leading-relaxed">
                                            We strive to maintain website availability but cannot guarantee uninterrupted access. We may modify, suspend, or discontinue website features without prior notice.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">8</span>
                                    Disclaimer of Warranties
                                </h3>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 my-6">
                                    <p className="text-blue-900 m-0 italic text-sm">
                                        The website and publicly available information are provided on an 'as is' and 'as available' basis to the fullest extent permitted by applicable law.
                                    </p>
                                </div>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">9</span>
                                    Limitation of Liability
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    To the fullest extent permitted by law, SBN Healthcare Solution LLC shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from the use of the website or publicly available information.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">10</span>
                                    Indemnification
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    You agree to indemnify and hold harmless SBN Healthcare Solution LLC from claims arising from your violation of these Terms or misuse of the website or services, to the extent permitted by law.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-100">
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">11</span>
                                            Changes to These Terms
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            We may revise these Terms periodically. Updated versions will be published with a revised Effective Date. Continued use of the website constitutes acceptance of the revised Terms.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0 text-sm">12</span>
                                            Governing Law
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles. Jurisdiction shall lie with the appropriate courts unless otherwise agreed in writing.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-12 pt-8 border-t border-slate-100">
                                    <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                        <FaLink className="text-[#0033e7]" size={16}/> Related Trust Center Documents
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                        Please read these Terms in conjunction with our other Trust Center documents:
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-600 marker:text-[#0033e7] m-0">
                                        <li><Link href="/privacy">Privacy Notice</Link></li>
                                        <li><Link href="/security">Security Overview</Link></li>
                                        <li><Link href="/compliance">Compliance Overview</Link></li>
                                    </ul>
                                </div>

                            </div>
                            
                            {/* Contact Us block placed outside of prose */}
                            <div className="mt-12 bg-[#010614] rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7] rounded-full blur-[60px] opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
                                <h3 className="text-xl text-white mt-0 mb-4 flex items-center gap-3 font-bold tracking-tight">
                                    <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 text-sm">13</span>
                                    Contact Us
                                </h3>
                                <div className="space-y-2 text-sm font-medium">
                                    <p className="m-0 text-white font-bold">SBN Healthcare Solution LLC</p>
                                    <p className="m-0 text-slate-300">Email: <a href="mailto:info@sbnhealthcaresolution.com" className="text-blue-400 hover:text-white transition-colors no-underline">info@sbnhealthcaresolution.com</a></p>
                                    <p className="m-0 text-slate-300">Website: <a href="https://www.sbnhealthcaresolution.com" className="text-blue-400 hover:text-white transition-colors no-underline">https://www.sbnhealthcaresolution.com</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsClient;
