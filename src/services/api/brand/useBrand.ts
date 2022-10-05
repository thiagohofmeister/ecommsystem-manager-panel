import { useCallback } from 'react'

import { Brand } from '../../../models/Brand'
import { axiosInstance } from '../axios'
import { QueryParams } from '../models/QueryParams'

export const useBrand = () => {
  const instance = axiosInstance()
  const endpoint = 'brand'

  const create = useCallback(
    async (brand: Brand) => {
      return (await instance.post(`${endpoint}`, brand)).data
    },
    [instance]
  )

  const getList = useCallback(
    async (query?: QueryParams) => await (await instance.get(`${endpoint}`)).data,
    [instance]
  )

  return {
    endpoint,
    create,
    getList
  }
}
