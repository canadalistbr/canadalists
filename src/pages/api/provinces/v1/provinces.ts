import prisma from 'app/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getProvinces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const provinces = await prisma.province.findMany()
  return res.status(200).json({ provinces })
}
