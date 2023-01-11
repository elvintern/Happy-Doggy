const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const dogListRoute = require('./routes/dogList')
const walkerRoute = require('./routes/walker')
const ownerRoute = require('./routes/owner')
const sendEmail = require('./routes/sendEmail')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/doglist', dogListRoute)
server.use('/api/v1/walker', walkerRoute)
server.use('/api/v1/ownerform', ownerRoute)
server.use('/api/v1/sendEmail', sendEmail)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
