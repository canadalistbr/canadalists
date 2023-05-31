import { ProvinceScores } from './province-scores'

export type ProvinceOverview = {
  id: string
  province_id: string
  banner_url: string
  ProvinceScores: ProvinceScores[]
}
