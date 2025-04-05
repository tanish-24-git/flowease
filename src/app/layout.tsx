import type React from "react"
import { Poppins } from "next/font/google"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "FLOWEASE - Your Monthly Flow, Perfected",
  description: "Natural period care drinks for wellness, comfort, and menstrual health.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-b from-green-50 to-pink-50 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

