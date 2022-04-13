import { CityType } from 'types'

export const friendlyCityName = (city: CityType) => `${city.name}, ${city.state} - ${city.country}`
