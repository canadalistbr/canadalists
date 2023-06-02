import { Province } from '@core/domain/models'

export interface LoadProvinces {
  loadAll(): Promise<Province[]>
}
