import { Group } from '@mantine/core'
import Card from 'components/Card'
import ForecastItem, { ForecastItemProps } from 'components/ForecastItem'
import React from 'react'

export type ForecastProps = {
  items: ForecastItemProps[]
}

const Forecast = ({ items }: ForecastProps) => {
  return (
    <Card title={'Previsão para 7 dias'}>
      <Group direction={'column'} align={'center'}>
        {items.map((item, index) => (
          <ForecastItem key={`forecast-item-${item.dt}`} {...item} today={index === 0} />
        ))}
      </Group>
    </Card>
  )
}

export default Forecast
