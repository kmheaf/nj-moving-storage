$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$header = @'
"use client"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="New Jersey Moving & Storage" 
            width={120} 
            height={120} 
            priority 
          />
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/service-area" className="hover:underline">Service Area</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link 
            href="/quote" 
            className="rounded-md bg-indigo-900 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
'@
[System.IO.File]::WriteAllText("src\components\Header.tsx", $header, $utf8NoBom)
