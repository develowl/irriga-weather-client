import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockItem from './mock'

import ForecastItem from '.'

describe('<ForecastItem />', () => {
  it('should render day, icon weather conditions and min/max temperature', () => {
    renderWithTheme(<ForecastItem {...mockItem} />)

    expect(screen.getByText(/quinta-feira/i)).toBeInTheDocument()
    expect(screen.getByAltText(`icon-${mockItem.icon}`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(mockItem.min)}°`)).toBeInTheDocument()
    expect(screen.getByText(`${Math.round(mockItem.max)}°`)).toBeInTheDocument()
  })
})
