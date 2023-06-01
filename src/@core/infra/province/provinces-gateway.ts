import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models'
import { AxiosInstance } from 'axios'

export class ProvincesHttpGateway implements ProvincesGateway {
  constructor(private readonly http: AxiosInstance) {}
  async findById(id: string): Promise<Province> {
    const res = await this.http.get(
      `${process.env.BASE_URL}/api/provinces/${id}`
    )
    if (!res.data) {
      throw Error('Something went Wrong')
    }
    return res.data
  }
  async findAll(): Promise<Province[]> {
    const res = await this.http.get(`${process.env.BASE_URL}/api/provinces`)
    if (!res.data) {
      throw Error('Something went Wrong')
    }
    return res.data
  }
}
