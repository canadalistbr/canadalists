import { Province } from '@prisma/client'
import axios from 'axios'
export type Provinces = {
  provinces: Province[]
}
export async function getProvinces(): Promise<Provinces> {
  const res = await axios.get(`${process.env.BASE_URL}/api/provinces`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.data
}
