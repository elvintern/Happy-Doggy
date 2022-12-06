import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postAvailableDog } from '../apiClient'

export default function OwnerForm() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    dogName: '',
    breed: '',
    dogImage: '',
    suburb: '',
    availibility: '',
    needs: '',
    introduction: '',
  })

  function handleChange(e) {
    setForm(() => ({ ...form, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    await postAvailableDog(form, token)
    navigate('/doglist')
  }

  return (
    <>
      <form className="profile-form">
        <h2 className="heading heading-secondary">Tell me about your dog!!</h2>
        <div className="form-container">
          <div className="input-box">
            <label htmlFor="fullName">Dog Name</label>
            <input
              type="text"
              name="dogName"
              className="input-box__input"
              value={form.dogName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="breed">Dog Breed</label>
            <input
              type="text"
              name="breed"
              className="input-box__input"
              value={form.breed}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="dogImage">Put your dog image url here!</label>
            <input
              type="text"
              name="dogImage"
              className="input-box__input"
              value={form.dogImage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="suburb">Location</label>
            <input
              type="text"
              name="suburb"
              className="input-box__input"
              value={form.suburb}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="availibility">Available Date</label>
            <input
              type="date"
              name="availibility"
              className="input-box__input"
              value={form.availibility}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="needs">Requirement</label>
            <textarea
              type="text"
              name="needs"
              rows="3"
              cols="50"
              className="input-box__input"
              value={form.needs}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="introduction">Introduction</label>
            <textarea
              type="text"
              name="introduction"
              rows="3"
              cols="50"
              className="input-box__input"
              value={form.introduction}
              onChange={handleChange}
              required
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-form">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
