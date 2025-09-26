"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header(){
  const pathname = usePathname()
  const link = (href:string, label:string) => (
    <Link href={href} className={`nav-link ${pathname===href ? "active" : "hover:bg-gray-100"}`}>{label}</Link>
  )
  return (
    <header className="navbar sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 flex items-center gap-4 h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="New Jersey Moving & Storage" width={56} height={56} priority />
          <span className="font-semibold text-lg">New Jersey Moving &amp; Storage</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2">
          {link("/", "Home")}
          {link("/services", "Services")}
          {link("/service-area", "Service Area")}
          {link("/about", "About")}
          {link("/blog", "Blog")}
          <Link href="/quote" className="btn btn-primary ml-2">Get a Free Quote</Link>
        </nav>
      </div>
    </header>
  )
}