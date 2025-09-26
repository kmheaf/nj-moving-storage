import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nj-moving-storage.vercel.app"
  const now = new Date()
  const pages = [
    "", "/about", "/services", "/service-area", "/quote",
    "/blog", "/blog/stress-free-move-bergen-county",
    "/blog/choose-moving-company-ramsey"
  ]
  return pages.map((p) => ({
    url: base + (p || "/"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }))
}