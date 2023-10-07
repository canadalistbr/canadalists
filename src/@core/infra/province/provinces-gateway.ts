import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models'
import { AxiosInstance } from 'axios'

export class ProvincesHttpGateway implements ProvincesGateway {
  constructor(private readonly http: AxiosInstance) { }
  async findBy(name: string): Promise<Province> {
    const res = await this.http.get(
      `/api/provinces/${name}`
    )
    if (!res.data) {
      throw Error('Something went Wrong')
    }
    return res.data
  }
  async findAll(): Promise<Province[]> {
    const res = await this.http.get(`/api/provinces`)
    if (!res.data) {
      throw Error('Something went Wrong')
    }
    return res.data
  }
}
