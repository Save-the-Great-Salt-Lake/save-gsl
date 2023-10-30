import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './assets/css/main.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Save the Great Salt Lake',
  description: 'Learn how you can help save the Great Salt Lake',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
