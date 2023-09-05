import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Raman's Blogs",
}

const header = (
  <header className='bg-slate-700 text-center rounded-md p-8 my-6'>
    <h1 className='text-3xl p-6 text-white'>
      <Link href="/">Raman's Blogs</Link>
    </h1>
  </header>
)
const footer = (
  <footer className='border-t py-4 text-center'>
    <a href="https://github.com/RmnSoni" target='_blank'>
      <Image
      className='mx-auto'
        src="/vercel.svg"
        alt="Raman's Blogs"
        width={100}
        height={40}
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
      
      <body className="mx-auto px-6 max-w-3xl" >
        {header}
        <main>
        {children}
        </main>
        {footer}
      </body>
      
    </html>
  )
}
