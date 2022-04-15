import React, { useState } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { render, RenderResult } from '@testing-library/react'
import { queryClient } from 'api/client'
import { QueryClientProvider } from 'react-query'

const MockRender = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={() => setColorScheme((c) => (c === 'dark' ? 'light' : 'dark'))}
      >
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<MockRender>{children}</MockRender>)

export function mockComponent(id: string) {
  // eslint-disable-next-line react/display-name
  return () => <div data-testid={id}></div>
}
