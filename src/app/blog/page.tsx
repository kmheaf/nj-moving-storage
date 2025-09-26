export const metadata = {
  title: "Moving Tips Blog | New Jersey Moving & Storage",
  description: "Expert moving tips for Ramsey, Bergen County, and Northern New Jersey."
}
export default function BlogIndex(){
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Moving Tips &amp; Guides</h1>
      <ul className="mt-6 space-y-4">
        <li className="border rounded-xl p-5">
          <a className="font-semibold underline" href="/blog/stress-free-move-bergen-county">
            Top 10 Tips for a Stress-Free Move in Bergen County
          </a>
          <p className="text-sm mt-2">The checklist Ramsey families use to save time and reduce stress on moving day.</p>
        </li>
        <li className="border rounded-xl p-5">
          <a className="font-semibold underline" href="/blog/choose-moving-company-ramsey">
            How to Choose the Right Moving Company in Ramsey, NJ
          </a>
          <p className="text-sm mt-2">What to look for when hiring movers in Northern New Jersey.</p>
        </li>
      </ul>
    </main>
  )
}