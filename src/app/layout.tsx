import Header from '@/components/Header/header';
import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata = {
  title: 'preis.tech',
  description: 'A personal developer website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
