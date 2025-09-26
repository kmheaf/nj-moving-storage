export function Footer(){
  return (
    <footer className="footer">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-lg">New Jersey Moving &amp; Storage</h4>
          <p className="mt-2 text-sm">On time. Packed right. Jersey strong.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Address</h4>
          <p className="mt-2 text-sm">70 Hilltop Road, Suite 2450<br/>Ramsey, NJ 07446</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Service Area</h4>
          <p className="mt-2 text-sm">Ramsey • Mahwah • Ridgewood • Paramus • Montvale • Wyckoff • Bergen County &amp; beyond</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} New Jersey Moving &amp; Storage. All rights reserved.
      </div>
    </footer>
  )
}