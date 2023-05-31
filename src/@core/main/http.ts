import axios from 'axios'

export const axiosHttps = axios.create({
  baseURL: process.env.BASE_URL_BACKEND,
  headers: {
    'Content-Type': 'application/json'
  }
})
