import type { Metadata } from "next";

import { Rubik } from 'next/font/google'
import { Taviraj } from 'next/font/google'

import './globals.css';

const taviraj = Taviraj({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-taviraj'
})

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik'
})
const metadata: Metadata = {
  title: "Dude Crate",
  description: "Discover the ultimate curation of premium groomsman tools and accessories tailored for the modern man. Elevate your groomsman duties with Dude Crate.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${taviraj.variable} ${rubik.variable}`}>
      <body>{children}</body>
    </html>
  )
}
