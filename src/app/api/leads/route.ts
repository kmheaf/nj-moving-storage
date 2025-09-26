import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const data = {
    name: String(form.get("name")||""),
    phone: String(form.get("phone")||""),
    email: String(form.get("email")||"") || null,
    origin: String(form.get("origin")||""),
    destination: String(form.get("destination")||""),
    bedrooms: form.get("bedrooms") ? Number(form.get("bedrooms")) : null,
    notes: String(form.get("notes")||"") || null,
    source: "website"
  }
  await prisma.lead.create({ data })
  return NextResponse.redirect(new URL("/thank-you", req.url))
}
