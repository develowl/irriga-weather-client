import React, { createContext, useContext, useState } from 'react'
import { CityType } from 'types'

const WeatherContext = createContext<CityType>({} as CityType)

type WeatherProviderProps = {
  children: React.ReactNode
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city] = useState<CityType>({} as CityType)

  // useEffect(() => {
  //   if (!city) {
  //   }
  // }, [city])

  return <WeatherContext.Provider value={{ ...city }}>{children}</WeatherContext.Provider>
}

export const useWeather = () => {
  return useContext(WeatherContext)
}
export default WeatherProvider
