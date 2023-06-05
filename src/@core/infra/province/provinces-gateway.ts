import { ProvinceEntity } from '../../domain/entities/province-entity'
import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province, ProvinceModel } from '@core/domain/models'
import { AxiosInstance } from 'axios'

export class ProvincesHttpGateway implements ProvincesGateway {
  constructor(private readonly http: AxiosInstance) {}
  async findByName(provinceName: string): Promise<ProvinceEntity> {
    const response = await this.http.get<ProvinceModel>(
      `${process.env.BASE_URL}/api/provinces/${provinceName}`
    )
    if (!response.data) {
      throw Error('Something went Wrong')
    }
    const province = response.data
    return new ProvinceEntity({
      ...province
    })
  }
  async findAll(): Promise<ProvinceEntity[]> {
    const response = await this.http.get<Province[]>(
      `${process.env.BASE_URL}/api/provinces`
    )
    if (!response.data) {
      throw Error('Something went Wrong')
    }
    return response.data.map((province) => {
      return new ProvinceEntity({ ...province })
    })
  }
}
