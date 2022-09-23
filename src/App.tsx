import { Suspense } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { RouteObject, useRoutes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import queryClient from './configs/queryClient'
import store from './store'

function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <div>Home</div> }]
    }
  ]

  const router = useRoutes(routes)

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>{router}</Suspense>

          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
