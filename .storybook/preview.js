import { MantineProvider } from '@mantine/core'
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

export const decorators = [
  (Story) => (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </MantineProvider>
  )
]
