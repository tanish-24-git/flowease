import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">FLOWEASE</h3>
            <p className="text-gray-600">
              Your monthly flow, perfected. Natural period care drinks for wellness and comfort.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold text-purple-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-purple-700 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={20} className="text-pink-500 mr-2" />
                <a
                  href="mailto:Flowease25@gmail.com"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Flowease25@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-pink-500 mr-2" />
                <a
                  href="tel:+919529443859"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  +91 95294 43859
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={20} className="text-pink-500 mr-2" />
                <a
                  href="https://www.instagram.com/flowease._?igsh=MTl6cHc1dmd3NzRhbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  @flowease._
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} FLOWEASE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}