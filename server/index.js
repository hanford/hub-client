const express = require('express')
const debug = require('debug')('app')
const basicAuth = require('basic-auth-connect')
const assert = require('assert')
const config = require('./config')
const api = require('./api')
const render = require('./render')
const server = express()

assert(process.env.HUB_USER, 'HUB_USER env var required')
assert(process.env.HUB_PASSWORD, 'HUB_PASSWORD env var required')

server.use(basicAuth(process.env.HUB_USER, process.env.HUB_PASSWORD))
server.use('/api', api)
server.use(render)

server.listen(config.PORT, err => {
  if (err) throw err

  debug(`> Ready on http://localhost:${config.PORT}`)
})
