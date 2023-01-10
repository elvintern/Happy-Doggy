import React, { useState, useEffect } from 'react'
import { fetchImgUrl, sendEmail } from '../apis/apiClient'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Walker() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  const [dogImgUrl, setDogImgUrl] = useState('')
  const [msg, setMessage] = useState('')

  useEffect(() => {
    fetchImgUrl({ id })
      .then((url) => {
        console.log(url)
        setDogImgUrl(() => url.body)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleChange(e) {
    setMessage(() => e.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const emailRequest = {
      walkerId: id,
      to: user.email,
      from: 'happy.4.doggy@gmail.com',
      subject: 'Booking request recieved',
      text: `You received an email from ${user.given_name} for booking your dog`,
      html: msg,
    }

    await sendEmail(emailRequest).catch((err) => {
      console.error(err.message)
    })
    navigate('/bookingConfirmation')
  }
  return (
    <>
      <h1 className="heading heading-tertiary">
        Tell us more about your Dog walking experience
      </h1>{' '}
      <br /> <br />
      <br />
      <div className="card-container">
        <div className="card card-walker">
          <img className="card-img" src={dogImgUrl} alt="doggy" />
          <form onSubmit={handleSubmit}>
            <section className="flex flex-col gap-4">
              <br /> <br />
              <label htmlFor="review">
                <h2 className="h2-class">
                  Let us know why you would like to walk this Happy Doggy
                  &#128062;
                </h2>
              </label>
              <div>
                <textarea
                  className="walker-text"
                  rows="5"
                  cols="50"
                  value={msg}
                  onChange={handleChange}
                  name="walkerReason"
                  placeholder="Please tell the owner your name, phone number, and why you wanna walk with me :)"
                ></textarea>
              </div>
              <NavLink
                className="btn btn-owner"
                to="/bookingConfirmation"
                onClick={
                  (!isAuthenticated && handleSignIn) ||
                  (isAuthenticated && handleSubmit)
                }
              >
                Walk me!!
              </NavLink>
            </section>
          </form>
        </div>
      </div>
    </>
  )
}

export default Walker
