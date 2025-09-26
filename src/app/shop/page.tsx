import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shop Moving Supplies | New Jersey Moving & Storage",
  description:
    "Order moving boxes, tape, packing paper, bubble wrap, and wardrobe cartons. Supplies typically arrive in about 1 week. Need them sooner? Contact us.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop Moving Supplies",
    description:
      "Boxes, tape, packing paper, bubble wrap, wardrobe cartons. Orders usually arrive in ~1 week. Need supplies sooner? Contact us.",
    url: "/shop",
    type: "website",
  },
}

type Item = { name: string; desc: string; price: string }
const items: Item[] = [
  { name: "Small Boxes (1.5 cu ft)", desc: "Books, canned goods, small/heavy items.", price: "$1.50" },
  { name: "Medium Boxes (3.0 cu ft)", desc: "Kitchenware, toys, decor.", price: "$2.25" },
  { name: "Large Boxes (4.5 cu ft)", desc: "Linens, pillows, light bulky items.", price: "$3.00" },
  { name: "Wardrobe Carton", desc: "Hang clothes directly; includes bar.", price: "$14.00" },
  { name: "Packing Paper (25 lb)", desc: "Ink-free paper to wrap fragile items.", price: "$29.00" },
  { name: "Bubble Wrap (150 ft)", desc: "Extra protection for delicate items.", price: "$32.00" },
  { name: "Heavy-Duty Tape (6-pack)", desc: "Strong, clear packing tape.", price: "$12.00" },
]

export default function ShopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Shop Moving Supplies</h1>
          <p className="mt-3 max-w-3xl text-[15px] md:text-base text-[var(--muted)]">
            Order boxes, packing materials, and wardrobe cartons delivered to your door.
          </p>

          {/* Notice */}
          <div className="mt-5 rounded-xl border p-4 bg-[#fff]">
            <p className="text-sm">
              <strong>Heads up:</strong> Supplies typically arrive in about <strong>1 week</strong>.{" "}
              <span className="inline">Need them sooner? </span>
              <Link href="/quote?reason=supplies" className="underline underline-offset-4">
                Please contact us
              </Link>
              .
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <Link href="/quote" className="btn btn-primary">Get a Free Moving Quote</Link>
            <Link href="/services" className="btn btn-outline">See Our Services</Link>
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.name} className="card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold">{it.name}</h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">{it.desc}</p>
                </div>
                <div className="text-sm font-semibold">{it.price}</div>
              </div>
              {/* Placeholder "headless" slot for later Shopify integration */}
              <button className="btn btn-outline mt-4 w-fit" disabled aria-disabled="true" title="Coming soon">
                Add to Cart (coming soon)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Need supplies sooner?</h2>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Tell us what you need and your timeline — we’ll see how we can help.
          </p>
          <Link href="/quote?reason=supplies" className="btn btn-primary mt-6">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
