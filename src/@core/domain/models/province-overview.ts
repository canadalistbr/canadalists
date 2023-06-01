import { ProvinceScores } from './province-scores'

export type ProvinceOverview = {
  id: string
  provinceId: string
  bannerUrl: string
  scores: ProvinceScores[]
}
