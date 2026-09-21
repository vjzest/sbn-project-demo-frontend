'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true });
const CookieConsent = dynamic(() => import('@/components/layout/CookieConsent'), { ssr: false });
const Chatbot = dynamic(() => import('@/components/chat/Chatbot'), { ssr: false });
const JsonLd = dynamic(() => import('@/components/seo/JsonLd'), { ssr: true });

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd />
            <Header />
            <main id="main-content" tabIndex={-1} className="focus:outline-none">{children}</main>
            <Footer />
            <CookieConsent />
            <Chatbot />
        </>
    );
}
