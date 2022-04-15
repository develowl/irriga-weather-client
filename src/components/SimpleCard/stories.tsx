import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import WindSpeed, { SimpleCardProps } from '.'

export default {
  title: 'WindSpeed',
  component: WindSpeed,
  args: {
    title: 'SimpleCard title',
    value: 'SimpleCard value'
  }
} as Meta

export const Default: Story<SimpleCardProps> = (args) => <WindSpeed {...args} />
