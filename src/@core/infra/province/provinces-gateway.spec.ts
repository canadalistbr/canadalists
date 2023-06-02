import { ProvincesHttpGateway } from './provinces-gateway'
import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import dotenv from 'dotenv'
import { Province } from '@core/domain/models'

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
  const expectedProvinces = makeFakeProvincesFactory()

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
      .reply(200, expectedProvinces[1])
    await sut.findAll()
    expect(axiosMock.history.get.length).toBe(1)
  })

  it('should call findById', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces/random_id`)
      .reply(200, expectedProvinces[1])
    await sut.findById('random_id')
    expect(axiosMock.history.get.length).toBe(1)
  })

  it('should load all provinces', async () => {
    const expectedProvinces = makeFakeProvincesFactory()
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces`)
      .reply(200, expectedProvinces)
    const provinces = await sut.findAll()
    expect(provinces).toEqual(expectedProvinces)
  })

  it('should find one province by its id', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces/${expectedProvinces[1].id}`)
      .reply(200, expectedProvinces[1])
    const province = await sut.findById(expectedProvinces[1].id)
    expect(province).toEqual(expectedProvinces[1])
  })
})
