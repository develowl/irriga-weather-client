import { Group, Image, Text, Tooltip } from '@mantine/core'
import React from 'react'
import { useStyles } from './styles'

export type ForecastItemProps = {
  dt: number
  icon: string
  min: number
  max: number
  description: string
  today?: boolean
}

const ForecastItem = ({ dt, icon, min, max, description, today = false }: ForecastItemProps) => {
  const { classes } = useStyles()
  const getWeekDay = () => {
    const date = new Date(dt * 1000)
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date)
  }

  return (
    <Tooltip withArrow label={description} radius={'md'}>
      <Group className={classes.group} align={'center'}>
        <Text className={classes.day} size={'md'}>
          {!today ? getWeekDay().toUpperCase() : 'HOJE'}
        </Text>
        <Image
          width={50}
          src={`${process.env.REACT_APP_API_WEATHER_CONDITIONS}/${icon}@2x.png`}
          alt={`icon-${icon}`}
        />
        <Text size={'md'} align={'right'} className={classes.temperature}>
          Mín.: <strong>{Math.round(min)}°</strong> Máx.: <strong>{Math.round(max)}°</strong>
        </Text>
      </Group>
    </Tooltip>
  )
}

export default ForecastItem
