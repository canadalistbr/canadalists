import { serverError } from 'app/errors'
import { success } from 'app/http/'
import prisma from 'app/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getProvinces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const provinces = await prisma.province.findMany()
    success(res, provinces)
  } catch (error) {
    console.log(error)
    serverError(res, 'failed to fetch data')
  }
}
