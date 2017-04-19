const { get } = require('axios')
const request = require('xhr')
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
    console.log('DATA!!', data)

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
      'X-DOORMAN-AUTH-TOKEN': process.env.DOORMAN_API_KEY,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
  }, (err, response) => {
    if (err) {
      return res.sendStatus(500)
    }

    const data = response.data

    return res.json(data)
  })

  // return res.json(data)
})

module.exports = server
