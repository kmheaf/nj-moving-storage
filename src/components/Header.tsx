"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo.png"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="New Jersey Moving & Storage Logo"
            width={80}  // larger logo
            height={80}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-[var(--primary)]">Home</Link>
          <Link href="/services" className="hover:text-[var(--primary)]">Services</Link>
          <Link href="/service-area" className="hover:text-[var(--primary)]">Service Area</Link>
          <Link href="/shop" className="hover:text-[var(--primary)]">Shop</Link>
          <Link href="/about" className="hover:text-[var(--primary)]">About</Link>
          <Link href="/blog" className="hover:text-[var(--primary)]">Blog</Link>
        </nav>

        {/* CTA */}
        <div>
          <Link
            href="/quote"
            className="btn btn-primary"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
