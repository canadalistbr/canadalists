import { ProvinceEntity } from '@core/domain/entities/province-entity'
export interface ProvincesGateway {
  findAll(): Promise<ProvinceEntity[]>
  findByName(provinceName: string): Promise<ProvinceEntity>
}
