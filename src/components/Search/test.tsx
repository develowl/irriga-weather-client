import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Search from '.'

describe('Search', () => {
  it('should render search field', () => {
    renderWithTheme(<Search />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should get focus when use hot keys', () => {
    const { container } = renderWithTheme(<Search />)
    fireEvent.keyDown(container, { key: 'k', code: 75, charCode: 75, ctrlKey: true })
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render loading when searching for a city', async () => {
    renderWithTheme(<Search />)

    const search = screen.getByRole('textbox')
    const text = 'Esteio'
    userEvent.type(search, text)

    await waitFor(() => {
      expect(screen.getByRole('presentation')).toHaveAttribute('visibility', 'visible')
    })
    await waitFor(() => {
      expect(search).toHaveValue(text)
    })
    expect(screen.getByRole('presentation')).toHaveAttribute('visibility', 'hidden')
  })
})
