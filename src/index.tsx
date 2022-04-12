import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import App from './App'
import './index.css'
import { queryClient } from './query/client'

ReactDOM.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </MantineProvider>,
  document.getElementById('root')
)
