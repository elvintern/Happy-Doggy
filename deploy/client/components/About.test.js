import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import About from './About'

test('The About page should display a heading: About Happy Doggy', () => {
  render(<About />)

  const component = screen.getByRole('heading', { level: 1 })

  expect(component.textContent).toBe('About Happy Doggy')
})
