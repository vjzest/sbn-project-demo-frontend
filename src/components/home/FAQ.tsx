'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        question: "What exactly are Medical Billing Services and do I really need them?",
        answer: "Medical Billing Services handle the entire process of submitting claims and following up until your practice gets paid. Most practices that outsource billing recover 15–25% more revenue within their first quarter."
    },
    {
        question: "How is SBN different from other billing companies?",
        answer: "Most billing companies process claims and move on. SBN actively monitors every claim, follows up on denials, and provides transparent reporting — with 14+ years of experience and a 98% first-pass acceptance rate."
    },
    {
        question: "What does Revenue Cycle Management include?",
        answer: "Everything: patient eligibility verification, prior authorization, charge entry, coding, claim submission, payment posting, AR follow-up, and denial management — managed end-to-end."
    },
    {
        question: "Is outsourcing billing safe for my patient data?",
        answer: "Absolutely. SBN is fully HIPAA-compliant. All patient data is handled with strict security protocols, encrypted storage, and access controls."
    },
    {
        question: "How quickly are claims submitted?",
        answer: "Within 48 hours of receiving the charge. Every claim goes through our scrubbing process first to catch errors before submission."
    },
    {
        question: "Do you handle old unpaid claims?",
        answer: "Yes. Our AR team works on both current and aging claims — even ones that have been sitting for months. Many practices recover revenue they’d already written off."
    },
    {
        question: "Which specialties do you cover?",
        answer: "Behavioral Health, DME/Orthopedics, Urgent Care, Telehealth, and Multi-Specialty Hospitals — among others. Our team is trained in specialty-specific payer rules."
    },
    {
        question: "How much does it cost?",
        answer: "We offer a complete service package, per-transaction billing starting at $0.75/claim, FTE-based dedicated staff, and fully custom plans. Contact us for a free, no-obligation quote."
    },
    {
        question: "What coding services do you provide?",
        answer: "Our certified coders handle ICD-10, CPT, and HCPCS coding across all specialties — ensuring fewer denials, full reimbursement, and complete payer compliance."
    },
    {
        question: "How do I get started?",
        answer: "Book a free consultation. We’ll review your current billing process, identify revenue gaps, and recommend the right solution — with no pressure and no obligation."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-white relative border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Frequently Asked Questions
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-8">
                        Got Questions? We Have Answers.
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto divide-y divide-slate-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button 
                                className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#0033e7] transition-colors pr-8">
                                    Q{index + 1}. {faq.question}
                                </h3>
                                <div className="text-[#0033e7] flex-shrink-0">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </button>
                            
                            <div 
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-label={faq.question}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] mt-4' : 'max-h-0'}`}
                            >
                                <p className="text-gray-600 font-medium leading-relaxed pr-8">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center mt-20 p-10 bg-[#0033e7] rounded-3xl text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to recover more revenue?</h3>
                        <p className="text-blue-100 mb-8 font-medium">Contact SBN Healthcare Solution today for a free, no-obligation consultation.</p>
                        <Link 
                            href="/contact-us" 
                            className="inline-block px-10 py-4 bg-white text-[#0033e7] font-bold uppercase text-sm tracking-[2px] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
