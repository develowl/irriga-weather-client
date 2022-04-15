import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

describe('<Card />', () => {
  it('should render title, content and footer', () => {
    renderWithTheme(
      <Card title={'Title'} footer={'Footer'}>
        content card here
      </Card>
    )
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/content card here/i)).toBeInTheDocument()
    expect(screen.getByText(/footer/i)).toBeInTheDocument()
  })
})
