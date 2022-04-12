import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export function mockComponent(id: string) {
  // eslint-disable-next-line react/display-name
  return () => <div data-testid={id}></div>
}
