import { Autocomplete, Kbd, Loader, useMantineTheme } from '@mantine/core'
import { useDebouncedValue, useHotkeys } from '@mantine/hooks'
import { getCities } from 'api/queries'
import { useEffect, useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { Search as SearchIcon } from 'tabler-icons-react'

const Search = () => {
  const theme = useMantineTheme()
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
        .then((cities) =>
          setData(cities.map((city) => `${city.name}, ${city.state} - ${city.country}`))
        )
        .finally(() => setLoading(false))
    }
  }, [debounced])

  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Loader size={'xs'} visibility={!loading ? 'hidden' : 'visible'} mr={5} />

      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  )

  return (
    <Autocomplete
      ref={ref}
      icon={<SearchIcon size={20} color={theme.colors.gray[6]} />}
      rightSection={rightSection}
      rightSectionWidth={115}
      variant={'filled'}
      radius={'md'}
      placeholder={'Pesquisar cidade...'}
      value={search}
      onChange={setSearch}
      data={data}
    />
  )
}

export default Search
