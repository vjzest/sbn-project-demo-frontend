'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import translations from '@/data/translations.json';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isVisible: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
    t: (key: string) => key,
    isVisible: false,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('user_language') as Language | null;
        
        const checkLocation = async () => {
            if (typeof window === 'undefined') return;
            const hostname = window.location.hostname.toLowerCase();
            
            // Check if on UAE site
            const isUae = hostname.endsWith('.ae') || 
                          hostname.includes('sbnmedicalbillingservices') || 
                          hostname.includes('uae') ||
                          process.env.NEXT_PUBLIC_IS_UAE === 'true';

            if (isUae) {
                setIsVisible(true);
                if (savedLang) {
                    changeLanguage(savedLang);
                }
            } else if (hostname === 'localhost' || hostname === '127.0.0.1') {
                // In local dev, allow toggling for testing
                setIsVisible(true);
                if (savedLang) {
                    changeLanguage(savedLang);
                }
            } else {
                // Production US site: Strictly disable language switcher and force English
                setIsVisible(false);
                setLanguageState('en');
            }
        };

        checkLocation();
    }, []);

    const changeLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('user_language', lang);
            document.documentElement.lang = lang;
            document.documentElement.dir = 'ltr';
        }
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = (translations as any)[language];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // fallback
            }
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isVisible }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
