import { MantineProvider } from '@mantine/core'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  )

export function mockComponent(id: string) {
  // eslint-disable-next-line react/display-name
  return () => <div data-testid={id}></div>
}
