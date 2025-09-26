export const metadata = {
  title: "Moving Services | New Jersey Moving & Storage",
  description: "Residential, commercial, long-distance moving, packing, and storage in Ramsey & Bergen County, NJ."
}
export default function ServicesPage(){
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Moving Services</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold">Residential Moves</h2>
          <p className="mt-2 text-sm">Apartments, condos, and family homes with careful packing and furniture protection.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Commercial &amp; Office</h2>
          <p className="mt-2 text-sm">Minimize downtime with efficient office moves across Bergen County.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Long-Distance</h2>
          <p className="mt-2 text-sm">Seamless planning and tracking for interstate relocations.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Packing &amp; Unpacking</h2>
          <p className="mt-2 text-sm">Professional materials and techniques so your items arrive safe.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Storage Solutions</h2>
          <p className="mt-2 text-sm">Short-term or long-term storage options to match your timeline.</p>
        </section>
      </div>
      <a className="inline-block mt-8 btn btn-primary" href="/quote">Get a Free Quote</a>
    </main>
  )
}