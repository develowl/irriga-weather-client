import { rest } from 'msw'
import mockCities from 'components/Search/mock'

const handlers = [
  rest.get('http://api.openweathermap.org/geo/1.0/direct', async (req, res, ctx) => {
    return res(ctx.json(mockCities))
  })
]

export { handlers }
