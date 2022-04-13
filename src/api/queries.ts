import { friendlyCityName } from 'api/helpers'
import { CityType, GeolocationType } from 'types'

export const getCities = async (cityName: string) => {
  const searchParams = `q=${cityName}&limit=10&lang=pt_br&type=like&appid=${process.env.API_KEY}`
  const citiesList: CityType[] = await fetch(`${process.env.API_CITIES_URL}?${searchParams}`)
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
  const geolocation: GeolocationType = await fetch(`${process.env.API_GEOLOCATION_URL}`).then(
    async (data) => data.json()
  )

  return geolocation
}
