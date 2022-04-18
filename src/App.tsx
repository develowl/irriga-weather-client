import React from 'react'
import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from '@mantine/core'
import { queryClient } from 'api/client'
import { QueryClientProvider } from 'react-query'
import useCookie, { cookieOptions } from 'react-use-cookie'
import TemplateHome from 'templates/Home'
import WeatherProvider from 'contexts/WeatherProvider'

function App() {
  const [colorScheme, setColorScheme] = useCookie('irriga-weather-color-scheme', 'dark') as [
    ColorScheme,
    (value: string, options?: cookieOptions) => void
  ]

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark', { days: 30 })
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
        styles={{
          Tooltip: () => ({
            root: {
              width: '100%'
            }
          })
        }}
      >
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor: theme.colorScheme === 'light' ? '#F9F9F9' : undefined
            }
          })}
        />
        <QueryClientProvider client={queryClient}>
          <WeatherProvider>
            <TemplateHome />
          </WeatherProvider>
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
