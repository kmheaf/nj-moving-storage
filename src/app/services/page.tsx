import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Moving Services in Ramsey & Bergen County | New Jersey Moving & Storage",
  description:
    "Residential, commercial, long-distance, packing & unpacking, and specialty item moving services in Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff, and all of Bergen County.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Moving Services in Ramsey & Bergen County",
    description:
      "Trusted, licensed, and insured movers for homes and offices across Northern New Jersey.",
    url: "/services",
    type: "website",
  },
}

function Service({
  title,
  blurb,
  bullets,
  href,
}: {
  title: string
  blurb: string
  bullets: string[]
  href: string
}) {
  return (
    <section className="py-10 border-b last:border-b-0">
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{blurb}</p>

      <ul className="mt-4 grid gap-2 text-[15px]">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-blue)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-3">
        <Link href={href} className="btn btn-primary" aria-label={`Get a quote for ${title}`}>
          Get a Free Quote
        </Link>
        <Link href="/service-area" className="btn btn-outline" aria-label="See our service area">
          See Service Area
        </Link>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Moving Services in Ramsey &amp; Bergen County
          </h1>
          <p className="mt-3 text-[15px] md:text-base text-[var(--muted)] max-w-3xl">
            Whether you’re moving across town or across state lines, our licensed and insured team
            delivers careful packing, on-time arrivals, and a smooth move — anywhere in Northern
            New Jersey.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full border px-3 py-1">
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1">
              95% On-Time Arrival
            </span>
            <span className="inline-flex items-center rounded-full border px-3 py-1">
              Bergen County Focus
            </span>
            <Link href="/quote" className="btn btn-primary ml-2">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* Residential */}
        <Service
          title="Residential Moving Services in Ramsey & Bergen County"
          blurb="From apartments and condos to single-family homes, we protect floors and doorways, wrap your furniture, and keep your timeline on track."
          bullets={[
            "Careful padding, wrapping, and protection for walls and doors",
            "Apartments, townhomes, condos, and family homes",
            "Flexible morning or afternoon arrival windows",
            "Local moves across Ramsey, Mahwah, Ridgewood, Paramus, Montvale & Wyckoff",
          ]}
          href="/quote?service=residential"
        />

        {/* Commercial */}
        <Service
          title="Commercial & Office Moves in Northern New Jersey"
          blurb="Minimize downtime with coordinated office moves. We provide clear labeling, protection for sensitive equipment, and weekend/after-hours options."
          bullets={[
            "Office moves, retail relocations, light industrial",
            "Weekend and after-hours scheduling available",
            "IT areas and sensitive equipment handled with extra care",
            "COIs and building requirements coordinated in advance",
          ]}
          href="/quote?service=commercial"
        />

        {/* Long Distance */}
        <Service
          title="Long-Distance Movers — Tri-State & Interstate"
          blurb="Relocating out of the area? We plan routes, confirm entrances and parking, and give you reliable ETAs so move-in is stress-free."
          bullets={[
            "Interstate planning and predictable timelines",
            "Direct routes and consistent communication",
            "Itemized inventory and labeled boxes",
            "Dedicated crew options upon request",
          ]}
          href="/quote?service=long-distance"
        />

        {/* Packing */}
        <Service
          title="Packing & Unpacking Services"
          blurb="Choose full-service packing, partial packing, or just fragile-only — we use high-quality materials and proven techniques."
          bullets={[
            "Full-service, partial, or fragile-only options",
            "Premium boxes, tape, cushioning, and wardrobe cartons",
            "Efficient room-by-room labeling for easy unpacking",
            "Unpacking and haul-away available on arrival",
          ]}
          href="/quote?service=packing"
        />

        {/* Specialty */}
        <Service
          title="Specialty Item Moving (Pianos, Safes & Oversized)"
          blurb="Heavy, valuable, or awkward items are handled with the right equipment and an experienced team."
          bullets={[
            "Pianos, safes, fitness equipment, billiard tables",
            "Upright and baby grand piano experience",
            "Stair, turn, and tight-entry solutions",
            "Protective crating solutions available",
          ]}
          href="/quote?service=specialty"
        />

        {/* Note: Storage removed per your current offering */}

        {/* Local SEO paragraph */}
        <section className="py-10">
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">
            We proudly serve Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff, and all of
            Bergen County — plus nearby Northern New Jersey communities. Planning a move in the
            area? Start with a fast, transparent quote and a friendly local team that shows up
            on time.
          </p>
        </section>
      </div>

      {/* Bottom CTA banner */}
      <section className="section bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to schedule your move?</h2>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Tell us your dates and services — we’ll take it from there.
          </p>
          <Link href="/quote" className="btn btn-primary mt-6">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
