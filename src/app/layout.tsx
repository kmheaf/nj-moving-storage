export const metadata = {
  title: "New Jersey Moving & Storage",
  description: "On time. Packed right. Jersey strong."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}