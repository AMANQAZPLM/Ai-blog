import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from "app/(shared)/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog AI app',
  description: 'Blog built using NextJs that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar></Navbar>{children}</body>
    </html>
  )
}
