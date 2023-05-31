import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models'
import { AxiosInstance } from 'axios'

export class ProvincesHttpGateway implements ProvincesGateway {
  constructor(private readonly http: AxiosInstance) {}
  async findById(id: string): Promise<Province> {
    return (await this.http.get(`${process.env.BASE_URL}/api/provinces/${id}`))
      .data
  }
  async findAll(): Promise<Province[]> {
    return (await this.http.get(`${process.env.BASE_URL}/api/provinces`)).data
  }
}
