import LoadProvincesUsecase from '@core/application/provinces/load-province-usecase'
import { Province, ProvinceModel } from '@core/domain/models'
import { ProvincesHttpGateway } from '@core/infra/province/provinces-gateway'
import { axiosHttp } from '../http'

export async function makeGetProvinceBy(id: string): Promise<ProvinceModel> {
  const getProvinceByGateway = new ProvincesHttpGateway(axiosHttp)
  return new LoadProvincesUsecase(getProvinceByGateway).load(id)
}

export async function makeGetProvinces(): Promise<Province[]> {
  const loadProvincesGateway = new ProvincesHttpGateway(axiosHttp)
  return new LoadProvincesUsecase(loadProvincesGateway).loadAll()
}
