import { CityModel } from "@core/domain/models"
import { axiosHttp } from "../http"

export async function getCityBy(name: string): Promise<CityModel> {
    const res = await axiosHttp.get(`/api/cities/${name}`)
    if (!res.data) {
        throw Error('Something went Wrong')
    }
    return res.data
}

export type SearchParamsType = {
    [key: string]: string
}

function getQueryString(searchParams?: SearchParamsType) {
    const queryString = !searchParams ? '' : Object.keys(searchParams)
        .map(key => `${key}=${searchParams[key]}`)
        .join('&');

    return queryString
}

export async function getAllCities(searchParams?: SearchParamsType): Promise<CityModel[]> {
    const queryString = getQueryString(searchParams)

    const res = await axiosHttp.get(`/api/cities?${queryString}`)
    if (!res.data) {
        throw Error('Something went Wrong')
    }
    return res.data
}