import { createContext, useContext, useEffect, useState } from 'react'
import { CityType } from 'types'

const WeatherContext = createContext<CityType>({} as CityType)

type WeatherProviderProps = {
  children: React.ReactNode
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city, setCity] = useState<CityType>()

  useEffect(() => {
    if (!city) {
    }
  }, [city])

  return <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>
}

export const useWeather = () => {
  return useContext(WeatherContext)
}
export default WeatherProvider
