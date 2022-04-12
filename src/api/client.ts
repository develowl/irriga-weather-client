import { QueryClient } from 'react-query'

const STANDARD_TIME = 1000 * 60 * 15 // 15 Minutos

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: STANDARD_TIME,
      refetchInterval: STANDARD_TIME,
      staleTime: STANDARD_TIME
    }
  }
})
