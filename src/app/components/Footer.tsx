"use client"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-purple-800 mb-4">FLOWEASE</h3>
            <p className="text-gray-600 mb-4">
              Revolutionizing period care with natural, effective drinks designed for your comfort and wellness.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/flowease"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-pink-500 hover:text-pink-600"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:hello@flowease.com"
                whileHover={{ y: -3 }}
                className="text-pink-500 hover:text-pink-600"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a href="tel:+1234567890" whileHover={{ y: -3 }} className="text-pink-500 hover:text-pink-600">
                <Phone size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-purple-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-purple-800 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-pink-500" />
                <a href="mailto:hello@flowease.com" className="hover:text-pink-500 transition-colors">
                  hello@flowease.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-pink-500" />
                <a href="tel:+1234567890" className="hover:text-pink-500 transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="mr-2 text-pink-500" />
                <a
                  href="https://instagram.com/flowease"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  @flowease
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-200 pt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-pink-500" fill="currentColor" /> for your comfort
          </p>
          <p className="text-sm text-gray-500 mt-2">&copy; {new Date().getFullYear()} FLOWEASE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

