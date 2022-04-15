import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Temperature from '.'
import mockTemperature from './mock'

describe('<Temperature />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Temperature {...mockTemperature} />)
    expect(screen.getByText(mockTemperature.cityName)).toBeInTheDocument()
    expect(screen.getByText(mockTemperature.description)).toBeInTheDocument()
    expect(screen.getByText(`${mockTemperature.value}°C`)).toBeInTheDocument()
    expect(screen.getByText(`${mockTemperature.min}°`)).toBeInTheDocument()
    expect(screen.getByText(`${mockTemperature.max}°`)).toBeInTheDocument()
  })
})
