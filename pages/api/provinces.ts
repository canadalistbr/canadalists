import prisma from 'app/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getProvinces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const provinces = await prisma.province.findMany()
    res.status(200).json({provinces})
  } catch (error) {
    console.log(error)
  }
}