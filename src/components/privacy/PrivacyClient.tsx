'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield, FaRegListAlt, FaNetworkWired, FaServer, FaHistory, FaUserCog, FaExternalLinkAlt, FaChild } from 'react-icons/fa';

const PrivacyClient = () => {
    const effectiveDate = "June 1, 2026"; // Or use [Insert Effective Date] as requested

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="Privacy Notice" 
                subtitle="How we collect, use, and safeguard your information."
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
                                        <FaRegListAlt className="text-[#0033e7]" />
                                        Effective Date: {effectiveDate}
                                    </p>
                                </div>
                                <div className="hidden md:flex w-16 h-16 bg-blue-50 text-[#0033e7] rounded-2xl items-center justify-center rotate-3 shadow-sm border border-blue-100">
                                    <FaUserShield size={28} />
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0033e7] prose-a:no-underline hover:prose-a:underline">
                                
                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaShieldAlt size={14}/></span>
                                    Introduction
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN Healthcare Solution LLC ("SBN," "we," "our," or "us") recognizes the importance of protecting personal information and maintaining the trust of our customers, business partners, website visitors, and authorized users. This Privacy Notice explains how we collect, use, disclose, retain, and safeguard information when you interact with SBN Healthcare Solution LLC through our website, healthcare revenue cycle management services, software products, customer support, business communications, and other authorized interactions. This Privacy Notice applies unless a separate privacy notice or written agreement specifically governs a particular product, service, or relationship.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaNetworkWired size={14}/></span>
                                    Scope
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    This Privacy Notice applies to information collected through:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Our public website.</li>
                                    <li>Contact and inquiry forms.</li>
                                    <li>Business communications.</li>
                                    <li>Customer support interactions.</li>
                                    <li>Consultation and demonstration requests.</li>
                                    <li>Healthcare revenue cycle management services.</li>
                                    <li>Software products and technology platforms where this Privacy Notice is made available.</li>
                                    <li>Business relationships with customers, vendors, partners, and service providers.</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    This Privacy Notice does not apply to third-party websites, applications, or services that maintain their own privacy notices or policies.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaRegListAlt size={14}/></span>
                                    Information We Collect
                                </h3>
                                
                                <div className="space-y-6 mt-6">
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="text-lg font-bold text-slate-900 m-0 mb-2">Business Contact Information</h4>
                                        <p className="text-slate-600 m-0">We may collect your name, business email address, telephone number, organization name, job title, business address, and country or region when you communicate with us or request information.</p>
                                    </div>

                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="text-lg font-bold text-slate-900 m-0 mb-2">Business Information</h4>
                                        <p className="text-slate-600 m-0">Depending on the services requested, we may collect information relating to your organization, healthcare specialty, practice size, service interests, and general operational requirements.</p>
                                    </div>

                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="text-lg font-bold text-slate-900 m-0 mb-2">Website and Technical Information</h4>
                                        <p className="text-slate-600 m-0">When you visit our website, we may automatically collect technical information such as your IP address, browser type, operating system, device information, pages visited, referring website, date and time of access, and general website usage information.</p>
                                    </div>

                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="text-lg font-bold text-slate-900 m-0 mb-2">Information You Choose to Provide</h4>
                                        <p className="text-slate-600 m-0">You may voluntarily provide information when completing forms, requesting consultations or demonstrations, subscribing to communications, contacting support, applying for career opportunities, or communicating with SBN through approved channels.</p>
                                    </div>

                                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                                        <h4 className="text-lg font-bold text-blue-900 m-0 mb-2">Information We Do Not Intentionally Collect</h4>
                                        <p className="text-blue-800/80 m-0">Our public website is not intended for the collection of Protected Health Information (PHI), patient medical records, clinical documentation, or payment card information through standard contact forms. If such information is submitted unintentionally, SBN may take reasonable steps to protect or securely dispose of it in accordance with applicable requirements.</p>
                                    </div>
                                </div>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaServer size={14}/></span>
                                    How We Use Information
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We use information to respond to inquiries, provide requested services, schedule consultations or demonstrations, improve our services, maintain website security, detect unauthorized activity, communicate with customers, comply with legal obligations, and support legitimate business operations.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaUserCog size={14}/></span>
                                    Information Sharing
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN Healthcare Solution LLC does not sell personal information. Information may be shared only with authorized service providers, professional advisers, technology vendors supporting our operations, or government authorities where required by law or necessary to protect legitimate business interests.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaLock size={14}/></span>
                                    Information Security
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN implements administrative, technical, and organizational safeguards designed to protect information against unauthorized access, disclosure, alteration, or destruction. Security measures may include encryption in transit, encryption of stored data where appropriate, authentication controls, role-based access controls, monitoring, audit logging, and periodic security reviews. No method of electronic transmission or storage can be guaranteed to be completely secure. 
                                    For more details, please review our <Link href="/security" className="font-semibold text-[#0033e7] hover:underline">Security Overview</Link>.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaHistory size={14}/></span>
                                    Data Retention
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Information is retained only for as long as reasonably necessary to provide services, satisfy legal or contractual obligations, resolve disputes, maintain business records, or support legitimate operational requirements. Information that is no longer required is securely deleted or anonymized where appropriate.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-100">
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaUserShield size={14}/></span>
                                            Your Privacy Choices
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Subject to applicable law, individuals may request access to, correction of, or deletion of eligible personal information, or submit privacy-related questions using the contact information below.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaExternalLinkAlt size={14}/></span>
                                            Third-Party Websites
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Links to third-party websites are provided for convenience. SBN Healthcare Solution LLC is not responsible for the privacy, security, or content of external websites.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaChild size={14}/></span>
                                            Children's Privacy
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Our website and services are intended for healthcare organizations and business users. We do not knowingly collect personal information from children through our public website.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaRegListAlt size={14}/></span>
                                            Changes & Updates
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            We may update this Privacy Notice periodically to reflect changes in our business, technology, or legal obligations. The revised version will be published on this page with a new effective date.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Contact Us block placed outside of prose to prevent color override */}
                            <div className="mt-12 bg-[#010614] rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7] rounded-full blur-[60px] opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
                                <h3 className="text-xl text-white mt-0 mb-4 flex items-center gap-2 font-bold tracking-tight">Contact Us</h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    If you have questions about this Privacy Notice, please contact:
                                </p>
                                <div className="space-y-2 text-sm font-medium">
                                    <p className="m-0 text-white font-bold">SBN Healthcare Solution LLC</p>
                                    <p className="m-0 text-slate-300">Email: <a href="mailto:info@sbnhealthcaresolution.com" className="text-blue-400 hover:text-white transition-colors no-underline">info@sbnhealthcaresolution.com</a></p>
                                    <p className="m-0 text-slate-300">Website: <a href="https://www.sbnhealthcaresolution.com" className="text-blue-400 hover:text-white transition-colors no-underline">https://www.sbnhealthcaresolution.com</a></p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <p className="text-xs text-slate-400 m-0">
                                        You can also review our <Link href="/terms" className="text-white hover:text-blue-400 transition-colors underline decoration-white/30 hover:decoration-blue-400 underline-offset-4">Terms of Service</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyClient;
