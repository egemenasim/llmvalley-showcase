import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'LLM Valley — AI-Powered Life Simulation',
  description: 'A cozy village simulation where NPCs speak through real-time AI. Senior graduation project exploring dynamic NPC dialogue powered by Large Language Models.',
  keywords: ['LLM Valley', 'AI game', 'Unity', 'NPC dialogue', 'OpenRouter', 'life simulation', 'senior project'],
  openGraph: {
    title: 'LLM Valley — AI-Powered Life Simulation',
    description: 'A cozy village simulation where NPCs speak through real-time AI.',
    type: 'website',
    siteName: 'LLM Valley',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLM Valley — AI-Powered Life Simulation',
    description: 'A cozy village simulation where NPCs speak through real-time AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
