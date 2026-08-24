import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Cursor from '@/components/primitives/Cursor';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://omm.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'OMM — Organização · Método · Movimento',
    template: '%s · OMM',
  },
  description:
    'Miguel Macedo ajuda empresas a serem percebidas do jeito certo. Direção de comunicação e posicionamento — o vídeo é uma das ferramentas, nunca o ponto de partida.',
  keywords: [
    'Miguel Macedo',
    'comunicação estratégica',
    'posicionamento de marca',
    'direção de comunicação',
    'audiovisual estratégico',
    'Bauru',
    'Piratininga',
    'OMM',
  ],
  authors: [{ name: 'Miguel Macedo' }],
  creator: 'Miguel Macedo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'OMM',
    title: 'OMM — Organização · Método · Movimento',
    description:
      'Miguel Macedo ajuda empresas a serem percebidas do jeito certo. A direção vem antes da câmera.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMM — Organização · Método · Movimento',
    description:
      'Miguel Macedo ajuda empresas a serem percebidas do jeito certo. A direção vem antes da câmera.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
};

/** Marca pessoal: a Person é o ativo, a Organization é a marca dela. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#miguel`,
      name: 'Miguel Macedo',
      jobTitle: 'Direção de comunicação e posicionamento',
      description:
        'Ajuda empresas a serem percebidas do jeito certo. Fundador do método OMM.',
      worksFor: { '@id': `${SITE_URL}/#omm` },
      sameAs: ['https://instagram.com/omacedomiguel'],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#omm`,
      name: 'OMM',
      alternateName: 'Organização · Método · Movimento',
      description:
        'Direção de comunicação e posicionamento. O audiovisual é uma das ferramentas.',
      founder: { '@id': `${SITE_URL}/#miguel` },
      areaServed: ['Piratininga', 'Bauru', 'Brasil'],
      sameAs: ['https://instagram.com/omacedomiguel'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Satoshi (display) via Fontshare — Inter (texto) via next/font */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&display=swap"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Cursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        {/* Métrica de audiência da Vercel — sem cookie, sem dado pessoal */}
        <Analytics />
      </body>
    </html>
  );
}
