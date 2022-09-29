import { useMemo } from 'react'
import { RouteObject, useRoutes as useRoutesRouterDom } from 'react-router-dom'

import Layout from '../components/Layout'
import ListBrand from '../views/brand/ListBrand'
import SaveBrand from '../views/brand/SaveBrand'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'

export const useRoutes = () => {
  const routes = useMemo<RouteObject[]>(() => {
    return [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: '/brand/create', element: <SaveBrand /> },
          { path: '/brand/list', element: <ListBrand /> }
        ]
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }, [])

  const router = useRoutesRouterDom(routes)

  return {
    router
  }
}
