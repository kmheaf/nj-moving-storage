export const metadata = {
  title: "Movers in Ramsey, NJ & Bergen County | Service Area",
  description: "Local movers serving Ramsey, Mahwah, Ridgewood, Paramus, Montvale, Wyckoff, and all of Bergen County."
}
export default function ServiceAreaPage(){
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Service Area</h1>
      <p className="mt-4 max-w-3xl">
        We proudly serve Ramsey and the surrounding Bergen County communities: Mahwah, Ridgewood, Paramus, Montvale, Wyckoff, and Northern New Jersey at large.
      </p>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        <li className="border rounded-xl p-4">Ramsey</li>
        <li className="border rounded-xl p-4">Mahwah</li>
        <li className="border rounded-xl p-4">Ridgewood</li>
        <li className="border rounded-xl p-4">Paramus</li>
        <li className="border rounded-xl p-4">Montvale</li>
        <li className="border rounded-xl p-4">Wyckoff</li>
      </ul>
      <a className="inline-block mt-8 underline" href="/quote">Get a quote for your town →</a>
    </main>
  )
}