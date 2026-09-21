'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield, FaRegListAlt, FaNetworkWired, FaServer, FaHistory, FaBug, FaSync, FaBook, FaLink, FaClipboardCheck, FaHandshake, FaDatabase, FaUsersCog, FaCode, FaChartLine } from 'react-icons/fa';

const SecurityClient = () => {
    const effectiveDate = "June 1, 2026"; // Or use [Insert Effective Date]

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="Security Overview" 
                subtitle="How we protect confidentiality, integrity, and availability of information."
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
                                    <FaShieldAlt size={28} />
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0033e7] prose-a:no-underline hover:prose-a:underline">
                                
                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaBook size={14}/></span>
                                    Introduction
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN Healthcare Solution LLC (“SBN,” “we,” “our,” or “us”) recognizes that information security is fundamental to maintaining the trust of our customers, business partners, and healthcare organizations.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Our approach to security is based on protecting the confidentiality, integrity, and availability of information through administrative, technical, and organizational safeguards that support responsible business operations.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    This Security Overview provides a high-level description of our security practices and should be read together with our <Link href="/privacy">Privacy Notice</Link>, <Link href="/compliance">Compliance Overview</Link>, and <Link href="/terms">Terms of Service</Link>.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaShieldAlt size={14}/></span>
                                    Our Security Approach
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Security is an ongoing business responsibility rather than a one-time activity. SBN is committed to maintaining security practices that help protect business information, customer information, and operational systems throughout the lifecycle of our services. Our security program evolves continuously as technology, business requirements, and industry expectations change.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaClipboardCheck size={14}/></span>
                                    Security Principles
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Our security practices are guided by the following principles:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Confidentiality</li>
                                    <li>Integrity</li>
                                    <li>Availability</li>
                                    <li>Accountability</li>
                                    <li>Continuous Improvement</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    These principles support responsible information management across our business operations.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaDatabase size={14}/></span>
                                    Information Protection
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    SBN implements administrative, technical, and organizational safeguards designed to help protect information throughout its lifecycle. Depending on business requirements, these safeguards may include:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Appropriate access controls</li>
                                    <li>Authentication mechanisms</li>
                                    <li>Encryption during information transmission where appropriate</li>
                                    <li>Secure information handling practices</li>
                                    <li>Audit logging</li>
                                    <li>Periodic review of access permissions</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    Security measures are reviewed periodically to support continuous improvement.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaUsersCog size={14}/></span>
                                    Identity and Access Management
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Access to business systems and information is managed according to business responsibilities. Where appropriate, SBN applies security practices including:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Role-based access</li>
                                    <li>Least privilege principles</li>
                                    <li>User authentication</li>
                                    <li>Periodic access reviews</li>
                                    <li>Account lifecycle management</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    Access is limited to authorized individuals based on operational requirements.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaCode size={14}/></span>
                                    Secure Development
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Security considerations are incorporated throughout the design, development, deployment, and maintenance of technology solutions. Our development practices may include:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Code review</li>
                                    <li>Security testing</li>
                                    <li>Change management</li>
                                    <li>Controlled deployment processes</li>
                                    <li>Ongoing improvements to development practices</li>
                                </ul>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 my-6">
                                    <p className="text-blue-900 m-0 italic text-sm">
                                        For security reasons, implementation details are not publicly disclosed.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 m-0 mb-3">
                                            <FaChartLine className="text-[#0033e7]"/> Monitoring and Logging
                                        </h4>
                                        <p className="text-slate-600 m-0 text-sm leading-relaxed mb-3">
                                            Operational and security-related events may be monitored to support system reliability, operational visibility, security investigations, incident response, and audit requirements.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 m-0 mb-3">
                                            <FaBug className="text-[#0033e7]"/> Incident Response
                                        </h4>
                                        <p className="text-slate-600 m-0 text-sm leading-relaxed mb-3">
                                            SBN maintains processes designed to identify, assess, respond to, and recover from security events. Our objective is to minimize operational disruption while supporting timely responses.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaNetworkWired size={14}/></span>
                                    Business Continuity
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Business continuity planning supports the ongoing availability of critical business operations. Where appropriate, continuity planning may include:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Backup procedures</li>
                                    <li>Recovery planning</li>
                                    <li>Operational resilience</li>
                                    <li>Continuous improvement</li>
                                </ul>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaHandshake size={14}/></span>
                                    Third-Party Risk Management
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN may work with carefully selected third-party service providers that support our business operations. Where appropriate, third-party providers may be evaluated based on business, operational, privacy, contractual, and security considerations.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaSync size={14}/></span>
                                    Continuous Improvement
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Security is an ongoing process. SBN periodically reviews its security practices, policies, and operational procedures to support evolving business needs, customer expectations, emerging risks, and changes in technology.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaUserShield size={14}/></span>
                                    Security Reporting
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    If you believe you have identified a potential security issue involving SBN Healthcare Solution LLC, please contact us using the information provided below. Additional guidance regarding responsible security reporting may be published in the future through our Responsible Disclosure page.
                                </p>

                                <div className="mt-12 pt-8 border-t border-slate-100">
                                    <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                        <FaLink className="text-[#0033e7]" size={16}/> Related Trust Center Documents
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                        This Security Overview should be read together with the following documents available through our Enterprise Trust Center:
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-600 marker:text-[#0033e7] m-0">
                                        <li><Link href="/privacy">Privacy Notice</Link></li>
                                        <li><Link href="/compliance">Compliance Overview</Link></li>
                                        <li><Link href="/terms">Terms of Service</Link></li>
                                    </ul>
                                </div>

                            </div>
                            
                            {/* Contact Us block placed outside of prose */}
                            <div className="mt-12 bg-[#010614] rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7] rounded-full blur-[60px] opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
                                <h3 className="text-xl text-white mt-0 mb-4 flex items-center gap-3 font-bold tracking-tight">
                                    Contact Us
                                </h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    For security-related questions, please contact:
                                </p>
                                <div className="space-y-2 text-sm font-medium">
                                    <p className="m-0 text-white font-bold">SBN Healthcare Solution LLC</p>
                                    <p className="m-0 text-slate-300">Email: <a href="mailto:info@sbnhealthcaresolution.com" className="text-blue-400 hover:text-white transition-colors no-underline">info@sbnhealthcaresolution.com</a></p>
                                    <p className="m-0 text-slate-300">Website: <a href="https://www.sbnhealthcaresolution.com" className="text-blue-400 hover:text-white transition-colors no-underline">www.sbnhealthcaresolution.com</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecurityClient;
