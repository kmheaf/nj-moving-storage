export const dynamic = "force-dynamic"
import Image from "next/image"
import Link from "next/link"

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  )
}

function ServiceCard({
  title,
  desc,
  href,
}: {
  title: string
  desc: string
  href: string
}) {
  return (
    <div className="card flex flex-col">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-sm flex-1">{desc}</p>
      <Link href={href} className="btn btn-outline mt-4 self-start" aria-label={`${title} – Get a quote`}>
        Get a Quote →
      </Link>
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* HERO: split layout, logo on right */}
      <section className="hero">
        <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-16 pb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Text block */}
            <div className="basis-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
                Jersey Strong Moves — Local Experts in Ramsey &amp; Bergen County
              </h1>
              <p className="mt-5 text-lg md:text-xl max-w-3xl text-pretty">
                Trusted movers who pack with care, move with speed, and deliver peace of mind — right here in Northern New Jersey.
              </p>
              <div className="mt-8 flex gap-3">
                <Link className="btn btn-primary" href="/quote" aria-label="Get a free moving quote">Get a Free Quote</Link>
                <Link className="btn btn-outline" href="/shop" aria-label="Shop moving supplies">Shop Moving Supplies</Link>
              </div>

              {/* Inline trust ribbon + CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center rounded-full border px-3 py-1">Licensed &amp; Insured</span>
                <span className="inline-flex items-center rounded-full border px-3 py-1">Bergen County Focus</span>
                <span className="inline-flex items-center rounded-full border px-3 py-1">On-Time Guarantee</span>
                <Link href="/quote" className="underline underline-offset-4 ml-2">Book your move →</Link>
              </div>
            </div>

            {/* Logo block */}
            <div className="basis-1/2 flex justify-center md:justify-end">
              <div className="w-full max-w-[560px]">
                <Image
                  src="/logo.png"
                  alt="New Jersey Moving & Storage"
                  width={1120}
                  height={1120}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
          <Card title="Licensed & Insured" desc="Your belongings are protected every step of the way." />
          <Card title="On Time, Every Time" desc="We treat your schedule like our own." />
          <Card title="Locally Trusted" desc="Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff & Bergen County." />
        </div>
      </section>

      {/* SERVICES with per-card CTA */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Residential Moves" desc="Apartments, condos, family homes — careful packing & protection." href="/quote?service=residential" />
            <ServiceCard title="Commercial & Office" desc="Minimal downtime, weekend/after-hours options." href="/quote?service=commercial" />
            <ServiceCard title="Long-Distance" desc="Interstate planning & reliable ETAs." href="/quote?service=long-distance" />
            <ServiceCard title="Packing & Unpacking" desc="Full-service or partial — you choose." href="/quote?service=packing" />
            <ServiceCard title="Specialty Items" desc="Pianos, safes, oversized furniture — handled right." href="/quote?service=specialty" />
          </div>

          {/* Section CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/services" className="underline underline-offset-4">See all services →</Link>
            <Link href="/quote" className="btn btn-primary" aria-label="Start your quote from services section">Start Your Quote</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-[#fafbff]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">How It Works</h2>
        </div>
        <div className="mx-auto max-w-6xl px-6 grid gap-4 md:grid-cols-3 mt-4">
          <div className="card">
            <div className="kpi">1</div>
            <div className="mt-2 font-semibold">Request Your Quote</div>
            <p className="text-sm mt-1">Tell us where you’re moving and what’s coming with you.</p>
          </div>
          <div className="card">
            <div className="kpi">2</div>
            <div className="mt-2 font-semibold">Plan &amp; Protect</div>
            <p className="text-sm mt-1">We build a plan and protect floors, walls, and furniture.</p>
          </div>
          <div className="card">
            <div className="kpi">3</div>
            <div className="mt-2 font-semibold">Move On Time</div>
            <p className="text-sm mt-1">Your crew arrives on schedule and gets you settled fast.</p>
          </div>
        </div>

        {/* Process CTA banner */}
        <div className="mx-auto max-w-6xl px-6 mt-6">
          <div className="rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between bg-white">
            <div>
              <div className="text-lg font-semibold">Ready to plan your move?</div>
              <p className="text-sm text-[var(--muted)]">Pick a date and we’ll take it from there.</p>
            </div>
            <Link href="/quote" className="btn btn-primary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
          <div className="card text-center">
            <div className="kpi">95%</div>
            <div className="mt-1 text-sm text-[var(--muted)]">On-time arrival rate</div>
          </div>
          <div className="card text-center">
            <div className="kpi">4.9★</div>
            <div className="mt-1 text-sm text-[var(--muted)]">Avg. customer rating</div>
          </div>
          <div className="card text-center">
            <div className="kpi">#1</div>
            <div className="mt-1 text-sm text-[var(--muted)]">Focus on Ramsey & Bergen County</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-[#fafbff]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">What Customers Say</h2>
          <div className="grid gap-4 md:grid-cols-3 mt-4">
            <blockquote className="card text-sm">“Crew was punctual and careful with our furniture. Smoothest move we’ve had in NJ.” — A.P., Ramsey</blockquote>
            <blockquote className="card text-sm">“Transparent pricing, no surprises. Will use again for our office move.” — L.R., Paramus</blockquote>
            <blockquote className="card text-sm">“Protected our floors and wrapped everything. Five stars.” — J.S., Mahwah</blockquote>
          </div>

          {/* Testimonials CTA */}
          <div className="mt-6">
            <Link className="btn btn-primary" href="/quote" aria-label="Get a quote after testimonials">Get Your Free Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="mt-4">
            <details className="faq">
              <summary>Are you licensed & insured?</summary>
              <p className="mt-2 text-sm">Yes — fully licensed and insured for residential and commercial moves.</p>
            </details>
            <details className="faq">
              <summary>Do you offer packing?</summary>
              <p className="mt-2 text-sm">Full-service packing, partial packing, and unpacking services are available.</p>
            </details>
            <details className="faq">
              <summary>How early should I book?</summary>
              <p className="mt-2 text-sm">2–4 weeks is ideal, especially for weekends and month-end dates in Bergen County.</p>
            </details>

            {/* FAQ CTA */}
            <div className="mt-6">
              <Link href="/quote" className="btn btn-outline" aria-label="Start your quote from FAQs">Start Your Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="section bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to move the Jersey way?</h2>
          <p className="mt-2 text-sm md:text-base opacity-90">Get a fast, transparent quote from a local Ramsey team you can trust.</p>
          <Link className="btn btn-primary mt-6" href="/quote">Get a Free Quote</Link>
        </div>
      </section>

      {/* Sticky mobile CTA (visible on small screens) */}
      <div className="fixed bottom-4 inset-x-4 md:hidden z-40">
        <Link href="/quote" className="btn btn-primary w-full shadow-lg" aria-label="Get a quote (sticky mobile)">Get a Free Quote</Link>
      </div>
    </>
  )
}
