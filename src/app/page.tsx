export const dynamic = "force-dynamic"

export default function Page(){
  return (
    <>
      <section className="hero">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Jersey Strong Moves — Local Experts in Ramsey &amp; Bergen County</h1>
          <p className="mt-5 text-lg md:text-xl max-w-3xl">
            Trusted movers who pack with care, move with speed, and deliver peace of mind — right here in Northern New Jersey.
          </p>
          <div className="mt-8 flex gap-3">
            <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
            <a className="btn btn-outline" href="/shop">Shop Moving Supplies</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-3">
        <div className="border rounded-2xl p-6">
          <div className="text-[var(--brand-blue)] font-semibold">Licensed &amp; Insured</div>
          <p className="mt-2 text-sm">Your belongings are protected every step of the way.</p>
        </div>
        <div className="border rounded-2xl p-6">
          <div className="text-[var(--brand-blue)] font-semibold">On Time, Every Time</div>
          <p className="mt-2 text-sm">We treat your schedule like our own.</p>
        </div>
        <div className="border rounded-2xl p-6">
          <div className="text-[var(--brand-blue)] font-semibold">Locally Trusted</div>
          <p className="mt-2 text-sm">Serving Ramsey, Mahwah, Ridgewood, Paramus, and all of Bergen County.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <li className="border rounded-xl p-5">Residential Moves</li>
          <li className="border rounded-xl p-5">Commercial &amp; Office Relocations</li>
          <li className="border rounded-xl p-5">Long-Distance Moves</li>
          <li className="border rounded-xl p-5">Packing &amp; Unpacking</li>
          <li className="border rounded-xl p-5">Storage Solutions</li>
        </ul>
        <a className="inline-block mt-6 underline" href="/services">See all services →</a>
      </section>
    </>
  )
}