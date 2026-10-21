import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { brand, seo } from '@/content/site';

/** Uma fonte só, em todo o site. Servida pelo próprio domínio (next/font). */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://www.ommprod.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: '%s · OMM.PRD',
  },
  description: seo.description,
  keywords: [
    'produtora de vídeos para empresas',
    'vídeos para empresas',
    'vídeo institucional',
    'Miguel Macedo',
    'OMM.PRD',
    'Bauru',
  ],
  authors: [{ name: 'Miguel Macedo' }],
  creator: 'Miguel Macedo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'OMM.PRD',
    title: seo.title,
    description: seo.description,
    images: [{ url: '/trabalhos/yakiniku.jpg', width: 720, height: 1280 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/trabalhos/yakiniku.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0d0c0b',
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#miguel`,
      name: 'Miguel Macedo',
      jobTitle: 'Diretor e editor de vídeos para empresas',
      worksFor: { '@id': `${SITE_URL}/#omm-prd` },
      sameAs: [brand.instagramUrl],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#omm-prd`,
      name: 'OMM.PRD',
      url: SITE_URL,
      description: seo.description,
      founder: { '@id': `${SITE_URL}/#miguel` },
      areaServed: 'BR',
      sameAs: [brand.instagramUrl],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Métrica de audiência da Vercel — sem cookie, sem dado pessoal */}
        <Analytics />
      </body>
    </html>
  );
}
