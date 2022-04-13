import { Meta, Story } from '@storybook/react/types-6-0'
import Search from '.'

export default {
  title: 'Search',
  component: Search
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300 }}>
    <Search />
  </div>
)
