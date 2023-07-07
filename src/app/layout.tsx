import './globals.css';
import { Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from '@/contexts/themes-context';
import StyledComponentsRegistry from '@/lib/registry'

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata = {
  title: 'preis.tech',
  description: 'A personal developer website',
  icon: '/icon.png'
};

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
