"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header(){
  const pathname = usePathname()
  const link = (href:string, label:string) => (
    <Link href={href} className={`px-3 py-2 rounded-lg ${pathname===href ? "bg-[var(--brand-blue)] text-white" : "hover:bg-gray-100"}`}>{label}</Link>
  )
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-6xl px-6 flex items-center gap-4 h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="New Jersey Moving & Storage" width={36} height={36} />
          <span className="font-semibold">New Jersey Moving & Storage</span>
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