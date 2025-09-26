import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Service Area | Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff | New Jersey Moving & Storage",
  description:
    "Local movers serving Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff, and all of Bergen County. Licensed & insured. Get a fast, free moving quote today.",
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: "Service Area — Bergen County Movers",
    description:
      "Trusted residential and commercial moving across Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff & Northern New Jersey.",
    url: "/service-area",
    type: "website",
  },
}

type Town = {
  name: string
  slug: string
  blurb: string
}

const towns: Town[] = [
  { name: "Ramsey", slug: "ramsey", blurb: "Home base for our crew. Fast response times, on-time arrivals, and careful protection for homes and apartments in Ramsey, NJ." },
  { name: "Mahwah", slug: "mahwah", blurb: "From condo moves to full homes, we handle Mahwah relocations with clear communication and dependable scheduling." },
  { name: "Ridgewood", slug: "ridgewood", blurb: "Historic homes, narrow streets, and tight entries—our team plans ahead so move-in day stays smooth." },
  { name: "Paramus", slug: "paramus", blurb: "Residential and office moves near Route 17 & 4. Weekend and after-hours options available on request." },
  { name: "Montvale", slug: "montvale", blurb: "North Bergen County moves with careful packing, furniture wrapping, and reliable ETAs." },
  { name: "Wyckoff", slug: "wyckoff", blurb: "Local moves with floor, doorway, and banister protection. Friendly crews and transparent pricing." },
]

function TownCard({ town }: { town: Town }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{town.name}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{town.blurb}</p>
        </div>
        <Link
          href={`/quote?town=${encodeURIComponent(town.name.toLowerCase())}`}
          className="btn btn-primary whitespace-nowrap"
          aria-label={`Get a quote for ${town.name}`}
        >
          Get Quote
        </Link>
      </div>
      <div className="mt-3 text-sm">
        <Link href="/services" className="underline underline-offset-4">See services →</Link>
      </div>
    </div>
  )
}

export default function ServiceAreaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "New Jersey Moving & Storage",
    url: "https://nj-moving-storage.vercel.app/service-area",
    address: {
      "@type": "PostalAddress",
      streetAddress: "70 Hilltop Road, Suite 2450",
      addressLocality: "Ramsey",
      addressRegion: "NJ",
      postalCode: "07446",
      addressCountry: "US",
    },
    areaServed: towns.map((t) => ({
      "@type": "City",
      name: `${t.name}, New Jersey`,
    })),
    sameAs: [
      "https://nj-moving-storage.vercel.app",
      "https://nj-moving-storage.vercel.app/services",
    ],
  }
  const ld = JSON.stringify(jsonLd)

  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Service Area</h1>
          <p className="mt-3 max-w-3xl text-[15px] md:text-base text-[var(--muted)]">
            We proudly serve Ramsey and the surrounding Bergen County communities: Mahwah, Ridgewood, Paramus,
            Montvale, Wyckoff, and Northern New Jersey at large. Licensed & insured movers for homes and offices —
            on time, every time.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full border px-3 py-1">Licensed &amp; Insured</span>
            <span className="inline-flex items-center rounded-full border px-3 py-1">95% On-Time Arrival</span>
            <span className="inline-flex items-center rounded-full border px-3 py-1">Bergen County Focus</span>
            <Link href="/quote" className="btn btn-primary ml-2">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Town grid */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid gap-4 md:grid-cols-2">
          {towns.map((t) => (
            <TownCard key={t.slug} town={t} />
          ))}
        </div>
      </section>

      {/* Nearby & SEO blurb */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl md:text-2xl font-bold">Nearby Areas We Serve</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
            In addition to Bergen County, we frequently help customers across Northern New Jersey. If your town isn’t
            listed, we still may be able to help — just ask and we’ll confirm availability for your dates.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/quote" className="btn btn-primary">Check Availability</Link>
            <Link href="/services" className="btn btn-outline">See Services</Link>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="section bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Moving in Bergen County?</h2>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Tell us where you’re headed and when — get a fast, transparent quote from a local Ramsey team you can trust.
          </p>
          <Link href="/quote" className="btn btn-primary mt-6">Get a Free Quote</Link>
        </div>
      </section>

      {/* JSON-LD for LocalBusiness / areaServed */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
    </main>
  )
}
