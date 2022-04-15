import { Center, Image, Text, Title } from '@mantine/core'
import Card from 'components/Card'
import React from 'react'
import { useStyles } from './styles'

export type TemperatureProps = {
  cityName: string
  value: number
  description: string
  min: number
  max: number
  dt: number
}

const Temperature = ({ cityName, value, description, min, max, dt }: TemperatureProps) => {
  const { classes } = useStyles()

  return (
    <Card
      footer={
        <Text align={'right'} size={'xs'}>
          {new Date(dt * 1000).toLocaleString()}
        </Text>
      }
    >
      <div style={{ margin: '15px auto 30px' }}>
        <Title order={1} className={classes.title} align={'center'}>
          {cityName}
        </Title>

        <Center style={{ height: 75 }}>
          <Image width={100} src={`${process.env.REACT_APP_API_WEATHER_CONDITIONS}/10d@4x.png`} />
        </Center>

        <Title order={1} align={'center'} p={0}>
          {Math.round(value)}°C
        </Title>

        <Text size={'sm'} align={'center'}>
          {description.charAt(0).toUpperCase().concat(description.slice(1))}
        </Text>

        <Text size={'xs'} align={'center'} mt={10}>
          Mín.: <strong>{Math.round(min)}°</strong> Máx.: <strong>{Math.round(max)}°</strong>
        </Text>
      </div>
    </Card>
  )
}

export default Temperature
