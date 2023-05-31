import { Province } from '@core/domain/models'
import axios from 'axios'

export async function getProvinces(): Promise<Province[]> {
  const res = await axios.get(`${process.env.BASE_URL_BACKEND}/api/provinces`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.data
}
