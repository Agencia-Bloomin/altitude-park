import type { Metadata } from 'next';

import './globals.css';
import { Header, Footer, FloatingWhatsApp, ScrollToTop } from '@/components';
import { siteMetadata } from '@/data/metadata';
import { siteConfig, getGoogleFontsLinks } from '@/data/config';
import GoogleTagManager from '@/components/GoogleTagManager';
import { Toaster } from 'sonner';
import { GSAPProvider } from '@/components/GSAPProvider';

export const metadata: Metadata = {
  title: {
    default: siteMetadata.defaultTitle,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.defaultDescription,
  keywords: siteMetadata.defaultKeywords.join(', '),
  authors: [{ name: siteMetadata.siteName }],
  creator: siteMetadata.siteName,
  publisher: siteMetadata.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteMetadata.siteUrl,
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: siteMetadata.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    images: [siteMetadata.defaultOgImage],
    creator: siteMetadata.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ea258e" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {getGoogleFontsLinks().map((fontLink, index) => (
          <link key={index} href={fontLink} rel="stylesheet" />
        ))}
        
        {/* Google Tag Manager será carregado após interação do usuário */}
      </head>
      <body className="antialiased bg-gray-900 text-white font-secondary">
        <GSAPProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <ScrollToTop />
          </div>
          <Toaster position="top-right" richColors />
          {/* <GoogleTagManager /> */}
        </GSAPProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Sincronização automática de fontes
              (function() {
                const root = document.documentElement;
                root.style.setProperty('--font-primary', '${siteConfig.theme.fonts.primary}');
                root.style.setProperty('--font-secondary', '${siteConfig.theme.fonts.secondary}');
              })();
            `,
          }}
        />
      </body>
    </html>
  );
} 