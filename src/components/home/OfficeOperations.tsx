'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';
import Image from 'next/image';
import { useNativeInView } from '@/hooks/useNativeInView';

const OfficeOperations = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [canLoadVideo, setCanLoadVideo] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const isInView = useNativeInView(containerRef, { margin: "200px", once: true });

    useEffect(() => {
        // Only load video automatically on desktop devices
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

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <section className="py-24 md:py-32 overflow-hidden relative border-t border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 text-[#0033e7] font-semibold uppercase text-xs tracking-[2px] mb-6 px-5 py-2 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse"></span>
                        Why Providers Choose SBN
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.2]">
                        We Treat Your Revenue Like Our Own
                    </h2>

                    <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        There are many billing companies out there. Here’s why healthcare providers across the USA choose SBN — and stay with us:
                    </p>
                </div>

                {/* Video Player */}
                <div className="max-w-5xl mx-auto">
                    <div ref={containerRef} className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,51,231,0.15)] border border-white group aspect-video bg-gray-100">
                        {(!isMobile && isInView && canLoadVideo) || (!isPlaying && isMobile) ? (
                            <video
                                ref={videoRef}
                                src="/img/workflow.mp4"
                                autoPlay={!isMobile}
                                muted
                                loop
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        ) : (
                            <Image
                                src="/Home image1.webp"
                                alt="Operations Poster"
                                fill
                                className="object-cover opacity-80"
                            />
                        )}

                        {/* Gradient Overlay bottom for controls readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />

                        {/* Controls */}
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-4 md:gap-6">
                                <button
                                    onClick={togglePlay}
                                    aria-label={isPlaying ? "Pause office tour video" : "Play office tour video"}
                                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#0033e7] rounded-2xl flex items-center justify-center border border-white/40 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                >
                                    {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
                                </button>
                                <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-[3px] opacity-90 drop-shadow-md">
                                    SBN Global Center
                                </span>
                            </div>
                            <button
                                onClick={handleFullscreen}
                                aria-label="Fullscreen office tour video"
                                className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#0033e7] rounded-xl md:rounded-2xl flex items-center justify-center border border-white/40 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            >
                                <FaExpand size={14} />
                            </button>
                        </div>

                        {/* SBN Watermark */}
                        <div className="absolute top-6 left-6 md:top-8 md:left-8 pointer-events-none">
                            <span className="text-[8px] md:text-[10px] font-black text-white/50 uppercase tracking-[4px] drop-shadow-md">SBN System</span>
                        </div>
                    </div>
                </div>

                {/* Reasons List Below Video */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                    {[
                        { title: '14+ Years of Hands-On Experience', desc: 'We’ve seen every billing scenario' },
                        { title: '200+ Dedicated Billing Specialists', desc: 'Real experts on your claims, not just software' },
                        { title: '98% First-Pass Claim Acceptance Rate', desc: 'Fewer rejections, faster payments' },
                        { title: 'Claims Submitted Within 48 Hours', desc: 'No delays, no backlogs' },
                        { title: 'Compatible with 50+ EMR/EHR Platforms', desc: 'Seamless integration with your systems' },
                        { title: 'Full Transparency and Reporting', desc: 'You always know where your money stands' },
                        { title: 'HIPAA-Compliant Operations', desc: 'Your patient data is always protected' },
                    ].map((reason, i) => (
                        <div key={i} className="flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-slate-100 items-start text-left hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0033e7] mb-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeOperations;
