import Layout from 'components/Layout'
import { Route } from 'models/Route'
import { lazy, Suspense, useCallback, useMemo } from 'react'
import { RouteObject, useRoutes as useRoutesRouterDom } from 'react-router-dom'
import routes from 'routes'

export const useRoutes = () => {
  const formatRoute = useCallback((route: Route): RouteObject => {
    const routeObject: RouteObject = {
      index: route.index,
      path: route.path,
      element: route.component,
      children:
        route.items && Object.keys(route.items).map(routeKey => formatRoute(route.items![routeKey]))
    }

    return routeObject
  }, [])

  const routesToRouterDom = useMemo<RouteObject[]>(() => {
    return [
      {
        label: 'Layout',
        path: '/',
        element: <Layout />,
        children: Object.keys(routes).map(routeKey => formatRoute(routes![routeKey]))
      },
      ...Object.keys(routes).map(routeKey => formatRoute(routes![routeKey]))
    ]
  }, [routes])

  const router = useRoutesRouterDom(routesToRouterDom)

  return {
    router
  }
}
