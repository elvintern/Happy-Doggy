import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import OwnerForm from './OwnerForm'
import DogList from './DogList'
import Walker from './Walker'
import BookingConfirmation from './BookingConfirmation'

function App() {
  return (
    <>
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ownerform" element={<OwnerForm />} />
          <Route path="/doglist" element={<DogList />} />
          <Route path="/walker/:id" element={<Walker />} />
          <Route
            path="/bookingConfirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
