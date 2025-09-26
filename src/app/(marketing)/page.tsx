export const dynamic = 'force-dynamic'\r\nexport default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">New Jersey Moving & Storage</h1>
      <p className="mt-4 text-lg">On time. Packed right. Jersey strong.</p>
      <div className="mt-6 flex gap-4">
        <a href="/quote" className="inline-block rounded-xl px-6 py-3 border">Get a fast quote</a>
        <a href="/shop" className="inline-block rounded-xl px-6 py-3 border">Shop supplies</a>
      </div>
    </main>
  )
}

