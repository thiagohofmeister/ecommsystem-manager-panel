import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { Suspense } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

import queryClient from './configs/queryClient'
import { useRoutes } from './hooks/useRoutes'
import store from './store'
import AppTheme from './theme/AppTheme'

function App() {
  const { router } = useRoutes()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>{router}</Suspense>

            {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
