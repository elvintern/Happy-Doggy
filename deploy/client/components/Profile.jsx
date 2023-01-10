import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { getUser, updateUser } from '../apis/api'

function Profile() {
  const { getAccessTokenSilently } = useAuth0()
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
  })

  useEffect(() => {
    getAccessTokenSilently()
      .then(getUser)
      .then((userDetails) => {
        console.log(userDetails)
        setForm(() => ({
          fullName: userDetails ? userDetails?.fullName : '',
          phoneNumber: userDetails ? userDetails?.phoneNumber : '',
          address: userDetails ? userDetails?.address : '',
        }))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function handleChange(e) {
    setForm(() => ({ ...form, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    await updateUser(form, token)
  }

  return (
    <>
      <form className="profile-form">
        <h2 className="heading heading-secondary">
          Please provide us your details
        </h2>
        <div className="form-container">
          <div className="input-box">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="input-box__input"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="input-box__input"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="input-box__input"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-form">
            Update
          </button>
        </div>
      </form>
    </>
  )
}

export default Profile
