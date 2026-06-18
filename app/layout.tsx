import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import '@fontsource/monaspace-neon'
import '@fontsource/monaspace-argon'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wraith Onchain - Automated Vaults for Prediction Market Arbitrage',
  description: 'Automated vaults for prediction market arbitrage with zero-friction execution',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
