import request from 'superagent'

export async function postWalkerDetails(objWalkerDetail) {
  return request.post('/api/v1/walker').json(objWalkerDetail)
}

export async function postAvailableDog(objOwnerDetail, token) {
  return request
    .post('/api/v1/ownerform/')
    .set('Authorization', `Bearer ${token}`)
    .send(objOwnerDetail)
}

export async function getDogList() {
  let dl = await request
    .get('/api/v1/doglist/')
    .then((response) => response.body)
  return dl
}

export async function fetchImgUrl(id) {
  console.log(id)
  return request.post(`/api/v1/walker/${id}`).send(id)
}

export async function sendEmail(emailRequest) {
  return await request.post(`/api/v1/sendEmail`).send(emailRequest)
}
