'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="bg-pastel-purple p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          FLOWEASE
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-pastel-blue">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-pastel-blue">
            About
          </Link>
          <Link href="/products" className="text-white hover:text-pastel-blue">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}