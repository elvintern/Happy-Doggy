import React from 'react'
import DogList from './DogList'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getDogList } from '../apis/apiClient'

jest.mock('../apiClient')

test('when the Dog List page is rendered, Lilly should be the name of the first dog pictured', async () => {
  // ARRANGE
  getDogList.mockImplementation(() => {
    return Promise.resolve([
      {
        address: '12 morgan street',
        availibility: '10/12/22',
        breed: 'Bulldog',
        description:
          'likes to explore and often finds herself becoming too curious about cats and birds. She loves playing in the water and doing zoomies.',
        dogName: 'Lilly',
        fullName: 'JInwoo Park',
        id: 5,
        needs: 'History of chasing cats and birds',
        ownerId: 'auth0|638ac80284d437614af49277',
        phoneNumber: '13214112',
        suburb: 'Waiheke, Auckland',
        walkerId: 'auth0|638ac80284d437614af49277',
      },
    ])
  })

  render(
    <Router>
      <DogList />
    </Router>
  )

  //ACT
  const doggyname = await screen.findAllByText(/Lilly/i)

  // ASSERT
  expect(doggyname[0]).toBeInTheDocument()
})
