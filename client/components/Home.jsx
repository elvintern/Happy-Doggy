import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()
  let welcomeMsg = ''
  if (isAuthenticated && user.given_name) {
    welcomeMsg =
      'Welcome ' + user.given_name + '!! How would you like to be happy?'
  } else {
    welcomeMsg = 'Welcome!! How would you like to be happy?'
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <h1 className="heading heading-primary">{welcomeMsg}</h1>
      <p className="about-paragraph">
        Happy Doggy was created by 4 dog-lovers. We connect dog owners who are
        time-poor with dog-lovers who want the opportunity to connect to a dog
        and take them for walks! Dog walkers can see a list of dogs, choose one
        they love, and submit a request to walk to the dog-owner. The owner can
        then decide if it`s a compatible match, and say yes!
      </p>
      <div className="card-container">
        <div className="card card-owner">
          <img
            className="card-img"
            src="/client/src/images/owner-card.jpg"
            alt="a dog being loved"
          />
          <h3 className="heading heading-tertiary">
            for owners / happy doggies
          </h3>
          <p className="card__intro">
            do you need someone to take care of your dog??
          </p>
          <NavLink
            className="btn btn-owner"
            to="/ownerform"
            onClick={!isAuthenticated && handleSignIn}
          >
            Click me!!
          </NavLink>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="/client/src/images/walker-card.jpg"
            alt="two happy dogs walking"
          />
          <h3 className="heading heading-tertiary">for walkers</h3>
          <p className="card__intro">
            do you want to walk with our happy doggies???
          </p>
          <Link to="/doglist" className="btn btn-owner">
            Click me!!
          </Link>
        </div>
      </div>
    </>
  )
}
