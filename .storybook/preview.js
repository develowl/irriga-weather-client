import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useDarkMode } from 'storybook-dark-mode'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../src/api/client'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

function ThemeWrapper({ children }) {
  return (
    <ColorSchemeProvider colorScheme={'light'}>
      <MantineProvider
        theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>]
