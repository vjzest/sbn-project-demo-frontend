'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaQuoteLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { useNativeInView } from '@/hooks/useNativeInView';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    practice: string;
    metric: string;
    metricLabel: string;
    quote: string;
    avatar: string;
    videoUrl: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Sarah Mitchell",
        title: "Medical Director",
        practice: "Mitchell Family Practice",
        metric: "90 Days",
        metricLabel: "To See Impact",
        quote: "SBN Healthcare transformed our revenue cycle. We saw an immediate impact on cash flow within the first 90 days.",
        avatar: "/img/avatar1.webp",
        videoUrl: "/img/v2.mp4"
    },
    {
        id: 2,
        name: "James Wilson",
        title: "Practice Administrator",
        practice: "Oakwood Orthopedics",
        metric: "100%",
        metricLabel: "Transparency",
        quote: "The level of transparency SBN provides is unmatched. We finally feel like we have a partner who is as invested in our financial success as we are.",
        avatar: "/img/avatar2.webp",
        videoUrl: "/img/v3.mp4"
    }
];

const Testimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [canLoadVideo, setCanLoadVideo] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const isInView = useNativeInView(sectionRef, { margin: "200px", once: true });

    useEffect(() => {
        // Only load background videos automatically on desktop devices
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                // Delay loading slightly to prioritize LCP
                setTimeout(() => setCanLoadVideo(true), 1000);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden relative border-t border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4 relative z-10 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                            Proof of Success
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2]">
                            Trusted by High-Performance Practices
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl border border-white flex items-center justify-center text-gray-400 hover:text-[#0033e7] hover:bg-white hover:shadow-lg transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl border border-white flex items-center justify-center text-gray-400 hover:text-[#0033e7] hover:bg-white hover:shadow-lg transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Manual Slider Wrapper */}
            <div className="relative w-full overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="snap-start px-2 md:px-4 lg:px-5 w-full md:w-1/2 lg:w-1/3 flex-shrink-0 flex"
                            onClick={() => setSelectedVideo(item.videoUrl)}
                        >
                            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:shadow-[0_25px_50px_rgba(0,51,231,0.15)] transition-all duration-500 flex flex-col cursor-pointer group overflow-hidden w-full h-full min-h-[450px]">
                                {/* Video Header */}
                                <div className="relative aspect-video w-full bg-gray-900 overflow-hidden group">
                                    {!isMobile && isInView && canLoadVideo ? (
                                        <video
                                            src={item.videoUrl}
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
                                        />
                                    ) : (
                                        <Image
                                            src={item.avatar}
                                            alt={item.name}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-[#0033e7] group-hover:border-transparent transition-all duration-300">
                                            <FaPlay className="text-white text-xl ml-1" />
                                        </div>
                                    </div>

                                    {/* Floating Metric */}
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-white font-black text-3xl m-0 tracking-tighter block drop-shadow-md">
                                            {item.metric}
                                        </span>
                                        <span className="text-white/80 text-[9px] font-extrabold uppercase tracking-[2px]">
                                            {item.metricLabel}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 pt-6 flex flex-col flex-grow">
                                    <div className="relative mb-6 flex-grow min-h-[100px]">
                                        <FaQuoteLeft className="text-[#0033e7] opacity-10 text-4xl absolute -top-2 -left-2" />
                                        <p className="text-[17px] leading-relaxed text-gray-600 font-medium italic relative z-10 px-4">
                                            "{item.quote}"
                                        </p>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0033e7] font-black text-sm border border-blue-100 shrink-0">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-gray-900 tracking-tight text-base">{item.name}</h4>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight mt-0.5">
                                                {item.title} <span className="mx-1 text-gray-300">|</span> {item.practice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-md"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-[1000px] aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all transform scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 hover:text-[#0033e7] backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer"
                            onClick={() => setSelectedVideo(null)}
                            aria-label="Close video player"
                        >
                            <FaTimes size={18} />
                        </button>
                        <video
                            src={selectedVideo}
                            autoPlay
                            controls
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
