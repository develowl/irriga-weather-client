import React from 'react'
import { Center, Title } from '@mantine/core'
import Card from 'components/Card'

export type SimpleCardProps = {
  title: string
  value: string
}

const SimpleCard = ({ title, value }: SimpleCardProps) => {
  return (
    <Card title={title}>
      <Center py={32}>
        <Title order={1}>{value}</Title>
      </Center>
    </Card>
  )
}

export default SimpleCard
