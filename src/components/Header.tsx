"use client"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
        <Link href="/" className="flex items-center">
          {/* BIGGER logo; scales down a bit on small screens */}
          <Image
            src="/logo.png"
            alt="New Jersey Moving & Storage"
            width={120}
            height={120}
            priority
            className="h-[64px] w-[64px] md:h-[96px] md:w-[96px] lg:h-[120px] lg:w-[120px]"
          />
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="nav-link hover:bg-gray-100">Home</Link>
          <Link href="/services" className="nav-link hover:bg-gray-100">Services</Link>
          <Link href="/service-area" className="nav-link hover:bg-gray-100">Service Area</Link>
          <Link href="/about" className="nav-link hover:bg-gray-100">About</Link>
          <Link href="/blog" className="nav-link hover:bg-gray-100">Blog</Link>
          <Link
            href="/quote"
            className="btn btn-primary ml-1"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
