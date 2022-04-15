import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SimpleCard from '.'

describe('<SimpleCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SimpleCard title={'SimpleCard title'} value={'SimpleCard value'} />)

    expect(screen.getByRole('heading', { name: 'SimpleCard value' })).toBeInTheDocument()
  })
})
