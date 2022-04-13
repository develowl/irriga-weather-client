import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './api/client'
import App from './App'

ReactDOM.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </MantineProvider>,
  document.getElementById('root')
)
