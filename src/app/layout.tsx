import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Raman's Blogs",
}

const header = (
  <header className='bg-slate-700 rounded-md p-8 my-6'>
    <h1 className='text-3xl p-6 text-white'>
      <Link href="/">Raman's Blogs</Link>
    </h1>
  </header>
)
const footer = (
  <footer>
    <a href="https://github.com/RmnSoni" target='_blank'>
      <img
      className='mx-auto'
        src="/vercel.svg"
        alt="Raman's Blogs"
      width="100px"
      />
    </a>
  </footer>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="mx-auto px-6 max-w-2xl items-center text-center" >
        {header}
        {children}
        {footer}
      </body>
      
    </html>
  )
}
