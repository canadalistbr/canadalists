import { Province } from '@core/domain/models/province/province'

export interface ProvincesGateway {
  findAll(): Promise<Province[]>
}
