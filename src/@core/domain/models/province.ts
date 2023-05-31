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
  top_cities: string[]
  immigration_ranking: number
  image_url: string
  flag_url: string
}

export type ProvinceModel = Province & {
  cities?: City[]
  Immigration?: Immigration[]
  ProvinceOverview?: ProvinceOverview
  Study?: Study[]
}
