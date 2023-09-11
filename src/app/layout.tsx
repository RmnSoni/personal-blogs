"use client"

import DarkModeToggle from "@/components/DarkModeToggle";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { IoGlobe, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import MouseGradient from "../components/MouseGradient"
import ScrollToTopButton from "@/components/ScrollToTop";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Raman's Blogs",
// };



const header = (
  <header className="relative bg-slate-700 text-center rounded-md p-8 mb-6">
    <h1 className="text-4xl font-bold p-2 text-white">
      <Link href="/">Tech Tales</Link>
    </h1>
    <p className="text-slate-300">  My Learnings and Beyond </p>
    <div className=" absolute top-2 right-2 ">
    <DarkModeToggle /></div>
  </header>
);
const footer = (
  <footer className="border-t mt-6 py-2 text-center">
    <h3>
      Made by Raman Soni
    </h3>
    <p className="text-xl">
      <a
        href="https://github.com/RmnSoni"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-700 dark:hover:text-teal-400"
      >
        <IoLogoGithub className='inline-block mx-2'/>
      </a>
      <a
        href="https://www.ramansoni.in"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-700 dark:hover:text-teal-400"
      >
        <IoGlobe className='inline-block mx-2'/>
      </a>
      <a
        href="https://www.Linkedin.com/in/rmnsoni"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-700 dark:hover:text-teal-400"
      >
        <IoLogoLinkedin className='inline-block mx-2'/>
      </a>
    </p>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-slate-950 dark:text-slate-200">
      <head>
        <title>Tech Tales - ramansoni.in </title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className=" dark:bg-slate-900 dark:text-slate-200 relative">
        <div className='fixed z-1 w-full pointer-events-none h-screen'><MouseGradient/></div>
        <div className="relative z-10 mx-auto p-6 max-w-3xl">
        {header}
        <main>{children}</main>
        {footer}
        </div>
        <div className="fixed z-20 bottom-2 right-2">
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
