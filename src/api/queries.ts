import { friendlyCityName } from 'api/helpers'
import { CityType, GeolocationType, WeatherType } from 'types'

export const getCities = async (cityName: string) => {
  const appid = process.env.REACT_APP_API_KEY
  const searchParams = `q=${cityName}&limit=10&lang=pt_br&type=like&appid=${appid}`
  const citiesList: CityType[] = await fetch(`${process.env.REACT_APP_API_CITIES}?${searchParams}`)
    .then((data) => data.json())
    .then((cities: CityType[]) => {
      // Remove duplicated
      return cities.filter((city, index) => {
        const indexOf = cities.findIndex(
          (findCity) => friendlyCityName(city) === friendlyCityName(findCity)
        )

        if (indexOf === index) {
          return city
        }
      })
    })

  return citiesList
}

export const getGeolocation = async () => {
  const geolocation: GeolocationType = await fetch(`${process.env.REACT_APP_API_GEOLOCATION}`).then(
    async (data) => data.json()
  )

  return geolocation
}

export const getWeather = async (lat: number, lon: number) => {
  const appid = process.env.REACT_APP_API_KEY
  const standardParams = 'exclude=minutely,hourly&units=metric&lang=pt_br'
  const searchParams = `lat=${lat}&lon=${lon}&appid=${appid}&${standardParams}`
  const response: WeatherType = await fetch(
    `${process.env.REACT_APP_API_WEATHER}?${searchParams}`
  ).then((data) => data.json())

  return response
}
