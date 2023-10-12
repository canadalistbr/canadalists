import { City } from './city'
import { Immigration } from './immigration'
import { ProvinceOverview } from './province-overview'
import { Study } from './study'

export type Province = {
  id: string
  name: string
  capital: string
  slug: string
  language: string[]
  topCities: string[]
  immigrationRanking: number
  imageUrl: string
  flagUrl: string
  short: string
}

export type ProvinceModel = Province & {
  cities?: City[]
  immigration?: Immigration[]
  overview?: ProvinceOverview
  study?: Study[]
}
