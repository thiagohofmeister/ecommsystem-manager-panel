import { useCallback, useMemo } from 'react'
import { useMutation, UseMutationOptions } from 'react-query'

import { Brand } from '../models/Brand'
import { useBrand } from '../services/api/brand/useBrand'
import { useBrandFormatter } from '../services/api/brand/useBrandFormatter'

export const useBrandCreate = (options?: UseMutationOptions<Brand, unknown, Brand>) => {
  const { endpoint, create } = useBrand()
  const { format } = useBrandFormatter()

  const mutationKey = useMemo(() => [endpoint], [endpoint])

  const mutationFn = useCallback(
    async (brand: Brand) => {
      const response = await create(brand)

      return format(response)
    },
    [create, format]
  )

  const mutation = useMutation<Brand, unknown, Brand>(mutationKey, mutationFn, {
    onError: () => {},
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context)
    }
  })

  return mutation
}
