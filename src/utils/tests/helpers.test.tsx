import { render, screen } from '@testing-library/react'
import { mockComponent } from './helpers'

describe('helpers mock', () => {
  it('should render mocked component', () => {
    const Component = mockComponent('teste')

    render(<Component />)
    expect(screen.getByTestId(/teste/i)).toBeInTheDocument()
  })
})
