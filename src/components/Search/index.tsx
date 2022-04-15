import React, { useEffect, useRef, useState } from 'react'
import { Autocomplete, AutocompleteItem, Kbd, Loader, useMantineTheme } from '@mantine/core'
import { useDebouncedValue, useHotkeys, useMediaQuery } from '@mantine/hooks'
import { getCities } from 'api/queries'
import { useQueryClient } from 'react-query'
// import { isMobile } from 'react-device-detect'
import { Search as SearchIcon } from 'tabler-icons-react'
import { friendlyCityName } from 'api/helpers'
import { useStyles } from './styles'
import { useWeather } from 'contexts/WeatherProvider'
import { CityType } from 'types'

const Search = () => {
  const theme = useMantineTheme()
  const { setCity } = useWeather()
  const { classes } = useStyles()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`)
  const [cities, setCities] = useState<CityType[]>([])
  const [search, setSearch] = useState('')
  const [data, setData] = useState<string[]>([])
  const [debounced] = useDebouncedValue(search, 350)
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()
  const ref = useRef<HTMLInputElement>(null)
  useHotkeys([['ctrl+K', () => ref.current?.focus()]])

  useEffect(() => {
    if (debounced.length >= 3) {
      setLoading(true)
      queryClient
        .fetchQuery('citiesList', () => getCities(debounced), {
          cacheTime: 0,
          staleTime: 0
        })
        .then((cities) => {
          setCities(cities)
          setData(cities.map((city) => friendlyCityName(city)))
        })
        .finally(() => setLoading(false))
    }
  }, [debounced])

  const onSubmit = async (item: AutocompleteItem) => {
    const foundCity = cities.find((city) => friendlyCityName(city) === item.value)
    if (foundCity) {
      setCity(foundCity)
    }
  }

  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Loader size={'xs'} visibility={!loading ? 'hidden' : 'visible'} mr={5} />
      {!isMobile && (
        <>
          <Kbd>Ctrl</Kbd>
          <span style={{ margin: '0 5px' }}>+</span>
          <Kbd>K</Kbd>
        </>
      )}
    </div>
  )

  return (
    <Autocomplete
      size={!isMobile ? 'md' : 'lg'}
      className={classes.root}
      ref={ref}
      icon={<SearchIcon size={20} color={theme.colors.gray[6]} />}
      rightSection={rightSection}
      rightSectionWidth={!isMobile ? 115 : 30}
      variant={'filled'}
      radius={'md'}
      placeholder={'Pesquisar cidade...'}
      value={search}
      onChange={setSearch}
      data={data}
      onItemSubmit={(item) => {
        ref.current?.blur()
        onSubmit(item)
      }}
      onFocus={() => ref.current?.select()}
    />
  )
}

export default Search
