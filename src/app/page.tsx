export const dynamic = "force-dynamic"

export default function Page(){
  return (
    <>
      <section className="hero">
        <div className="mx-auto max-w-6xl px-6 py-24">
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
    </>
  )
}