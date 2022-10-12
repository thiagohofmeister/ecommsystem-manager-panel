import { useMemo } from 'react'
import routes from 'routes'
import brandRoute from 'routes/brandRoute'

import { Menu } from '../models/Menu'

export const useMenu = () => {
  const menus = useMemo<Menu[]>(
    () => [
      {
        title: 'Dashboard',
        route: routes.dashboard.path
      },
      {
        title: 'Marcas',
        route: brandRoute.items.list.path
      }
    ],
    []
  )

  return {
    menus
  }
}
