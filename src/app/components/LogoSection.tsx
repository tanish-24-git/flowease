"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LogoSection() {
  return (
    <div className="py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-pink-200 opacity-50 floating" />
        <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-purple-200 opacity-50 floating floating-delay-1" />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-pink-100 opacity-40 floating floating-delay-2" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Image src="/logo.png" alt="FLOWEASE Logo" width={180} height={180} className="mx-auto drop-shadow-md" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          FLOWEASE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl font-medium text-gray-700 mb-8"
        >
          Your Monthly Flow, Perfected
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="/products" className="btn-primary inline-block">
            Discover Our Products
          </a>
        </motion.div>
      </div>
    </div>
  )
}

