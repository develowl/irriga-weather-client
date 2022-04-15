import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ForecastItem, { ForecastItemProps } from '.'
import mockItem from './mock'

export default {
  title: 'ForecastItem',
  component: ForecastItem,
  args: { ...mockItem }
} as Meta

export const Default: Story<ForecastItemProps> = (args) => <ForecastItem {...args} />
