import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { CityType } from 'types'
import { getGeolocation, getWeather } from 'api/queries'
import { useQuery } from 'react-query'
import { TemperatureProps } from 'components/Temperature'
import { ForecastProps } from 'components/Forecast'

const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps)

type WeatherContextProps = {
  city?: CityType
  setCity: Dispatch<SetStateAction<CityType>>
  temperature?: TemperatureProps
  forecast?: ForecastProps
  humidity?: string
  windSpeed?: string
  rain?: string
  isLoading?: boolean
}

type WeatherProviderProps = {
  children: React.ReactNode
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city, setCity] = useState<CityType>({} as CityType)
  const [temperature, setTemperature] = useState<TemperatureProps>()
  const [forecast, setForecast] = useState<ForecastProps>()
  const [humidity, setHumidity] = useState<string>()
  const [windSpeed, setWindSpeed] = useState<string>()
  const [rain, setRain] = useState<string>()
  const { isLoading, data, error, status, refetch } = useQuery(
    'getWeather',
    () => getWeather(city?.lat || 0, city?.lon || 0),
    {
      enabled: typeof city?.lat === 'number' && typeof city.lat === 'number'
    }
  )

  useEffect(() => {
    if (city.name !== temperature?.cityName) {
      refetch()
    }
  }, [city])

  useEffect(() => {
    if (error || status === 'idle') {
      getGeolocation().then((data) =>
        setCity({
          country: data.countryCode,
          lat: data.lat,
          lon: data.lon,
          name: data.city,
          state: data.regionName
        })
      )
    } else if (data && !isLoading) {
      setTemperature({
        dt: data.current.dt,
        cityName: city.name,
        description: data.current.weather[0].description,
        min: data.daily[0].temp.min,
        max: data.daily[0].temp.max,
        value: data.current.temp
      })

      setForecast({
        items: data.daily.map((item) => ({
          dt: item.dt,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          min: item.temp.min,
          max: item.temp.max
        }))
      })

      setHumidity(`${data.current.humidity}%`)
      setWindSpeed(`${data.current.wind_speed} m/s`)
      setRain(`${data.current?.rain ? data.current.rain['1h'] : 0}mm`)
    }
  }, [data, isLoading, error, status])

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        isLoading: !!error || isLoading || status === 'idle' || !data,
        temperature,
        forecast,
        humidity,
        windSpeed,
        rain
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  return useContext(WeatherContext)
}
export default WeatherProvider
