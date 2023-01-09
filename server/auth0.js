// const jwt = require('express-jwt')
const { expressjwt: jwt } = require('express-jwt')
const jwks = require('jwks-rsa')
const { ManagementClient } = require('auth0')
const dotenv = require('dotenv')

dotenv.config()

// TODO: set the domain and audience (API Identifier)
const domain = 'https://horoeka-22-rebecca.au.auth0.com'
const audience = 'https://happydoggy/api'
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

// https://auth0.github.io/node-auth0/ManagementClient.html
const managementDomain = 'horoeka-22-rebecca.au.auth0.com'
const managementAudience = 'https://horoeka-22-rebecca.au.auth0.com/api/v2/'
const clientId = '3A2A9WUjCtFd6LjaWoyeDqXqKZ61pTjs'
const clientSecret = process.env.AUTH0_API_SECRET || 'empty-secret'
const scope = 'read:users'

const management = new ManagementClient({
  domain: managementDomain,
  audience: managementAudience,
  clientId,
  clientSecret,
  scope,
  tokenProvider: {
    enableCache: true,
    cacheTTLInSeconds: 10,
  },
})

async function getUser(id) {
  const user = await management.getUser({ id })
  return { ...user.user_metadata.user_metadata, email: user.email }
}

async function updateUser(id, userDetails) {
  await management.updateUserMetadata(
    { id },
    { user_metadata: { ...userDetails } }
  )
  const user = await management.getUser({ id })
  return user.user_metadata
}

module.exports = {
  checkJwt,
  getUser,
  updateUser,
}
