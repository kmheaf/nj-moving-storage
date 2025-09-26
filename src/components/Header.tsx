"use client"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
        {/* Logo (from /public) */}
        <Link href="/" className="flex items-center" aria-label="New Jersey Moving & Storage home">
          <Image
            src="/logo.png"
            alt="New Jersey Moving & Storage"
            width={120}
            height={120}
            priority
            className="h-[64px] w-[64px] md:h-[96px] md:w-[96px] lg:h-[120px] lg:w-[120px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 md:gap-6">
          <Link href="/" className="nav-link hover:bg-gray-100">Home</Link>
          <Link href="/services" className="nav-link hover:bg-gray-100">Services</Link>
          <Link href="/service-area" className="nav-link hover:bg-gray-100">Service Area</Link>
          <Link href="/shop" className="nav-link hover:bg-gray-100">Shop</Link>
          <Link href="/about" className="nav-link hover:bg-gray-100">About</Link>
          <Link href="/blog" className="nav-link hover:bg-gray-100">Blog</Link>
          <Link href="/quote" className="btn btn-primary ml-1">Get a Free Quote</Link>
        </nav>

        {/* Mobile CTA only (optional) */}
        <Link href="/quote" className="md:hidden btn btn-primary">Quote</Link>
      </div>
    </header>
  )
}
