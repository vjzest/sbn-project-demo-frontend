'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage, isVisible } = useLanguage();

    if (!isVisible) return null;

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            type="button"
            className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl border border-blue-200/80 bg-white hover:bg-blue-50 text-[#0033e7] shadow-sm transition-all duration-300 text-xs font-black uppercase tracking-wider cursor-pointer active:scale-95"
            aria-label="Toggle language between English and Arabic"
            title="Switch Language (English / العربية)"
        >
            <span className="text-sm leading-none">🇦🇪</span>
            <span className={`transition-opacity ${language === 'en' ? 'opacity-100 font-extrabold text-[#0033e7]' : 'opacity-40 text-slate-500'}`}>
                EN
            </span>
            <span className="w-px h-3 bg-slate-200"></span>
            <span className={`transition-opacity text-sm font-bold ${language === 'ar' ? 'opacity-100 font-extrabold text-[#0033e7]' : 'opacity-40 text-slate-500'}`}>
                العربية
            </span>
        </button>
    );
};

export default LanguageSwitcher;
