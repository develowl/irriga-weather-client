import { Autocomplete } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useStyles } from './styles'

const Search = () => {
  const { classes } = useStyles()
  const [search, setSearch] = useState('')
  const [debounced] = useDebouncedValue('', 200)
  const { data, error, isLoading } = useQuery('/location')

  return <Autocomplete value={search} onChange={setSearch} data={[]} />
}

export default Search
