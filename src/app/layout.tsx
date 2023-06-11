import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({

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
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
