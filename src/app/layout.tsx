
import type { Metadata } from 'next';
import Script from 'next/script';
import { Asap } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/components/providers/ReduxProvider';
import { LanguageProvider } from '@/context/LanguageContext';

const asap = Asap({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-asap',
});

const siteUrl = process.env.NODE_ENV === 'production' || !process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL.includes('localhost')
  ? 'https://www.sbnhealthcaresolution.com'
  : process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SBN Healthcare Solution | Medical Insurance Verification Service in New York',
  description: 'SBN offers professional medical insurance verification and billing services in New York. Reduce claim denials, improve cash flow, and ensure HIPAA-compliant accuracy.',
  icons: {
    icon: '/Logo.webp',
  },
  verification: {
    google: 'koWn4TcdBUJq__U9GvO8JbLXvDDlBDBL2iF0ZJsTp58',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={asap.variable}>
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Check existing cookie consent
            var hasConsent = document.cookie.indexOf('sbn_cookie_consent=accepted') !== -1;
            gtag('consent', 'default', {
              'analytics_storage': hasConsent ? 'granted' : 'denied',
              'ad_storage': 'denied',
              'personalization_storage': 'denied'
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QR6MRMK47G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QR6MRMK47G');
          `}
        </Script>
        <ReduxProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
