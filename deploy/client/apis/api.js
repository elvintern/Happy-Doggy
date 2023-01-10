import request from 'superagent'

export function updateUser(user, token) {
  return request
    .post('/api/v1/users')
    .set('authorization', `Bearer ${token}`)
    .send(user)
}

export function getUser(token) {
  return request
    .get('/api/v1/users')
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body)
}
