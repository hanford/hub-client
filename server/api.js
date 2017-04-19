const { get } = require('axios')
const request = require('request')
const express = require('express')

const server = express()

let pkg = null

server.get('/packages', (req, res) => {
  return get('https://app.doorman.co/app/v1/packages', {
    headers: {
      'X-DOORMAN-AUTH-TOKEN': process.env.DOORMAN_API_KEY
    }
  })
  .then(r => r.data)
  .then(data => {

    pkg = data.packages

    return res.json(data)
  })
  .catch(err => {
    console.error(err)
    return res.error(err)
  })
})

server.post('/schedule', (req, res) => {
  let firstpkg = pkg[0]

  if (pkg.length === 0 || firstpkg.state === 'delivered') {
    return res.status(500).send('Sorry no packages to schedule')
  }

  const data = {
    delivery_schedule: {
      address_id: 1371,
      deliver_on: req.body.dates,
      deliver_time_begin: req.body.times,
      package_id: firstpkg.id
    }
  }

  return request.post('https://app.doorman.co/app/v1/schedule', {
    headers: {
      'X-DOORMAN-AUTH-TOKEN': process.env.DOORMAN_API_KEY
    },
    form: data
  }, (err, response, body) => {
    if (err) {
      return res.status(500).send('Doorman server error')
    }

    return res.send(body)
  })
})

module.exports = server
