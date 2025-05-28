import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcliptAI - AI Automation Solutions for Business',
  description: 'EcliptAI helps businesses recover lost revenue through AI automation, including missed calls, email marketing, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
