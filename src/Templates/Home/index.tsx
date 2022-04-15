import React from 'react'
import { Container, Grid, Group, LoadingOverlay, Space } from '@mantine/core'
import ColorSchemeToggle from 'components/ColorSchemeToggle'
import Search from 'components/Search'
import Temperature from 'components/Temperature'
import Forecast from 'components/Forecast'
import SimpleCard from 'components/SimpleCard'
import { useWeather } from 'contexts/WeatherProvider'

const TemplateHome = () => {
  const { isLoading, temperature, forecast, humidity, windSpeed, rain } = useWeather()

  if (isLoading || !temperature || !forecast || !humidity || !windSpeed || !rain) {
    return (
      <LoadingOverlay
        visible={isLoading || !temperature || !forecast || !humidity || !windSpeed || !rain}
      />
    )
  }

  return (
    <Container p={20}>
      <Group position={'center'}>
        <Search />
        <ColorSchemeToggle />
      </Group>
      <Space h={50} />
      <Grid justify={'center'}>
        <Grid.Col>
          <Temperature {...temperature} />
        </Grid.Col>
      </Grid>
      <Space h={50} />
      <Grid>
        <Grid.Col md={6}>
          <Forecast items={forecast.items} />
        </Grid.Col>
        <Grid.Col md={6}>
          <Grid>
            <Grid.Col span={6} md={12}>
              <SimpleCard title={'Umidade do Ar'} value={humidity} />
            </Grid.Col>
            <Grid.Col span={6} md={12}>
              <SimpleCard title={'Velocidade do vento'} value={windSpeed} />
            </Grid.Col>
            <Grid.Col span={6} md={12}>
              <SimpleCard title={'Volume de chuva na última hora'} value={rain} />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default TemplateHome
