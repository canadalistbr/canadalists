import { City, Immigration, ProvinceModel } from '../models'
import { ProvinceOverview } from '../models/province-overview'
import { Study } from '../models/study'

export class ProvinceEntity {
  private _id: string
  private _name: string
  private _capital: string
  private _slug: string
  private _language: string[]
  private _topCities: string[]
  private _immigrationRanking: number
  private _imageUrl: string
  private _flagUrl: string
  private _cities?: City[]
  private _immigration?: Immigration[]
  private _overview?: ProvinceOverview
  private _study?: Study[]

  constructor(data: ProvinceModel) {
    this._id = data.id
    this._name = data.name
    this._capital = data.capital
    this._slug = data.slug
    this._language = data.language
    this._topCities = data.topCities
    this._immigrationRanking = data.immigrationRanking
    this._imageUrl = data.imageUrl
    this._flagUrl = data.flagUrl
    this._cities = data.cities
    this._immigration = data.immigration
    this._overview = data.overview
    this._study = data.study
  }
  get id(): string {
    return this._id
  }
  get name(): string {
    return this._name
  }
  get capital(): string {
    return this._capital
  }
  get slug(): string {
    return this._slug
  }
  get language(): string[] {
    return this._language
  }
  get topCities(): string[] {
    return this._topCities
  }
  get immigrationRanking(): number {
    return this._immigrationRanking
  }
  get imageUrl(): string {
    return this._imageUrl
  }
  get flagUrl(): string {
    return this._flagUrl
  }
  get cities(): City[] | undefined {
    return this._cities
  }
  get immigration(): Immigration[] | undefined {
    return this._immigration
  }
  get overview(): ProvinceOverview | undefined {
    return this._overview
  }
  get study(): Study[] | undefined {
    return this._study
  }
  // TODO: Find out if it hurts the principles of Clean Architecture
  get provinceNameLink(): string {
    return this._name.replace(/\s+/g, '-').toLocaleLowerCase()
  }
}
