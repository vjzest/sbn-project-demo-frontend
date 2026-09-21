'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { FaShieldAlt, FaBalanceScale, FaLandmark, FaUserShield, FaHandshake, FaStethoscope, FaServer, FaSync, FaClipboardCheck, FaBook, FaLink, FaHistory } from 'react-icons/fa';

const ComplianceClient = () => {
    const effectiveDate = "June 1, 2026"; // Or use [Insert Effective Date]

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="Compliance Overview" 
                subtitle="Our commitment to governance, accountability, and responsible operations."
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
                                        <FaClipboardCheck className="text-[#0033e7]" />
                                        Effective Date: {effectiveDate}
                                    </p>
                                </div>
                                <div className="hidden md:flex w-16 h-16 bg-blue-50 text-[#0033e7] rounded-2xl items-center justify-center rotate-3 shadow-sm border border-blue-100">
                                    <FaBalanceScale size={28} />
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0033e7] prose-a:no-underline hover:prose-a:underline">
                                
                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaBook size={14}/></span>
                                    Introduction
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN Healthcare Solution LLC (“SBN,” “we,” “our,” or “us”) recognizes that responsible business operations require more than delivering services. They require a commitment to governance, accountability, information protection, and compliance with applicable legal and contractual obligations.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    This Compliance Overview describes the principles that guide our approach to conducting business responsibly while supporting healthcare organizations through our services and technology solutions.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    This page provides a high-level overview of our compliance practices and should be read together with our <Link href="/privacy">Privacy Notice</Link>, <Link href="/security">Security Overview</Link>, and <Link href="/terms">Terms of Service</Link>.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaHandshake size={14}/></span>
                                    Our Approach
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Compliance is an ongoing business responsibility rather than a one-time activity.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    SBN Healthcare Solution LLC is committed to conducting its business in accordance with applicable laws, contractual obligations, and industry expectations relevant to the services we provide.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    As our business evolves, we periodically review and improve our governance, policies, and operational practices to support our customers, business partners, and healthcare organizations.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaLandmark size={14}/></span>
                                    Governance
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Good governance supports responsible decision-making throughout our organization. SBN maintains documented business practices and operational processes designed to promote accountability, consistency, and continuous improvement.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">Our governance approach includes:</p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Business policies and procedures</li>
                                    <li>Operational oversight</li>
                                    <li>Information management</li>
                                    <li>Risk awareness</li>
                                    <li>Documentation management</li>
                                    <li>Internal accountability</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    Governance practices are periodically reviewed as business requirements evolve.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 m-0 mb-3">
                                            <FaUserShield className="text-[#0033e7]"/> Privacy
                                        </h4>
                                        <p className="text-slate-600 m-0 text-sm leading-relaxed mb-3">
                                            Responsible handling of information is an important component of our compliance approach. SBN maintains documented privacy practices describing how information may be collected, used, disclosed, retained, and protected throughout our business operations.
                                        </p>
                                        <p className="text-slate-600 m-0 text-sm">
                                            Additional information is available in our <Link href="/privacy">Privacy Notice</Link>.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 m-0 mb-3">
                                            <FaShieldAlt className="text-[#0033e7]"/> Security
                                        </h4>
                                        <p className="text-slate-600 m-0 text-sm leading-relaxed mb-3">
                                            Information security supports our overall compliance objectives. SBN implements administrative, technical, and organizational safeguards designed to help protect business information, customer information, and operational systems.
                                        </p>
                                        <p className="text-slate-600 m-0 text-sm">
                                            Additional information is available in our <Link href="/security">Security Overview</Link>.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaStethoscope size={14}/></span>
                                    Healthcare Services
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN provides services that support healthcare organizations. Where applicable to the services we provide, our business practices are designed with consideration for relevant contractual obligations and applicable healthcare privacy and security requirements. Business requirements may vary depending on the nature of each customer engagement.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaServer size={14}/></span>
                                    Third-Party Service Providers
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN may work with carefully selected third-party service providers that support our business operations. Where appropriate, third-party relationships may be evaluated based on business, operational, contractual, privacy, and security considerations. The use of third-party services does not reduce our commitment to responsible information management.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaSync size={14}/></span>
                                    Continuous Improvement
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Business, technology, and regulatory expectations continue to evolve. Accordingly, SBN periodically reviews its governance practices, operational procedures, and documentation to support continuous improvement and responsible business operations. Where appropriate, our policies and procedures may be updated to reflect changes in legal requirements, customer expectations, operational needs, or technology.
                                </p>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaClipboardCheck size={14}/></span>
                                    Compliance Responsibilities
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Compliance is a shared responsibility across the organization. SBN encourages responsible business practices through:
                                </p>
                                <ul className="space-y-2 text-slate-600 marker:text-[#0033e7]">
                                    <li>Ethical business conduct</li>
                                    <li>Information protection</li>
                                    <li>Policy awareness</li>
                                    <li>Operational accountability</li>
                                    <li>Continuous improvement</li>
                                    <li>Risk-based decision making</li>
                                </ul>

                                <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-10">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaBalanceScale size={14}/></span>
                                    Regulatory Awareness
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SBN monitors developments that may affect the healthcare technology and healthcare services sectors. Where appropriate, we evaluate applicable legal, contractual, privacy, and operational requirements relevant to our business activities and customer engagements.
                                </p>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 my-6">
                                    <p className="text-blue-900 m-0 italic text-sm">
                                        This overview should not be interpreted as a representation or certification of compliance with any specific law, regulation, framework, or standard unless expressly stated elsewhere by SBN.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-100">
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaLink size={14}/></span>
                                            Other Trust Documents
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                            This Compliance Overview should be read together with the following documents available through our Enterprise Trust Center:
                                        </p>
                                        <ul className="space-y-1 text-sm text-slate-600 marker:text-[#0033e7] m-0">
                                            <li><Link href="/privacy">Privacy Notice</Link></li>
                                            <li><Link href="/security">Security Overview</Link></li>
                                            <li><Link href="/terms">Terms of Service</Link></li>
                                        </ul>
                                        <p className="text-slate-600 leading-relaxed text-xs mt-4">
                                            Together, these documents provide an overview of SBN’s approach to information management, security, governance, and responsible business operations.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center gap-3 text-xl text-slate-900 mt-0 mb-4">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center shrink-0"><FaHistory size={14}/></span>
                                            Updates
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            SBN Healthcare Solution LLC may update this Compliance Overview periodically to reflect changes in business operations, legal requirements, customer expectations, or governance practices. The most current version will be published on this page.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            
                            {/* Contact Us block placed outside of prose */}
                            <div className="mt-12 bg-[#010614] rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7] rounded-full blur-[60px] opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
                                <h3 className="text-xl text-white mt-0 mb-4 flex items-center gap-2 font-bold tracking-tight">Contact Us</h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    For questions regarding this Compliance Overview or our governance practices, please contact:
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

export default ComplianceClient;
