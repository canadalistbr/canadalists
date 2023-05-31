import type { Province } from '@core/domain/models'

export interface LoadProvinceById {
  load(id: string): Promise<Province>
}
