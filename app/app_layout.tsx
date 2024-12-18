import './globals.css'
import { inter, orbitron, pressStart2P, russoOne, bangers } from './fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlyingShibaConeCheddar Token 🐕✨',
  description: 'Welcome to the FlyingShibaConeCheddar Token website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${pressStart2P.variable} ${russoOne.variable} ${bangers.variable}`}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        {children}
      </body>
    </html>
  )
}

