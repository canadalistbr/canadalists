import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models/province'
import { LoadProvinces } from '@core/domain/usecases/province/load-provinces'

export class LoadProvincesUsecase implements LoadProvinces {
  constructor(private readonly loadProvincesGateway: ProvincesGateway) {}
  async loadAll(): Promise<Province[]> {
    return await this.loadProvincesGateway.findAll()
  }
}
