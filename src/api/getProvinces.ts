import axios from 'axios'
export type Province = {
  id: string
  name: string
  capital: string
  slug: string
  language: string[]
  topCities: string[]
  immigrationRanking: number
  imageUrl: string
  flagUrl: string
}
export async function getProvinces(): Promise<Province[]> {
  const res = await axios.get(`${process.env.BASE_URL_BACKEND}/api/provinces`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.data
}
