import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Temperature, { TemperatureProps } from '.'
import mockTemperature from './mock'

export default {
  title: 'Temperature',
  component: Temperature,
  args: { ...mockTemperature }
} as Meta

export const Default: Story<TemperatureProps> = (args) => <Temperature {...args} />
