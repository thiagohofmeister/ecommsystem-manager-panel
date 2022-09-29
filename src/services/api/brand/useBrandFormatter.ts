import { useCallback } from 'react'

import { Brand } from '../../../models/Brand'
import { BrandCreateResponse } from './models/BrandCreateResponse'

export const useBrandFormatter = () => {
  const format = useCallback<(apiEntity: BrandCreateResponse) => Brand>(apiEntity => apiEntity, [])

  return { format }
}
