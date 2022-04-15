import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'
import { CardProps } from '.'
import { SimpleGrid } from '@mantine/core'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Title',
    children: <div>content here</div>,
    footer: 'Footer'
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <SimpleGrid cols={2}>
    <Card {...args} />
  </SimpleGrid>
)
