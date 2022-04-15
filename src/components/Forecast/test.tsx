import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockItems from './mock'

import Forecast from '.'

describe('<Forecast />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Forecast items={mockItems} />)
  })
})
