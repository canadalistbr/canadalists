import type { Province } from '@core/domain/models'
export interface ProvincesGateway {
  findAll(): Promise<Province[]>
}
