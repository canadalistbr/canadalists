import { CityOverView } from "./city-overview"
import { Province } from "./province"

export type City = {
  id: string
  name: string
  slug: string
  language: string[]
  imageUrl: string
  costOfLiving: number
  overallScore: number
  provinceId: string
  short: string
  industries: string[]
  nature: boolean
  population: number
  festivals: string
  bikeFriendly: boolean
}


export type CityModel = City & {
  cityOverview?: CityOverView
  provinces: Province
}