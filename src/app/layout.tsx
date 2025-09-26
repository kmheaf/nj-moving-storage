import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Jersey Strong Moves | New Jersey Moving & Storage",
  description: "Professional movers in Ramsey, NJ serving Bergen County and Northern New Jersey. On time. Packed right. Jersey strong.",
  openGraph: {
    title: "New Jersey Moving & Storage",
    description: "Movers in Ramsey & Bergen County, NJ",
    url: "https://example.com",
    siteName: "New Jersey Moving & Storage",
    locale: "en_US",
    type: "website",
  },
}

const orgLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "New Jersey Moving & Storage",
  "image": "/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "70 Hilltop Road Suite 2450",
    "addressLocality": "Ramsey",
    "addressRegion": "NJ",
    "postalCode": "07446",
    "addressCountry": "US"
  },
  "url": "https://example.com",
  "areaServed": ["Ramsey","Bergen County","Northern New Jersey"],
  "priceRange": "$$",
  "telephone": ""
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}