import './globals.css';
import { Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from '@/contexts/themes-context';
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL || 'https://preis.tech'),
  title: {
    default: 'Pedro Reis · Portfólio',
    template: '%s — Pedro · Portfólio'
  },
  description: 'Portfólio e site pessoal.',
  icons: {
    icon: './icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Reis · Portfólio',
    description: 'Site pessoal de Pedro Reis.',
  }

};

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

interface RootLayoutProps {
  children: React.ReactNode;
};

function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            {children}
            <Analytics />
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
