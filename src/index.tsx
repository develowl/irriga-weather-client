import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <MantineProvider>
    <App />
  </MantineProvider>,
  document.getElementById('root')
)
