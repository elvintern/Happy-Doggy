import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'

import OwnerForm from './OwnerForm'

test('Component should display a header', () => {
  render(
    <Router>
      <OwnerForm />
    </Router>
  )

  const component = screen.getByRole('heading', { level: 2 })

  expect(component.textContent).toBe('Tell me about your dog!!')
})

test('Component should display a form with the correct number of text inputs', () => {
  render(
    <Router>
      <OwnerForm />
    </Router>
  )

  const dogName = screen.getByPlaceholderText(/freddie/i)
  const breed = screen.getByPlaceholderText(/golden/i)
  const location = screen.getByPlaceholderText(/New/i)
  const requirement = screen.getByPlaceholderText(/long/i)
  const introduction = screen.getByPlaceholderText(/doggo/i)

  expect(dogName).toBeInTheDocument()
  expect(breed).toBeInTheDocument()
  expect(location).toBeInTheDocument()
  expect(requirement).toBeInTheDocument()
  expect(introduction).toBeInTheDocument()
})
