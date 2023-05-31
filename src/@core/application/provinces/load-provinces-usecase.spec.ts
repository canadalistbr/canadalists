import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models'
import LoadProvincesUsecase from './load-province-usecase'

const makeFakeProvinceFactory = (): Province[] => {
  return [
    {
      id: 'random_id',
      capital: 'quebec city',
      flag_url: 'randomUrl',
      image_url: 'randomUrl',
      language: ['fr', 'en'],
      immigration_ranking: 4,
      name: 'Quebec',
      slug: 'Qc',
      top_cities: ['montreal']
    },
    {
      id: 'random_id_2',
      capital: 'Ottawa',
      flag_url: 'randomUrl',
      image_url: 'randomUrl',
      language: ['fr', 'en'],
      immigration_ranking: 2,
      name: 'Ontario',
      slug: 'On',
      top_cities: ['Toronto']
    }
  ]
}

let sut: LoadProvincesUsecase
let findAll: jest.SpyInstance<Promise<Province[]>, []>
beforeEach(() => {
  class LoadProvincesGatewayStub implements ProvincesGateway {
    findAll(): Promise<Province[]> {
      return new Promise((resolve) => resolve(makeFakeProvinceFactory()))
    }
  }
  const gatewayStub = new LoadProvincesGatewayStub()
  sut = new LoadProvincesUsecase(gatewayStub)
  findAll = jest.spyOn(gatewayStub, 'findAll')
})

describe('LoadProvincesUsecase', () => {
  it('invokes gateway', async () => {
    await sut.loadAll()
    expect(findAll).toHaveBeenCalled()
  })

  it('returns provinces', async () => {
    const provinces = await sut.loadAll()
    expect(provinces).toHaveLength(2)
    expect(provinces[0].id).toBe('random_id')
  })
})
