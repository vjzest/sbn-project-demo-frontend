import axios from 'axios';
import { Metadata } from 'next';

const PROD_BASE_URL = 'https://www.sbnhealthcaresolution.com';

export const getSiteUrl = (): string => {
    if (process.env.NODE_ENV === 'production') {
        return PROD_BASE_URL;
    }
    const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
        return envUrl.replace(/\/$/, '');
    }
    return PROD_BASE_URL;
};

export const cleanUrl = (url: string | undefined | null, fallbackPath: string = ''): string => {
    const baseUrl = getSiteUrl();
    if (!url || typeof url !== 'string' || !url.trim()) {
        const cleanFallback = fallbackPath.replace(/^\/+/, '').replace(/\/+$/, '');
        return cleanFallback ? `${baseUrl}/${cleanFallback}` : `${baseUrl}/`;
    }

    let cleaned = url.trim();

    // Strip any localhost, loopback, or preview domain leakage
    cleaned = cleaned.replace(/^https?:\/\/localhost(:\d+)?/i, '');
    cleaned = cleaned.replace(/^https?:\/\/127\.0\.0\.1(:\d+)?/i, '');
    cleaned = cleaned.replace(/^https?:\/\/[a-zA-Z0-9-]+\.vercel\.app/i, '');
    cleaned = cleaned.replace(/^\/?https?:\/\/[^/]+/i, '');

    // Normalize leading and trailing slashes
    cleaned = cleaned.replace(/^\/+/, '').replace(/\/+$/, '');

    return cleaned ? `${baseUrl}/${cleaned}` : `${baseUrl}/`;
};

export const getDynamicMetadata = async (pageId: string) => {
    try {
        const apiBase = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
        if (!apiBase) return null;

        const response = await fetch(`${apiBase}/seo/${pageId}`, {
            cache: 'no-store'
        });
        if (!response.ok) return null;

        const data = await response.json();
        if (data?.success && data?.data) {
            return data.data;
        }
        return null;
    } catch {
        return null;
    }
};

export const constructMetadata = (data: any, fallback: any = {}): Metadata => {
    const siteUrl = getSiteUrl();

    // Image resolution: sanitize and enforce absolute URL
    let image = data?.ogImage?.trim() || fallback?.image || '/Logo.webp';
    if (image.startsWith('/')) {
        image = `${siteUrl}${image}`;
    } else if (/^https?:\/\/localhost/i.test(image)) {
        image = `${siteUrl}/Logo.webp`;
    }

    // CMS precedence: populated CMS fields always override defaults; defaults only fill empty fields
    const title = (data?.title && data.title.trim()) ? data.title.trim() : (fallback?.title || 'SBN Healthcare Solution');
    const description = (data?.description && data.description.trim()) ? data.description.trim() : (fallback?.description || 'Expert in Healthcare Billing Services');
    const keywords = data?.keywords || data?.primaryKeyword || fallback?.keywords || 'medical billing, rcm, healthcare';

    // Canonical resolution: guaranteed clean absolute URL without localhost concatenation
    const targetSlug = data?.canonicalUrl || data?.slug || fallback?.slug || '';
    const canonical = cleanUrl(targetSlug, fallback?.slug || '');

    return {
        metadataBase: new URL(siteUrl),
        title,
        description,
        keywords: Array.isArray(keywords) ? keywords : keywords.split(',').map((k: string) => k.trim()),
        alternates: {
            canonical,
        },
        robots: data?.robots || 'index, follow',
        authors: [{ name: 'SBN Healthcare Solution' }],
        publisher: 'SBN Healthcare Solution',
        openGraph: {
            title: (data?.ogTitle && data.ogTitle.trim()) ? data.ogTitle.trim() : title,
            description: (data?.ogDescription && data.ogDescription.trim()) ? data.ogDescription.trim() : description,
            url: canonical,
            siteName: 'SBN Healthcare Solution',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: data?.twitterCard || 'summary_large_image',
            title: (data?.ogTitle && data.ogTitle.trim()) ? data.ogTitle.trim() : title,
            description: (data?.ogDescription && data.ogDescription.trim()) ? data.ogDescription.trim() : description,
            images: [image],
        },
    };
};
