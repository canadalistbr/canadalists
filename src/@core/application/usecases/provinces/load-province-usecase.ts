import { ProvinceEntity } from '@core/domain/entities/province-entity'
import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { LoadProvinceById } from '@core/domain/usecases/province/load-province-by-id'
import { LoadProvinces } from '@core/domain/usecases/province/load-provinces'

export default class LoadProvincesUsecase
  implements LoadProvinces, LoadProvinceById
{
  constructor(private readonly loadProvincesGateway: ProvincesGateway) {}
  async load(name: string): Promise<ProvinceEntity> {
    return await this.loadProvincesGateway.findByName(name)
  }
  async loadAll(): Promise<ProvinceEntity[]> {
    return await this.loadProvincesGateway.findAll()
  }
}
