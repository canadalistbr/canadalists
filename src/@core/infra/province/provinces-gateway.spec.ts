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
describe('', () => {
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
    axiosMock.onGet(`${process.env.BASE_URL}/api/provinces`).reply(200)
    await sut.findAll()
    expect(axiosMock.history.get.length).toBe(1)
  })

  it('should call findById', async () => {
    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces/random_id`)
      .reply(200)
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

  it('should find one provinces by its id', async () => {
    const expectedProvinces = makeFakeProvincesFactory()

    axiosMock
      .onGet(`${process.env.BASE_URL}/api/provinces/${expectedProvinces[1].id}`)
      .reply(200, expectedProvinces[1])
    const provinces = await sut.findById(expectedProvinces[1].id)
    expect(provinces).toEqual(expectedProvinces[1])
  })
})