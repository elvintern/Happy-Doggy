const server = require('./server')

const port = process.env.PORT || 3001

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})
