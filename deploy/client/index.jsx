import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="horoeka-22-rebecca.au.auth0.com"
      clientId="02m0wmAWGZoWCf1mxq1Q9c5knmlP6gNA"
      redirectUri={window.location.origin}
      audience="https://happydoggy/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
