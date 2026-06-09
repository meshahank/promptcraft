import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Mono, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'PromptCraft — Complete Prompt Engineering Course for Beginners',
  description: 'Complete guide from basic to advanced prompt engineering techniques. Learn to craft powerful AI prompts.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#faf8f4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${syne.variable}`}>
      <body className="bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  )
}
