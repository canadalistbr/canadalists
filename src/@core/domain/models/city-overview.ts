import { CityScores } from './city-scores'

export type CityOverView = {
  id: string
  cityId: string
  bannerUrl: string
  scores: CityScores[]
}
