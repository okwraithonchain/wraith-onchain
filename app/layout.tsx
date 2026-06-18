import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import '@fontsource/monaspace-neon'
import '@fontsource/monaspace-argon'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wraith Onchain - Automated Vaults for Prediction Market Arbitrage',
  description: 'Automated vaults for prediction market arbitrage with zero-friction execution. Deposit USDC, earn yield through intelligent arbitrage opportunities.',
  generator: 'v0.app',
  keywords: 'prediction markets, arbitrage, DeFi, vaults, cryptocurrency, automated trading',
  authors: [{ name: 'Wraith Onchain' }],
  creator: 'Wraith Onchain',
  manifest: '/manifest.json',
  
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wraith-onchain-website.vercel.app/',
    siteName: 'Wraith Onchain',
    title: 'Wraith Onchain - Automated Vaults for Prediction Market Arbitrage',
    description: 'Deposit USDC into automated vaults and earn yield through intelligent prediction market arbitrage. Zero-friction execution, 24/7 monitoring.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wraith Onchain - Automated Prediction Market Arbitrage',
        type: 'image/png',
      },
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Wraith Onchain Logo',
        type: 'image/png',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@okwraithonchain',
    creator: '@okwraithonchain',
    title: 'Wraith Onchain - Automated Vaults for Prediction Market Arbitrage',
    description: 'Deposit USDC into automated vaults and earn yield through intelligent prediction market arbitrage.',
    images: ['/og-image.png'],
  },
  
  robots: 'index, follow',
  category: 'Finance',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-mono antialiased bg-background text-foreground" style={{ fontFamily: '"Monaspace Neon", "Monaspace Argon", monospace', backgroundColor: '#0a0a0a', color: '#f5f5f5' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
