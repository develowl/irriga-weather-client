import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ColorSchemeToggle from '.'
import { DEFAULT_THEME } from '@mantine/core'
import userEvent from '@testing-library/user-event'

describe('ColorSchemeToggle', () => {
  it('should render toggle', () => {
    renderWithTheme(<ColorSchemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      backgroundColor: DEFAULT_THEME.colors.gray[1],
      color: DEFAULT_THEME.colors.blue[6]
    })
  })

  it('should toggle color scheme', async () => {
    renderWithTheme(<ColorSchemeToggle />)

    const button = screen.getByRole('button')
    expect(button.firstChild).toHaveClass('icon-tabler-moon')

    userEvent.click(button)
    await waitFor(() => {
      expect(button.firstChild).toHaveClass('icon-tabler-sun')
      expect(button).toHaveStyle({
        backgroundColor: DEFAULT_THEME.colors.dark[6],
        color: DEFAULT_THEME.colors.yellow[4]
      })
    })
  })
})
