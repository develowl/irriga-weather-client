import { renderWithTheme } from 'utils/tests/helpers'

import Search from '.'

describe('Search', () => {
  it('should get focus when use hot keys', () => {
    renderWithTheme(<Search />)
  })
})
