import axios from 'axios'
import { IClient, ISignup } from '../types'

declare var process: {
  env: {
    NEXT_PUBLIC_BASE_URL: string,
  }
}

const initAxios = (baseURL: string) => {
  const Axios = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    },
    baseURL
  })

  return Axios
}

export const serviceApi = initAxios(process.env.NEXT_PUBLIC_BASE_URL);

export const serviceGetAllClients = async () => {
  const request = await serviceApi.get<IClient[]>('/client')

  return request.data
}

export const serviceGetOneClient = async (id: string) => {
  const request = await serviceApi.get<IClient>(`/client/${id}`)

  return request.data
}

export const servicePostClient = async (payload: ISignup | undefined) => {
  const request = await serviceApi.post<IClient>(`/client`, payload)

  return request.data
}