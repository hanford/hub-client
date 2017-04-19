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

  const { time, date } = req.body.data

  if (pkg.length === 0 || firstpkg.state === 'delivered') {
    return res.status(500).send('Sorry no packages to schedule')
  }

  if (!date || !time) {
    return res.status(500).send(`Missing time or date (time: ${time} date: ${date})`)
  }

  const data = {
    delivery_schedule: {
      address_id: 1371,
      deliver_on: date,
      deliver_time_begin: Number(time) + 12,
      package_id: firstpkg.id
    }
  }

  console.log(data)

  return request.post({
    url: 'https://app.doorman.co/app/v1/delivery_schedules',
    form: data,
    headers: {
      'X-DOORMAN-AUTH-TOKEN': process.env.DOORMAN_API_KEY
    }
  }, (err, response, body) => {
    if (err) {
      return res.status(500).send('Doorman server error')
    }

    return res.json(body)
  })
})

module.exports = server
