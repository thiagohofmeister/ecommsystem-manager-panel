import { useMemo } from 'react'
import { RouteObject, useRoutes as useRoutesRouterDom } from 'react-router-dom'

import Layout from '../components/Layout'
import BrandList from '../views/BrandList'
import BrandSave from '../views/BrandSave'
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
          { path: '/brand/create', element: <BrandSave /> },
          { path: '/brand/edit/:id', element: <BrandSave /> },
          { path: '/brand/list', element: <BrandList /> }
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
