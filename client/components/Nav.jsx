import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <section className="nav-container">
        <nav className="nav">
          <div className="rounded-full ...">
            <Link className="logo" to="/">
              <img
                src="/client/src/images/logo.png"
                alt="dog pic"
                className="nav-logo"
              />
            </Link>
          </div>

          <div className="links">
            <Link className="logo" to="/">
              Home
            </Link>
            <Link className="logo" to="/about">
              About
            </Link>
            <Link className="logo" to="/doglist">
              Doglist
            </Link>
            <IfAuthenticated className="user-nav">
              <Link to="/profile">Profile</Link>
              <Link to="/" onClick={handleLogoff}>
                Log off
              </Link>
            </IfAuthenticated>

            <IfNotAuthenticated className="guest-nav">
              <Link className="logo" to="/" onClick={handleSignIn}>
                Sign In
              </Link>
              <Link className="logo" to="/" onClick={handleRegister}>
                Register
              </Link>
            </IfNotAuthenticated>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Nav
