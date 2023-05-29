import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models/province/province'
import { AxiosInstance } from 'axios'

export class ProvincesHttpGateway implements ProvincesGateway {
  constructor(private readonly http: AxiosInstance) {}
  async findAll(): Promise<Province[]> {
    return (await this.http.get(`${process.env.BASE_URL}/api/provinces`)).data
  }
}
