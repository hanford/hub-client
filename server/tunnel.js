const debug = require('debug')('tunnel')
const isProd = process.env.NODE_ENV === 'production'
const ngrok = !isProd ? require('ngrok') : false
const config = require('./config')

if (ngrok) {
  ngrok.connect(config.PORT, (err, url) => {
    if (err) {
      throw err
    }

    debug(`> Tunnel proxy ready at ${url}`)
  })
} else {
  throw new Error('Should not run `ngrok` in production environment')
}
