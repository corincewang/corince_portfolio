import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Han Wang - Software Engineer & UI Designer',
  description: 'Computer Science student passionate about software engineering, UI design, and digital art.',
  keywords: 'software engineer, UI designer, computer science, portfolio, projects',
  authors: [{ name: 'Han Wang' }],
  openGraph: {
    title: 'Han Wang - Software Engineer & UI Designer',
    description: 'Computer Science student passionate about software engineering, UI design, and digital art.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
