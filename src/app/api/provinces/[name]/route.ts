import prisma from 'app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const provinceName = params.name

  const capitalizedProvinceName =
    provinceName.charAt(0).toUpperCase() + provinceName.slice(1)

  const province = await prisma.province.findFirst({
    where: {
      name: capitalizedProvinceName
    }
  })
  return NextResponse.json({ province })
}
