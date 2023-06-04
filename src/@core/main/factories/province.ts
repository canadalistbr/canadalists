import LoadProvincesUsecase from '@core/application/usecases/provinces/load-province-usecase'
import { ProvinceEntity } from '@core/domain/entities/province-entity'
import { ProvincesHttpGateway } from '@core/infra/province/provinces-gateway'
import { axiosHttp } from '../http'

export async function makeGetProvinceBy(id: string): Promise<ProvinceEntity> {
  const getProvinceByGateway = new ProvincesHttpGateway(axiosHttp)
  return new LoadProvincesUsecase(getProvinceByGateway).load(id)
}

export async function makeGetProvinces(): Promise<ProvinceEntity[]> {
  const loadProvincesGateway = new ProvincesHttpGateway(axiosHttp)
  return new LoadProvincesUsecase(loadProvincesGateway).loadAll()
}
