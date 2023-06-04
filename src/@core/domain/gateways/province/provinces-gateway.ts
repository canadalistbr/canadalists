import type { Province, ProvinceModel } from '@core/domain/models'
export interface ProvincesGateway {
  findAll(): Promise<Province[]>
  findByName(provinceName: string): Promise<ProvinceModel>
}
