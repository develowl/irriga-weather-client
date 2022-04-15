import { MantineProvider } from '@mantine/core'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import { useDarkMode } from 'storybook-dark-mode'
import { queryClient } from '../src/api/client'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}

function ThemeWrapper({ children }) {
  return (
    <MantineProvider
      theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MantineProvider>
  )
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>]
