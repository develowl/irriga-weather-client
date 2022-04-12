import { Autocomplete } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { getCities } from 'api/queries'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

const Search = () => {
  // const { classes } = useStyles()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<any[]>([])
  const [debounced] = useDebouncedValue(search, 1000)
  const queryClient = useQueryClient()

  useEffect(() => {
    if (debounced) {
      queryClient
        .fetchQuery('cities', () => getCities(debounced), {
          cacheTime: 0,
          staleTime: 0
        })
        .then((data) =>
          setData(
            data.map((d: any) => `${d?.local_names?.pt || d.name}, ${d.state} - ${d.country}`)
          )
        )
    }
  }, [debounced])

  return <Autocomplete value={search} onChange={setSearch} data={data} />
}

export default Search
