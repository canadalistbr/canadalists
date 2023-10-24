import { CityOverView } from "./city-overview"
import { Province } from "./province"

export type Winter = 'Mild' | 'Cold' | 'Freezing'
export type Language = 'Fr' | 'En'
export type CostOverall = 'High' | 'Medium' | 'Low'

export type City = {
  id: string
  name: string
  slug: string
  language: Language[]
  imageUrl: string
  costOfLiving: string
  overallScore: number
  provinceId: string
  short: string
  industries: string[]
  nature: boolean
  population: number
  festivals: string
  bikeFriendly: boolean
  winter: Winter
  immigrationDestinationRank: number
  costOverall: CostOverall
}


export type CityModel = City & {
  cityOverview?: CityOverView
  provinces: Province
}