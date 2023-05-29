import { Province } from '@core/domain/models/province/province'

export interface LoadProvinces {
  loadAll(): Promise<Province[]>
}
