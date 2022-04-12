import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Search from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Search />)
    expect(screen.getByRole('heading', { name: /Search/i })).toBeInTheDocument()
  })
})
