import React from 'react'
import { MantineProvider } from '@mantine/core'
import { render, RenderResult } from '@testing-library/react'
import { queryClient } from 'api/client'
import { QueryClientProvider } from 'react-query'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MantineProvider>
  )

export function mockComponent(id: string) {
  // eslint-disable-next-line react/display-name
  return () => <div data-testid={id}></div>
}
