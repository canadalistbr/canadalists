import { ProvincesHttpGateway } from './provinces-gateway'
import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import dotenv from 'dotenv'
import { Province } from '@core/domain/models'
import { ProvinceEntity } from '../../domain/entities/province-entity'
dotenv.config({
  path: './env.test'
})

const makeFakeProvincesFactory = (): Province[] => {
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

describe('ProvincesHttpGateway', () => {
  const expectedProvinces = makeFakeProvincesFactory().map(
    (province) => new ProvinceEntity({ ...province })
  )

  let sut: ProvincesHttpGateway
  let axiosMock: MockAdapter

  beforeEach(() => {
    const axiosInstance: AxiosInstance = axios.create()
    axiosMock = new MockAdapter(axiosInstance)
    sut = new ProvincesHttpGateway(axiosInstance)
  })

  afterEach(() => {
    axiosMock.reset()
  })

  it('should call findAll', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces`)
      .reply(200, makeFakeProvincesFactory())
    await sut.findAll()
    expect(axiosMock.history.get.length).toBe(1)
  })

  it('should call findByName', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces/Ontario`)
      .reply(200, makeFakeProvincesFactory()[1])
    await sut.findByName('Ontario')
    expect(axiosMock.history.get.length).toBe(1)
  })

  it('should load all provinces', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces`)
      .reply(200, makeFakeProvincesFactory())
    const provinces = await sut.findAll()
    expect(provinces).toEqual(expectedProvinces)
  })

  it('should find one province by its name', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces/Ontario`)
      .reply(200, makeFakeProvincesFactory()[1])
    const province = await sut.findByName('Ontario')
    expect(province.id).toEqual('random_id_2')
  })
})
