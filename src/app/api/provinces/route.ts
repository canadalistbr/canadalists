import prisma from 'app/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const provinces = await prisma.province.findMany()
  return NextResponse.json({ provinces })
}
