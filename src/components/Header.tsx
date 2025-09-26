"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

type NavItem = { label: string; href: string }
const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [open])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
        {/* Logo (home link) */}
        <Link href="/" aria-label="New Jersey Moving & Storage — Home" className="flex items-center">
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
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link hover:bg-gray-100">
              {n.label}
            </Link>
          ))}
          <Link href="/quote" className="btn btn-primary ml-1">
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t bg-white transition-[max-height] duration-300 ${open ? "max-h-[80vh]" : "max-h-0"}`}
      >
        <div className="px-6 py-4 space-y-2">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block rounded-lg px-3 py-2 text-base hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="btn btn-primary mt-2 inline-flex w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
