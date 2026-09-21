'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [analyticsConsent, setAnalyticsConsent] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice via cookie
        const cookies = document.cookie.split('; ');
        const consentCookie = cookies.find(row => row.startsWith('sbn_cookie_consent='));

        if (!consentCookie) {
            // Delay appearance for non-intrusive loading
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            const consentValue = consentCookie.split('=')[1];
            if (consentValue === 'accepted') {
                updateGoogleConsent('granted');
            }
        }
    }, []);

    const updateGoogleConsent = (status: 'granted' | 'denied') => {
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
            (window as any).gtag('consent', 'update', {
                analytics_storage: status,
                ad_storage: 'denied',
            });
        }
    };

    const saveCookie = (value: string) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = `sbn_cookie_consent=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    };

    const handleAcceptAll = () => {
        saveCookie('accepted');
        updateGoogleConsent('granted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        saveCookie('declined');
        updateGoogleConsent('denied');
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        if (analyticsConsent) {
            handleAcceptAll();
        } else {
            handleDecline();
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    /* Positioned on bottom-left, completely separated from chat button on bottom-right */
                    className="fixed bottom-6 left-6 z-[100000] max-w-[380px] w-[calc(100%-48px)]"
                >
                    <div className="bg-[#0B1F33]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 p-6 overflow-hidden relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0033e7]/20 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="flex items-start gap-4 mb-5 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-[#0033e7]/20 flex items-center justify-center flex-shrink-0 border border-[#0033e7]/30 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
                            </div>
                            <div className="text-slate-300 text-[13px] leading-relaxed font-medium">
                                <p className="m-0">
                                    We use essential cookies for site security and analytics to measure site usage.
                                    <a href="/privacy" className="text-[#60a5fa] ml-1.5 hover:text-white transition-colors font-bold underline decoration-[#60a5fa]/40 underline-offset-2">Privacy Notice</a>
                                </p>
                            </div>
                        </div>

                        {/* Granular Settings View */}
                        {showSettings ? (
                            <div className="space-y-4 mb-5 relative z-10 pt-2 border-t border-white/10">
                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="text-xs font-bold text-white mb-0.5">Essential Cookies</p>
                                        <p className="text-[11px] text-slate-400 m-0">Required for security & core functions</p>
                                    </div>
                                    <span className="text-[10px] uppercase font-bold text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-md">Always Active</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="text-xs font-bold text-white mb-0.5">Analytics & Measurement</p>
                                        <p className="text-[11px] text-slate-400 m-0">Helps us understand website performance</p>
                                    </div>
                                    <input 
                                        type="checkbox"
                                        checked={analyticsConsent}
                                        onChange={(e) => setAnalyticsConsent(e.target.checked)}
                                        aria-label="Allow Analytics Cookies"
                                        className="w-4 h-4 accent-[#0033e7] rounded cursor-pointer"
                                    />
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <button
                                        onClick={handleSavePreferences}
                                        className="flex-1 bg-[#0033e7] text-white text-xs font-extrabold py-3 rounded-xl hover:bg-blue-800 transition-all uppercase tracking-wider cursor-pointer"
                                    >
                                        Save Choices
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="px-4 bg-white/5 text-slate-300 border border-white/10 text-xs font-bold py-3 rounded-xl hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Primary Action Controls */
                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleAcceptAll}
                                        className="flex-1 bg-[#0033e7] text-white text-xs font-extrabold py-3.5 rounded-xl transition-all hover:bg-blue-800 hover:shadow-[0_10px_20px_rgba(0,51,231,0.3)] active:scale-95 uppercase tracking-[1.5px] cursor-pointer"
                                    >
                                        Accept All
                                    </button>
                                    <button
                                        onClick={handleDecline}
                                        className="flex-1 bg-white/10 text-slate-200 border border-white/10 text-xs font-bold py-3.5 rounded-xl transition-all hover:bg-white/20 active:scale-95 uppercase tracking-[1.5px] cursor-pointer"
                                    >
                                        Decline
                                    </button>
                                </div>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="w-full text-slate-400 hover:text-white text-[11px] font-bold py-2 transition-colors cursor-pointer text-center"
                                >
                                    Customize Cookie Preferences
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
