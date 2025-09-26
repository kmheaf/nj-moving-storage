"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo (acts as Home link) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="New Jersey Moving & Storage"
            width={120}   // Adjust size here
            height={120}  // Adjust size here
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/service-area" className="hover:text-blue-600 transition">Service Area</Link>
          <Link href="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link
            href="/quote"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
