export const dynamic = "force-dynamic"
import Image from "next/image"

export default function Page(){
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/logo.png" alt="NJ Moving & Storage" width={72} height={72} priority />
            <span className="sr-only">New Jersey Moving &amp; Storage</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Jersey Strong Moves — Local Experts in Ramsey &amp; Bergen County
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-3xl">
            Trusted movers who pack with care, move with speed, and deliver peace of mind — right here in Northern New Jersey.
          </p>
          <div className="mt-8 flex gap-3">
            <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
            <a className="btn btn-outline" href="/shop">Shop Moving Supplies</a>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="text-[var(--brand-blue)] font-semibold">Licensed &amp; Insured</div>
            <p className="mt-2 text-sm">Your belongings are protected every step of the way.</p>
          </div>
          <div className="card">
            <div className="text-[var(--brand-blue)] font-semibold">On Time, Every Time</div>
            <p className="mt-2 text-sm">We treat your schedule like our own.</p>
          </div>
          <div className="card">
            <div className="text-[var(--brand-blue)] font-semibold">Locally Trusted</div>
            <p className="mt-2 text-sm">Serving Ramsey, Mahwah, Ridgewood, Paramus, and all of Bergen County.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="card">Residential Moves</li>
            <li className="card">Commercial &amp; Office Relocations</li>
            <li className="card">Long-Distance Moves</li>
            <li className="card">Packing &amp; Unpacking</li>
            <li className="card">Storage Solutions</li>
            <li className="card">Specialty Items (Pianos, Safes)</li>
          </ul>
          <a className="inline-block mt-6 underline" href="/services">See all services →</a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-[#fafbff]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <div className="grid gap-4 md:grid-cols-3 mt-4">
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
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
          <div className="card text-center"><div className="kpi">95%</div><div className="mt-1 text-sm text-[var(--muted)]">On-time arrival rate</div></div>
          <div className="card text-center"><div className="kpi">4.9★</div><div className="mt-1 text-sm text-[var(--muted)]">Avg. customer rating</div></div>
          <div className="card text-center"><div className="kpi">#1</div><div className="mt-1 text-sm text-[var(--muted)]">Ramsey &amp; Bergen County focus</div></div>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="card">
              <div className="font-semibold">Are you licensed &amp; insured?</div>
              <p className="text-sm mt-1">Yes — fully licensed and insured for residential and commercial moves.</p>
            </div>
            <div className="card">
              <div className="font-semibold">Do you offer packing?</div>
              <p className="text-sm mt-1">Full-service packing, partial packing, and unpacking services are available.</p>
            </div>
            <div className="card">
              <div className="font-semibold">How early should I book?</div>
              <p className="text-sm mt-1">2–4 weeks is ideal, especially for weekends and month-end dates in Bergen County.</p>
            </div>
            <div className="card">
              <div className="font-semibold">Do you provide storage?</div>
              <p className="text-sm mt-1">Yes — short and long-term storage options available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to move the Jersey way?</h2>
          <p className="mt-2 text-sm md:text-base opacity-90">Get a fast, transparent quote from a local Ramsey team you can trust.</p>
          <a className="btn btn-primary mt-6" href="/quote">Get a Free Quote</a>
        </div>
      </section>
    </>
  )
}