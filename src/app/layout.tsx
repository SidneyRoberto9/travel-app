import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import type { Metadata } from "next"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, "antialiased")}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
