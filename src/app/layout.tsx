import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raman's Blogs",
};

const header = (
  <header className="bg-slate-700 text-center rounded-md p-8 my-6">
    <h1 className="text-4xl font-bold p-2 text-white">
      <Link href="/">Raman&apos;s Blogs</Link>
    </h1>
    <p className="text-slate-300">Welcome to my blog</p>
  </header>
);
const footer = (
  <footer className="border-t my-6 py-2 text-center">
    <h3>
      Made by{" "}
      <a
        className="hover:text-slate-500"
        href="https://github.com/RmnSoni"
        rel="noreffer"
        target="_blank"
      >
        Raman Soni
      </a>
    </h3>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto p-6 max-w-3xl bg-slate-100 ">
        {header}
        <main>{children}</main>
        {footer}
      </body>
    </html>
  );
}
