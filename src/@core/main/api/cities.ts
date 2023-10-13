import { City, CityModel } from "@core/domain/models"
import { axiosHttp } from "../http"

export async function getCityBy(name: string): Promise<CityModel> {
    const res = await axiosHttp.get(`/api/cities/${name}`)
    if (!res.data) {
        throw Error('Something went Wrong')
    }
    return res.data
}


// Move into a shared folder
export async function getAllCities(): Promise<City[]> {
    const res = await axiosHttp.get('/api/cities')
    if (!res.data) {
        throw Error('Something went Wrong')
    }
    return res.data
}