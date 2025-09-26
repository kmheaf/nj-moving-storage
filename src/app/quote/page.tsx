export default function QuotePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Get a Quote</h1>
      <form method="post" action="/api/leads" className="grid gap-4 mt-6">
        <input name="name" placeholder="Full name" className="border p-2 rounded" required />
        <input name="phone" placeholder="Phone" className="border p-2 rounded" required />
        <input name="email" placeholder="Email" className="border p-2 rounded" />
        <input name="origin" placeholder="Origin address/city" className="border p-2 rounded" required />
        <input name="destination" placeholder="Destination address/city" className="border p-2 rounded" required />
        <input name="bedrooms" placeholder="Bedrooms" className="border p-2 rounded" />
        <textarea name="notes" placeholder="Anything special we should know?" className="border p-2 rounded" />
        <button className="bg-black text-white py-2 rounded">Submit</button>
      </form>
    </main>
  )
}
