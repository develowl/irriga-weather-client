import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Forecast, { ForecastProps } from '.'
import mockItems from './mock'

export default {
  title: 'Forecast',
  component: Forecast,
  args: {
    items: mockItems
  }
} as Meta

export const Default: Story<ForecastProps> = (args) => <Forecast {...args} />
