import { useCallback } from 'react'

import { Brand } from '../../../models/Brand'
import { axiosInstance } from '../axios'

export const useBrand = () => {
  const instance = axiosInstance()
  const endpoint = 'brand'

  const create = useCallback(
    async (brand: Brand) => {
      return (await instance.post(`${endpoint}`, brand)).data
    },
    [instance]
  )

  return {
    endpoint,
    create
  }
}
