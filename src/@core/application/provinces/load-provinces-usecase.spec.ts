import { ProvincesGateway } from '@core/domain/gateways/province/provinces-gateway'
import { Province } from '@core/domain/models'
import LoadProvincesUsecase from './load-province-usecase'

const makeFakeProvinceFactory = (): Province[] => {
  return [
    {
      id: 'random_id',
      capital: 'quebec city',
      flagUrl: 'randomUrl',
      imageUrl: 'randomUrl',
      language: ['fr', 'en'],
      immigrationRanking: 4,
      name: 'Quebec',
      slug: 'Qc',
      topCities: ['montreal']
    },
    {
      id: 'random_id_2',
      capital: 'Ottawa',
      flagUrl: 'randomUrl',
      imageUrl: 'randomUrl',
      language: ['fr', 'en'],
      immigrationRanking: 2,
      name: 'Ontario',
      slug: 'On',
      topCities: ['Toronto']
    }
  ]
}

let sut: LoadProvincesUsecase
let findAll: jest.SpyInstance<Promise<Province[]>, []>
let findeOne: jest.SpyInstance<Promise<Province>, [id: string]>
beforeEach(() => {
  class LoadProvincesGatewayStub implements ProvincesGateway {
    findBy(name: string): Promise<Province> {
      return new Promise((resolve) => resolve(makeFakeProvinceFactory()[0]))
    }
    findAll(): Promise<Province[]> {
      return new Promise((resolve) => resolve(makeFakeProvinceFactory()))
    }
  }
  const gatewayStub = new LoadProvincesGatewayStub()
  sut = new LoadProvincesUsecase(gatewayStub)
  findAll = jest.spyOn(gatewayStub, 'findAll')
  findeOne = jest.spyOn(gatewayStub, 'findBy')
})

describe('LoadProvincesUsecase', () => {
  it('invokes gateway', async () => {
    await sut.loadAll()
    expect(findAll).toHaveBeenCalled()
  })

  it('invokes gateway', async () => {
    await sut.load('random_id')
    expect(findeOne).toHaveBeenCalled()
  })

  it('returns provinces', async () => {
    const provinces = await sut.loadAll()
    expect(provinces).toHaveLength(2)
    expect(provinces[0].id).toBe('random_id')
  })
})
