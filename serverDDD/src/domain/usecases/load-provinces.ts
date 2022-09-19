import { ProvinceModel } from "../models/province";

export interface LoadProvinces {
    load(): Promise<ProvinceModel[]>
}