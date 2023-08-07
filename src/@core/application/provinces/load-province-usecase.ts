import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models/province'
import { LoadProvinceById } from '@core/domain/usecases/province/load-province-by-id'
import { LoadProvinces } from '@core/domain/usecases/province/load-provinces'

export default class LoadProvincesUsecase
  implements LoadProvinces, LoadProvinceById
{
  constructor(private readonly loadProvincesGateway: ProvincesGateway) {}
  async load(id: string): Promise<Province> {
    return await this.loadProvincesGateway.findBy(id)
  }
  async loadAll(): Promise<Province[]> {
    return await this.loadProvincesGateway.findAll()
  }
}
