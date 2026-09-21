'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    // Hide footer on admin pages
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <footer
            className="relative pt-[1px] pb-[40px] text-gray-900 overflow-hidden bg-cover bg-center bg-no-repeat border-t border-slate-100"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Overlay gradient identical to other sections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-blue-100/70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-[80px]">
                    {/* Brand Info */}
                    <div className="lg:col-span-4">
                        <div className="mb-8">
                            <Link href="/" className="flex items-center gap-4 no-underline group">
                                <div className="p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white transition-transform group-hover:scale-105">
                                    <Image
                                        src="/Logo.webp"
                                        alt="SBN Healthcare Solution"
                                        width={60}
                                        height={60}
                                        className="h-[50px] md:h-[60px] w-auto mix-blend-multiply object-contain"
                                    />
                                </div>
                                <div className="flex flex-col justify-center leading-none">
                                    <span className="text-[#010614] font-black text-[18px] md:text-[22px] tracking-tight uppercase">
                                        SBN Healthcare
                                    </span>
                                    <span className="text-[#0033e7] font-black text-[10px] md:text-[12px] tracking-[4px] uppercase mt-0.5">
                                        Solution
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <p className="text-gray-600 text-[16px] leading-[1.8] mb-10 max-w-[340px] font-medium tracking-tight">
                            Next-generation RCM infrastructure engineered to accelerate cash flow and eliminate administrative friction for modern medical practices.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebook />, href: "https://www.facebook.com/BillingGiant/", label: "Facebook" },
                                { icon: <FaTwitter />, href: "https://twitter.com/sbnhealthcare", label: "Twitter" },
                                { icon: <FaLinkedin />, href: "https://in.linkedin.com/company/sbn-healthcare-solution-llc", label: "LinkedIn" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit SBN Healthcare on ${social.label}`}
                                    className="w-11 h-11 bg-white/50 backdrop-blur-sm border border-white flex items-center justify-center rounded-2xl text-gray-400 hover:bg-[#0033e7] hover:text-white hover:border-[#0033e7] hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-500 active:scale-95 shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="lg:col-span-3 lg:ml-auto">
                        <h4 className="text-[11px] font-black uppercase tracking-[4px] text-[#0033e7] mb-10 border-b-2 border-blue-600/10 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/2 after:h-[2px] after:bg-[#0033e7]">
                            Platform Solutions
                        </h4>
                        <ul className="flex flex-col gap-5 p-0 list-none">
                            {[
                                { name: 'Eligibility Verification', href: '/services/eligibility-verification' },
                                { name: 'Benefits Check', href: '/services/benefits-check' },
                                { name: 'Prior Authorization', href: '/services/prior-authorization' },
                                { name: 'Exclusion Check', href: '/services/exclusion-check' },
                                { name: 'Privacy & Security', href: '/security' }
                            ].map((item, idx) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 text-[15px] font-bold hover:text-[#0033e7] transition-all flex items-center gap-3 group no-underline hover:translate-x-1"
                                    >
                                        <span className="w-1 h-4 rounded-full bg-blue-600/0 group-hover:bg-[#0033e7] transition-all"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            
                            {/* Trust Center Dropdown right under Privacy & Security */}
                            <li className="mt-2 group/trust">
                                <div 
                                    className="text-gray-600 text-[15px] font-bold hover:text-[#0033e7] transition-all flex items-center gap-3 group no-underline lg:hover:translate-x-1 w-full text-left"
                                >
                                    <span className={`w-1 h-4 rounded-full transition-all bg-[#0033e7] lg:bg-transparent lg:group-hover/trust:bg-[#0033e7]`}></span>
                                    Trust Center
                                    <svg className={`w-3 h-3 ml-1 transition-transform duration-300 rotate-180 lg:rotate-0 lg:group-hover/trust:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                                
                                <ul className={`flex flex-col gap-3 p-0 list-none overflow-hidden transition-all duration-300 pl-6 border-l-2 border-slate-100 ml-1.5 max-h-[500px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:group-hover/trust:max-h-[500px] lg:group-hover/trust:opacity-100 lg:group-hover/trust:mt-4`}>
                                    {[
                                        { name: 'Privacy Notice', href: '/privacy' },
                                        { name: 'Security Overview', href: '/security' },
                                        { name: 'Compliance Overview', href: '/compliance' },
                                        { name: 'Terms of Service', href: '/terms' }
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-500 text-[13px] font-bold hover:text-[#0033e7] transition-all no-underline block"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <h4 className="text-[11px] font-black uppercase tracking-[4px] text-[#0033e7] mb-10 border-b-2 border-blue-600/10 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/2 after:h-[2px] after:bg-[#0033e7]">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-5 p-0 list-none">
                            {[
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'RCM Tool', href: '/rcm-calculator' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'Contact Us', href: '/contact-us' }
                            ].map((item, idx) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 text-[15px] font-bold hover:text-[#0033e7] transition-all flex items-center gap-3 group no-underline hover:translate-x-1"
                                    >
                                        <span className="w-1 h-4 rounded-full bg-blue-600/0 group-hover:bg-[#0033e7] transition-all"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* HQ */}
                    <div className="lg:col-span-3 lg:ml-auto">
                        <h4 className="text-[11px] font-black uppercase tracking-[4px] text-[#0033e7] mb-10 border-b-2 border-blue-600/10 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/2 after:h-[2px] after:bg-[#0033e7]">
                            Get In Touch
                        </h4>
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] mb-2">US Headquarters</h5>
                                    <div className="text-gray-600 text-[15px] leading-[1.8] font-medium">
                                        1309 Coffeen Avenue Ste 1200<br />
                                        Sheridan, WY 82801
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] mb-2">Middle East Office</h5>
                                    <div className="text-gray-600 text-[14px] leading-[1.8] font-medium">
                                        Office C1-1F-SF8562, Ajman Free Zone<br />
                                        Makani No. 4442612247, UAE
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a
                                    href="tel:8054264609"
                                    aria-label="Call US Headquarters at +1 805 426 4609"
                                    className="text-gray-600 text-[15px] flex items-center gap-4 transition-all hover:text-[#0033e7] group no-underline"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all shrink-0">
                                        <FaPhoneAlt size={12} />
                                    </div>
                                    <span className="font-bold">US: +1 (805) 426-4609</span>
                                </a>
                                <a
                                    href="tel:+971509234437"
                                    aria-label="Call Middle East Office at +971 50 923 4437"
                                    className="text-gray-600 text-[15px] flex items-center gap-4 transition-all hover:text-[#0033e7] group no-underline"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all shrink-0">
                                        <FaPhoneAlt size={12} />
                                    </div>
                                    <span className="font-bold">ME: +971 50 923 4437</span>
                                </a>
                                <a
                                    href="mailto:info@sbnhealthcaresolution.com"
                                    aria-label="Send email to info@sbnhealthcaresolution.com"
                                    className="text-gray-600 text-[15px] flex items-center gap-4 transition-all hover:text-[#0033e7] group no-underline"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-[#0033e7] group-hover:bg-[#0033e7] group-hover:text-white transition-all shrink-0">
                                        <FaEnvelope size={12} />
                                    </div>
                                    <span className="font-bold break-all">info@sbnhealthcaresolution.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200/50 pt-10 pb-10 text-center relative z-10 bg-white/30 backdrop-blur-sm">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <p className="text-slate-500 text-[11px] font-black uppercase tracking-[3px] mb-2">
                            &copy; 2026 SBN Healthcare Solution. All Rights Reserved.
                        </p>
                        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[2px]">
                            ENGINEERED FOR EXCELLENCE IN HEALTHCARE REVENUE CYCLE MANAGEMENT
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
